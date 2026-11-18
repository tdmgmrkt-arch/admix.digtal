'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, ChevronDown, Phone, Calendar, Sparkles, ArrowRight, BookOpen, Building2, Clock, Award, Handshake, Briefcase, Target, Users, TrendingUp, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button'; // Corrected alias (maps to src/components/ui/button)
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'; // Corrected alias (maps to src/components/ui/sheet)

// This component no longer needs the 'navigate' prop or 'PageName' type
// We are using file-based routing with Next.js <Link> component

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Set background to solid when scrolled, transparent at top
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (menu: string | null) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(menu);
  };

  const handleMenuClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(null);
    }, 100);
  };

  // handleNavigation is no longer needed as <Link> handles it

  const solutions = [
    { 
      title: 'AI Chatbots', 
      desc: 'Smart customer engagement 24/7',
      icon: '🤖',
      highlight: true,
      href: '/solutions'
    },
    { 
      title: 'Lead Automation', 
      desc: 'Capture and nurture leads automatically',
      icon: '⚡',
      href: '/solutions'
    },
    { 
      title: 'Email Marketing', 
      desc: 'Personalized campaigns that convert',
      icon: '📧',
      href: '/solutions'
    },
    { 
      title: 'CRM Integration', 
      desc: 'Seamless workflow management',
      icon: '🔗',
      href: '/solutions'
    },
    { 
      title: 'Social Media Automation', 
      desc: 'Consistent presence, zero effort',
      icon: '📱',
      href: '/solutions'
    },
    { 
      title: 'Analytics & Reporting', 
      desc: 'Data-driven insights dashboard',
      icon: '📊',
      href: '/solutions'
    }
  ];

  const industries = [
    { 
      title: 'Plumbers', 
      desc: 'Emergency call handling & scheduling',
      icon: '🔧',
      href: '/industries'
    },
    { 
      title: 'HVAC', 
      desc: 'Seasonal campaigns & maintenance reminders',
      icon: '❄️',
      href: '/industries'
    },
    { 
      title: 'Fitness', 
      desc: 'Member retention & class promotions',
      icon: '💪',
      href: '/industries'
    },
    { 
      title: 'Movers', 
      desc: 'Quote automation & booking systems',
      icon: '📦',
      href: '/industries'
    },
    { 
      title: 'Real Estate', 
      desc: 'Lead nurturing & property showcases',
      icon: '🏠',
      href: '/industries'
    },
    { 
      title: 'Dentists', 
      desc: 'Appointment reminders & patient care',
      icon: '🦷',
      href: '/industries'
    }
  ];

  const aiAutomation = [
    {
      title: 'Workflow Automation',
      desc: 'Streamline operations end-to-end',
      icon: '⚙️',
      href: '/ai-automation'
    },
    {
      title: 'AI Voice Agents',
      desc: 'Natural phone conversations 24/7',
      icon: '🎙️',
      href: '/ai-automation'
    },
    {
      title: 'Smart Follow-Up Systems',
      desc: 'Never miss a lead opportunity',
      icon: '🔄',
      href: '/ai-automation'
    },
    {
      title: 'Lead Routing AI',
      desc: 'Intelligent distribution & prioritization',
      icon: '🎯',
      href: '/ai-automation'
    },
    {
      title: 'CRM Sync',
      desc: 'Automatic data synchronization',
      icon: '🔗',
      href: '/ai-automation'
    },
    {
      title: 'Appointment Reminders',
      desc: 'Reduce no-shows by 70%',
      icon: '⏰',
      href: '/ai-automation'
    }
  ];

  const seoAds = [
    {
      title: 'Local SEO Optimization',
      desc: 'Dominate local search results',
      icon: '🗺️',
      href: '/seo-ads'
    },
    {
      title: 'Google Ads Management',
      desc: 'Maximum ROI on every dollar',
      icon: '🎯',
      href: '/seo-ads'
    },
    {
      title: 'Retargeting Campaigns',
      desc: 'Convert browsing into buying',
      icon: '🔁',
      href: '/seo-ads'
    },
    {
      title: 'Content & Landing Pages',
      desc: 'High-converting copy & design',
      icon: '📄',
      href: '/seo-ads'
    },
    {
      title: 'Review Management',
      desc: 'Build 5-star reputation',
      icon: '⭐',
      href: '/seo-ads'
    },
    {
      title: 'Conversion Tracking',
      desc: 'Measure what matters most',
      icon: '📈',
      href: '/seo-ads'
    }
  ];

  const aboutLinks = [
    { title: 'Our Mission', icon: Target, href: '/about' },
    { title: 'Team & Culture', icon: Users, href: '/about' },
    { title: 'Success Stories', icon: TrendingUp, href: '/about' },
    { title: 'Careers', icon: Briefcase, href: '/contact' },
    { title: 'Partners', icon: Handshake, href: '/contact' },
    { title: 'Resources & Blog', icon: BookOpen, href: '/' } // Example: Blog might link to home for now
  ];

  const navItems = [
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'AI Automation', href: '/ai-automation' },
      { label: 'SEO & Ads', href: '/seo-ads' },
      { label: 'Industries', href: '/industries' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
  ];
  const menuItems = ['Solutions', 'AI Automation', 'SEO & Ads', 'Industries', 'About', 'Contact'];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111827]/90 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/AMXDIG.png"
                  alt="Admix Digital Logo"
                  width={160}
                  height={40}
                  priority
                />
              </motion.div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (menuItems.includes(item.label)) {
                      handleMenuOpen(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    if (menuItems.includes(item.label)) {
                      handleMenuClose();
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className="relative text-[#F9FAFB] hover:text-[#06B6D4] transition-colors duration-300 flex items-center gap-1 group py-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                    {menuItems.includes(item.label) && (
                      <motion.div
                        animate={{ rotate: isMegaMenuOpen === item.label ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    )}
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#06B6D4] to-[#84CC16] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
               <Link href="/contact">
                  <Button
                    className="bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl px-6 py-3 hover:shadow-lg hover:shadow-[#06B6D4]/50 hover:scale-105 transition-all duration-300 border-0"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Get Free Audit
                  </Button>
               </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-[#F9FAFB]">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#111827]/95 backdrop-blur-xl border-[#06B6D4]/20">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[#F9FAFB] hover:text-[#06B6D4] transition-colors py-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button className="bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Get Free Audit
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* Full-Width Mega Menu */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
              onMouseEnter={() => setIsMegaMenuOpen(null)}
              style={{ top: '80px' }}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 z-[95] overflow-hidden"
              style={{ top: '80px' }}
              onMouseEnter={() => handleMenuOpen(isMegaMenuOpen)}
              onMouseLeave={handleMenuClose}
            >
              <div className="relative bg-[#111827]/90 backdrop-blur-2xl border-y border-[#06B6D4]/30 shadow-2xl shadow-black/50 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-[#1E3A8A]/20 via-transparent to-[#06B6D4]/10 pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-r from-[#1E3A8A]/10 via-[#111827]/5 to-[#111827]/10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84CC16]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06B6D4]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="mx-auto max-w-7xl px-12 py-12">
                  
                  {/* Solutions Dropdown */}
                  {isMegaMenuOpen === 'Solutions' && (
                    <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                       {/* Left Sidebar - Limited Offer */}
                       <div className="col-span-3 flex flex-col">
                         <div className="text-center mb-6" style={{ height: '68px' }}>
                           <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Special Offer</h4>
                           <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Exclusive for Temecula</p>
                         </div>
                         <div className="flex-1 flex flex-col gap-6">
                           <div className="relative p-6 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#84CC16]/20 border border-[#06B6D4]/30 backdrop-blur-xl overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-300 shadow-lg">
                             <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                             <Sparkles className="w-7 h-7 text-[#84CC16] mb-4 relative z-10" />
                             <h4 className="text-[#F9FAFB] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Limited Offer</h4>
                             <p className="text-[#9CA3AF] text-sm mb-5 relative z-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>Free AI Strategy Session worth $500 — exclusively for Temecula businesses</p>
                             <Link href="/contact">
                               <Button className="w-full bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/40 transition-all duration-300 border-0 relative z-10 group/btn">
                                 Claim Now
                                 <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                               </Button>
                             </Link>
                           </div>
                           <div className="p-4 rounded-xl bg-[#1E3A8A]/20 border border-[#06B6D4]/20 shadow-inner">
                             <p className="text-[#06B6D4] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>⭐️ 5.0 Rating</p>
                             <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Trusted by 50+ local businesses</p>
                           </div>
                         </div>
                       </div>
                       {/* Main Content */}
                       <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                         <div className="text-center mb-6" style={{ height: '68px' }}>
                           <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Solutions</h3>
                           <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>AI-powered tools designed for service businesses</p>
                         </div>
                         <div className="grid grid-cols-3 gap-6">
                           {solutions.map((item) => (
                            <Link key={item.title} href={item.href}>
                              <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10 cursor-pointer">
                                <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 shadow-inner opacity-50" />
                                <div className="relative z-10">
                                  <div className="text-3xl mb-3">{item.icon}</div>
                                  <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {item.title}
                                    {item.highlight && (<span className="ml-2 text-xs text-[#84CC16]">✨ New</span>)}
                                  </h4>
                                  <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                                </div>
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                                </div>
                              </motion.div>
                            </Link>
                           ))}
                         </div>
                       </div>
                       {/* Right Sidebar */}
                       <div className="col-span-2 flex flex-col">
                         <div className="text-center mb-6" style={{ height: '68px' }}>
                           <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Get Started</h4>
                           <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>We're ready to help</p>
                         </div>
                         <div className="flex-1 flex flex-col gap-6">
                           <motion.a href="tel:+19515550123" whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 border border-[#06B6D4]/30 hover:border-[#06B6D4]/60 transition-all duration-300 overflow-hidden shadow-lg block cursor-pointer">
                             <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                             <Phone className="w-6 h-6 text-[#06B6D4] mb-3 relative z-10" />
                             <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Call Us</h5>
                             <p className="text-[#06B6D4] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>(951) 555-0123</p>
                             <p className="text-[#9CA3AF] text-xs relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>Mon-Fri: 8am - 6pm PST</p>
                           </motion.a>
                            <Link href="/contact">
                              <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-linear-to-br from-[#84CC16]/20 to-[#1E3A8A]/20 border border-[#84CC16]/30 hover:border-[#84CC16]/60 transition-all duration-300 overflow-hidden shadow-lg flex-1 cursor-pointer">
                                <div className="absolute inset-0 bg-linear-to-br from-[#84CC16]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Calendar className="w-6 h-6 text-[#84CC16] mb-3 relative z-10" />
                                <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Free Consultation</h5>
                                <p className="text-[#9CA3AF] text-sm mb-3 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>30-min strategy call</p>
                                <div className="flex items-center text-[#84CC16] text-sm relative z-10 group-hover:translate-x-1 transition-transform" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  Book Now
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                              </motion.div>
                            </Link>
                           <div className="pt-4 border-t border-[#06B6D4]/20">
                             <Link href="/about" className="text-[#9CA3AF] hover:text-[#06B6D4] text-sm transition-colors flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                               View Case Studies
                               <ArrowRight className="w-3 h-3" />
                             </Link>
                           </div>
                         </div>
                       </div>
                    </div>
                  )}

                  {isMegaMenuOpen === 'Industries' && (
                     <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                        <div className="col-span-3 flex flex-col">
                         <div className="text-center mb-6" style={{ height: '68px' }}>
                           <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Tailored Solutions</h4>
                           <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>For Your Business</p>
                         </div>
                          <div className="flex-1 flex flex-col gap-6">
                           <div className="relative p-6 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#84CC16]/20 border border-[#06B6D4]/30 backdrop-blur-xl overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-300 shadow-lg">
                             <div className="text-3xl mb-4">🎯</div>
                             <h4 className="text-[#F9FAFB] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Industry Focus</h4>
                             <p className="text-[#9CA3AF] text-sm mb-5 relative z-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>Specialized AI and marketing strategies designed for the unique challenges of your industry.</p>
                             <Link href="/industries" >
                               <Button className="w-full bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/40 transition-all duration-300 border-0 relative z-10 group/btn">
                                 Explore Industries
                                 <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                               </Button>
                             </Link>
                           </div>
                         </div>
                        </div>
                        <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                          <div className="text-center mb-6" style={{ height: '68px' }}>
                            <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Industries We Empower</h3>
                            <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>Specific solutions for specific needs</p>
                          </div>
                          <div className="grid grid-cols-3 gap-6">
                            {industries.map((item) => (
                              <Link key={item.title} href={item.href} >
                                <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10 cursor-pointer">
                                  <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="absolute inset-0 shadow-inner opacity-50" />
                                  <div className="relative z-10">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                                    <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                                  </div>
                                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                                  </div>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>
                       <div className="col-span-2 flex flex-col">
                         <div className="text-center mb-6" style={{ height: '68px' }}>
                           <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Not Listed?</h4>
                           <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>We can help!</p>
                         </div>
                         <div className="flex-1 flex flex-col gap-6">
                           <motion.a href="tel:+19515550123" whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 border border-[#06B6D4]/30 hover:border-[#06B6D4]/60 transition-all duration-300 overflow-hidden shadow-lg block cursor-pointer">
                            <Phone className="w-6 h-6 text-[#06B6D4] mb-3 relative z-10" />
                             <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Call Us</h5>
                             <p className="text-[#06B6D4] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>(951) 555-0123</p>
                           </motion.a>
                            <Link href="/contact">
                              <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-linear-to-br from-[#84CC16]/20 to-[#1E3A8A]/20 border border-[#84CC16]/30 hover:border-[#84CC16]/60 transition-all duration-300 overflow-hidden shadow-lg flex-1 cursor-pointer">
                                <Calendar className="w-6 h-6 text-[#84CC16] mb-3 relative z-10" />
                                <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Request Custom Solution</h5>
                                <p className="text-[#9CA3AF] text-sm mb-3 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>Tell us about your business needs.</p>
                                <div className="flex items-center text-[#84CC16] text-sm relative z-10 group-hover:translate-x-1 transition-transform" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  Inquire Now
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                              </motion.div>
                            </Link>
                         </div>
                       </div>
                     </div>
                  )}

                  {isMegaMenuOpen === 'AI Automation' && (
                     <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                        <div className="col-span-3 flex flex-col">
                         <div className="text-center mb-6" style={{ height: '68px' }}>
                           <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Special Offer</h4>
                           <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Exclusive for Temecula</p>
                         </div>
                          <div className="flex-1 flex flex-col gap-6">
                           <div className="relative p-6 rounded-xl bg-linear-to-br from-[#84CC16]/20 to-[#06B6D4]/20 border border-[#84CC16]/30 backdrop-blur-xl overflow-hidden group hover:border-[#84CC16]/50 transition-all duration-300 shadow-lg">
                             <div className="absolute inset-0 bg-linear-to-br from-[#84CC16]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                             <div className="text-3xl mb-4">🚀</div>
                             <h4 className="text-[#F9FAFB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Free AI Setup</h4>
                             <p className="text-[#9CA3AF] text-sm mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>Get AI automation running in your business — exclusively for Temecula area</p>
                             <Link href="/contact">
                               <Button className="w-full bg-linear-to-r from-[#84CC16] to-[#06B6D4] text-white rounded-xl hover:shadow-lg hover:shadow-[#84CC16]/40 transition-all duration-300 border-0">
                                 Get Offer
                                 <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                               </Button>
                              </Link>
                           </div>
                           <div className="p-4 rounded-xl bg-[#1E3A8A]/20 border border-[#06B6D4]/20 shadow-inner">
                             <p className="text-[#84CC16] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>⚡ Quick Setup</p>
                             <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Live in 48 hours or less</p>
                           </div>
                         </div>
                        </div>
                        <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                          <div className="text-center mb-6" style={{ height: '68px' }}>
                            <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>AI Automation Solutions</h3>
                            <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>Transform your business with intelligent automation</p>
                          </div>
                          <div className="grid grid-cols-3 gap-6">
                            {aiAutomation.map((item) => (
                              <Link key={item.title} href={item.href} >
                                <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10 cursor-pointer">
                                  <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="relative z-10">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4]" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                                    <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                                  </div>
                                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                                  </div>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-2 flex flex-col">
                          <div className="text-center mb-6" style={{ height: '68px' }}>
                            <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>See It Live</h4>
                            <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Book a live demo</p>
                          </div>
                          <div className="flex-1 flex flex-col gap-6">
                            <Link href="/contact">
                              <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-linear-to-br from-[#84CC16]/20 to-[#1E3A8A]/20 border border-[#84CC16]/30 hover:border-[#84CC16]/60 transition-all duration-300 overflow-hidden shadow-lg flex-1 cursor-pointer">
                                <Calendar className="w-6 h-6 text-[#84CC16] mb-3 relative z-10" />
                                <h5 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Book Free Demo</h5>
                                <p className="text-[#9CA3AF] text-sm mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>See AI automation in action</p>
                                <div className="flex items-center text-[#84CC16] text-sm group-hover:translate-x-1 transition-transform" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  Schedule Now
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                              </motion.div>
                            </Link>
                          </div>
                        </div>
                     </div>
                  )}

                  {isMegaMenuOpen === 'SEO & Ads' && (
                     <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                        <div className="col-span-3 flex flex-col">
                         <div className="text-center mb-6" style={{ height: '68px' }}>
                           <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Limited Offer</h4>
                           <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Double Your ROI</p>
                         </div>
                          <div className="flex-1 flex flex-col gap-6">
                           <div className="relative p-6 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#F59E0B]/20 border border-[#06B6D4]/30 backdrop-blur-xl overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-300 shadow-lg">
                             <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                             <div className="text-3xl mb-4">💰</div>
                             <h4 className="text-[#F9FAFB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Free Ad Audit</h4>
                             <p className="text-[#9CA3AF] text-sm mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>Get a full performance audit of your Google and Meta Ads campaigns — no cost.</p>
                             <Link href="/contact">
                               <Button className="w-full bg-linear-to-r from-[#06B6D4] to-[#F59E0B] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/40 transition-all duration-300 border-0">
                                 Claim Audit
                                 <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                               </Button>
                             </Link>
                           </div>
                           <div className="p-4 rounded-xl bg-[#1E3A8A]/20 border border-[#06B6D4]/20 shadow-inner">
                             <p className="text-[#F59E0B] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>📈 Proven Results</p>
                             <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Avg. 3.2x increase in conversions</p>
                           </div>
                         </div>
                        </div>
                        <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                          <div className="text-center mb-6" style={{ height: '68px' }}>
                            <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>SEO & Ad Management</h3>
                            <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>Boost visibility and maximize ROI with precision targeting</p>
                          </div>
                          <div className="grid grid-cols-3 gap-6">
                            {seoAds.map((item) => (
                              <Link key={item.title} href={item.href} >
                                <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10 cursor-pointer">
                                  <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#F59E0B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="relative z-10">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4]" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                                    <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                                  </div>
                                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                                  </div>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-2 flex flex-col">
                          <div className="text-center mb-6" style={{ height: '68px' }}>
                            <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Free Consultation</h4>
                            <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Let’s grow your business</p>
                          </div>
                          <div className="flex-1 flex flex-col gap-6">
                            <Link href="/contact">
                              <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-linear-to-br from-[#F59E0B]/20 to-[#1E3A8A]/20 border border-[#F59E0B]/30 hover:border-[#F59E0B]/60 transition-all duration-300 overflow-hidden shadow-lg flex-1 cursor-pointer">
                                <Calendar className="w-6 h-6 text-[#F59E0B] mb-3 relative z-10" />
                                <h5 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Book Strategy Call</h5>
                                <p className="text-[#9CA3AF] text-sm mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Get actionable insights from our experts</p>
                                <div className="flex items-center text-[#F59E0B] text-sm group-hover:translate-x-1 transition-transform" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  Schedule Now
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                              </motion.div>
                            </Link>
                          </div>
                        </div>
                     </div>
                  )}

                  {isMegaMenuOpen === 'About' && (
                     <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                        <div className="col-span-3 flex flex-col">
                         <div className="text-center mb-6" style={{ height: '68px' }}>
                           <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission</h4>
                           <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Empowering local growth</p>
                         </div>
                          <div className="flex-1 flex flex-col gap-6">
                           <div className="relative p-6 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#84CC16]/20 border border-[#06B6D4]/30 backdrop-blur-xl overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-300 shadow-lg">
                             <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                             <div className="text-3xl mb-4">🌍</div>
                             <h4 className="text-[#F9FAFB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Local Impact</h4>
                             <p className="text-[#9CA3AF] text-sm mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>We help small and mid-sized businesses grow with modern digital solutions that deliver measurable results.</p>
                             <Link href="/about" >
                               <Button className="w-full bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/40 transition-all duration-300 border-0">
                                 Learn More
                                 <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                               </Button>
                              </Link>
                           </div>
                           <div className="p-4 rounded-xl bg-[#1E3A8A]/20 border border-[#06B6D4]/20 shadow-inner">
                             <p className="text-[#06B6D4] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>🚀 Growth Driven</p>
                             <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>100+ successful projects completed</p>
                           </div>
                         </div>
                        </div>
                        <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                          <div className="text-center mb-6" style={{ height: '68px' }}>
                            <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>About Admix Digital</h3>
                            <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>Helping local businesses scale with strategy, design, and technology.</p>
                          </div>
                          <div className="grid grid-cols-3 gap-6">
                            {aboutLinks.map((item, index) => (
                              <Link key={index} href={item.href} >
                                <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10 cursor-pointer">
                                  <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="relative z-10">
                                    <item.icon className="w-6 h-6 mb-3 text-[#84CC16]" />
                                    <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4]" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                                  </div>
                                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                                  </div>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-2 flex flex-col">
                          <div className="text-center mb-6" style={{ height: '68px' }}>
                            <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Meet Our Team</h4>
                            <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Passionate experts in tech & marketing</p>
                          </div>
                          <div className="flex-1 flex flex-col gap-6">
                            <Link href="/about" >
                              <motion.div whileHover={{ y: -3 }} className="group relative p-5 rounded-xl bg-linear-to-br from-[#84CC16]/20 to-[#1E3A8A]/20 border border-[#84CC16]/30 hover:border-[#84CC16]/60 transition-all duration-300 overflow-hidden shadow-lg flex-1 cursor-pointer">
                                <Users className="w-6 h-6 text-[#84CC16] mb-3 relative z-10" />
                                <h5 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>The Admix Team</h5>
                                <p className="text-[#9CA3AF] text-sm mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Get to know the people behind our projects</p>
                                <div className="flex items-center text-[#84CC16] text-sm group-hover:translate-x-1 transition-transform" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  Meet Us
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                              </motion.div>
                            </Link>
                          </div>
                        </div>
                     </div>
                  )}

                  {isMegaMenuOpen === 'Contact' && (
                     <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                        <div className="col-span-3 flex flex-col">
                         <div className="text-center mb-6" style={{ height: '68px' }}>
                           <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Contact</h4>
                           <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Reach us directly</p>
                         </div>
                          <div className="flex-1 flex flex-col gap-6">
                           <div className="relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 border border-[#06B6D4]/30 shadow-lg">
                             <Phone className="w-6 h-6 text-[#06B6D4] mb-3" />
                             <h5 className="text-[#F9FAFB] mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Phone</h5>
                             <a href="tel:+19515550123" className="text-[#06B6D4] mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>(951) 555-0123</a>
                             <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Mon–Fri: 8am – 6pm PST</p>
                           </div>
                           <div className="p-5 rounded-xl bg-[#1E3A8A]/20 border border-[#84CC16]/30 shadow-lg">
                             <Mail className="w-6 h-6 text-[#84CC16] mb-3" />
                             <h5 className="text-[#F9FAFB] mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Email</h5>
                             <a href="mailto:hello@admixdigital.com" className="text-[#84CC16] text-sm block" style={{ fontFamily: 'Inter, sans-serif' }}>hello@admixdigital.com</a>
                           </div>
                           <div className="p-4 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                             <div className="flex items-center gap-2">
                               <Clock className="w-5 h-5 text-[#06B6D4]" />
                               <p className="text-[#F9FAFB] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Fast Response</p>
                             </div>
                             <p className="text-[#9CA3AF] text-xs mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>We reply within 1 business day</p>
                           </div>
                         </div>
                        </div>
                        <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                          <div className="text-center mb-6" style={{ height: '68px' }}>
                            <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Get In Touch</h3>
                            <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>Choose the best way to reach us</p>
                          </div>
                          <div className="grid grid-cols-3 gap-6">
                            {[
                              { icon: '📅', title: 'Schedule Call', desc: 'Book a 30-min strategy session', href: '/contact' },
                              { icon: '💬', title: 'Send Message', desc: 'Ask us anything anytime', href: '/contact' },
                              { icon: '📍', title: 'Visit Office', desc: 'Temecula, CA', href: '/contact' },
                              { icon: '💰', title: 'Request Quote', desc: 'Get a custom pricing plan', href: '/contact' },
                              { icon: '🚨', title: 'Emergency Support', desc: '24/7 for existing clients', href: 'tel:+19515550123' },
                              { icon: '⚙️', title: 'Partner Inquiry', desc: 'Work with our team', href: '/contact' }
                            ].map((item, index) => {
                              const isTel = item.href.startsWith('tel:');
                              const content = (
                                <motion.div
                                  whileHover={{ y: -3 }}
                                  className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10 cursor-pointer"
                                >
                                  <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="relative z-10">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4]" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                                    <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                                  </div>
                                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                                  </div>
                                </motion.div>
                              );

                              return isTel ? (
                                <a key={index} href={item.href}>
                                  {content}
                                </a>
                              ) : (
                                <Link key={index} href={item.href}>
                                  {content}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-span-2 flex flex-col">
                          <div className="text-center mb-6" style={{ height: '68px' }}>
                            <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Location</h4>
                            <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Come visit us</p>
                          </div>
                          <div className="flex-1 flex flex-col gap-6">
                            <div className="relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#84CC16]/20 border border-[#06B6D4]/30 transition-all duration-300 shadow-lg flex-1">
                              <MapPin className="w-6 h-6 text-[#06B6D4] mb-3" />
                              <h5 className="text-[#F9FAFB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Temecula Office</h5>
                              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Old Town Temecula<br />
                                Temecula, CA 92590
                              </p>
                              <Link href="/contact" className="inline-flex items-center gap-1 text-[#06B6D4] hover:text-[#84CC16] text-sm transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Get Directions
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </div>
                     </div>
                  )}

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}