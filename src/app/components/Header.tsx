'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, ChevronDown, Phone, Calendar, Sparkles, ArrowRight, MessageSquare, MapPin, Users, Target, Briefcase, Handshake, Award, Clock, Mail, Building2, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
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

  const solutions = [
    { 
      title: 'AI Chatbots', 
      desc: 'Smart customer engagement 24/7',
      icon: '🤖',
      highlight: true
    },
    { 
      title: 'Lead Automation', 
      desc: 'Capture and nurture leads automatically',
      icon: '⚡'
    },
    { 
      title: 'Email Marketing', 
      desc: 'Personalized campaigns that convert',
      icon: '📧'
    },
    { 
      title: 'CRM Integration', 
      desc: 'Seamless workflow management',
      icon: '🔗'
    },
    { 
      title: 'Social Media Automation', 
      desc: 'Consistent presence, zero effort',
      icon: '📱'
    },
    { 
      title: 'Analytics & Reporting', 
      desc: 'Data-driven insights dashboard',
      icon: '📊'
    }
  ];

  const industries = [
    { 
      title: 'Plumbers', 
      desc: 'Emergency call handling & scheduling',
      icon: '🔧'
    },
    { 
      title: 'HVAC', 
      desc: 'Seasonal campaigns & maintenance reminders',
      icon: '❄️'
    },
    { 
      title: 'Fitness', 
      desc: 'Member retention & class promotions',
      icon: '💪'
    },
    { 
      title: 'Movers', 
      desc: 'Quote automation & booking systems',
      icon: '📦'
    },
    { 
      title: 'Real Estate', 
      desc: 'Lead nurturing & property showcases',
      icon: '🏠'
    },
    { 
      title: 'Dentists', 
      desc: 'Appointment reminders & patient care',
      icon: '🦷'
    }
  ];

  const aiAutomation = [
    {
      title: 'Workflow Automation',
      desc: 'Streamline operations end-to-end',
      icon: '⚙️'
    },
    {
      title: 'AI Voice Agents',
      desc: 'Natural phone conversations 24/7',
      icon: '🎙️'
    },
    {
      title: 'Smart Follow-Up Systems',
      desc: 'Never miss a lead opportunity',
      icon: '🔄'
    },
    {
      title: 'Lead Routing AI',
      desc: 'Intelligent distribution & prioritization',
      icon: '🎯'
    },
    {
      title: 'CRM Sync',
      desc: 'Automatic data synchronization',
      icon: '🔗'
    },
    {
      title: 'Appointment Reminders',
      desc: 'Reduce no-shows by 70%',
      icon: '⏰'
    }
  ];

  const seoAds = [
    {
      title: 'Local SEO Optimization',
      desc: 'Dominate local search results',
      icon: '🗺️'
    },
    {
      title: 'Google Ads Management',
      desc: 'Maximum ROI on every dollar',
      icon: '🎯'
    },
    {
      title: 'Retargeting Campaigns',
      desc: 'Convert browsing into buying',
      icon: '🔁'
    },
    {
      title: 'Content & Landing Pages',
      desc: 'High-converting copy & design',
      icon: '📄'
    },
    {
      title: 'Review Management',
      desc: 'Build 5-star reputation',
      icon: '⭐'
    },
    {
      title: 'Conversion Tracking',
      desc: 'Measure what matters most',
      icon: '📈'
    }
  ];

  const aboutLinks = [
    { title: 'Our Mission', icon: Target },
    { title: 'Team & Culture', icon: Users },
    { title: 'Success Stories', icon: TrendingUp },
    { title: 'Careers', icon: Briefcase },
    { title: 'Partners', icon: Handshake },
    { title: 'Resources & Blog', icon: BookOpen }
  ];

  const navItems = ['Home', 'Solutions', 'AI Automation', 'SEO & Ads', 'Industries', 'About', 'Contact'];
  const menuItems = ['Solutions', 'AI Automation', 'SEO & Ads', 'Industries', 'About', 'Contact'];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#06B6D4] to-[#84CC16] flex items-center justify-center shadow-lg shadow-[#06B6D4]/30">
                <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>A</span>
              </div>
              <span className="text-xl text-[#F9FAFB]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Admix Digital
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="relative pb-6"
                  onMouseEnter={() => {
                    if (menuItems.includes(item)) {
                      handleMenuOpen(item);
                    }
                  }}
                  onMouseLeave={() => {
                    if (menuItems.includes(item)) {
                      handleMenuClose();
                    }
                  }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="relative text-[#F9FAFB] hover:text-[#06B6D4] transition-colors duration-300 flex items-center gap-1 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item}
                    {menuItems.includes(item) && (
                      <motion.div
                        animate={{ rotate: isMegaMenuOpen === item ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    )}
                    {/* Glow underline on hover */}
                    <motion.span 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-[#06B6D4] to-[#84CC16] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                className="bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl px-6 py-3 hover:shadow-lg hover:shadow-[#06B6D4]/50 hover:scale-105 transition-all duration-300 border-0"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Get Free Audit
              </Button>
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
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="text-[#F9FAFB] hover:text-[#06B6D4] transition-colors py-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item}
                    </a>
                  ))}
                  <Button className="bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Get Free Audit
                  </Button>
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
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onMouseEnter={() => setIsMegaMenuOpen(null)}
              style={{ top: '72px' }}
            />

            {/* Mega Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 z-50 overflow-hidden"
              style={{ top: '72px' }}
              onMouseEnter={() => handleMenuOpen(isMegaMenuOpen)}
              onMouseLeave={handleMenuClose}
            >
              
              {/* Glassmorphism Container - Full Width */}
              <div className="relative bg-[#111827]/90 backdrop-blur-2xl border-y border-[#06B6D4]/30 shadow-2xl shadow-black/50 overflow-hidden">
                {/* Ambient Gradient Background */}
                <div className="absolute inset-0 bg-linear-to-br from-[#1E3A8A]/20 via-transparent to-[#06B6D4]/10 pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-r from-[#1E3A8A]/10 via-[#111827]/5 to-[#111827]/10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84CC16]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06B6D4]/5 rounded-full blur-[100px] pointer-events-none" />

                {/* Content - Boxed */}
                <div className="mx-auto max-w-7xl px-12 py-12">
                  {/* Solutions Dropdown */}
                  {isMegaMenuOpen === 'Solutions' && (
                    <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                      {/* Left Sidebar - Limited Offer */}
                      <div className="col-span-3 flex flex-col">
                        {/* Header to match center column height */}
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Special Offer
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Exclusive for Temecula
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <div className="relative p-6 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#84CC16]/20 border border-[#06B6D4]/30 backdrop-blur-xl overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-300 shadow-lg">
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Sparkles className="w-7 h-7 text-[#84CC16] mb-4 relative z-10" />
                            <h4 className="text-[#F9FAFB] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Limited Offer
                            </h4>
                            <p className="text-[#9CA3AF] text-sm mb-5 relative z-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Free AI Strategy Session worth $500 — exclusively for Temecula businesses
                            </p>
                            <Button 
                              className="w-full bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/40 transition-all duration-300 border-0 relative z-10 group/btn"
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              Claim Now
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                          
                          <div className="p-4 rounded-xl bg-[#1E3A8A]/20 border border-[#06B6D4]/20 shadow-inner">
                            <p className="text-[#06B6D4] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              ⭐️ 5.0 Rating
                            </p>
                            <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Trusted by 50+ local businesses
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Our Solutions
                          </h3>
                          <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            AI-powered tools designed for service businesses
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                          {solutions.map((item, index) => (
                            <motion.a
                              key={item.title}
                              href="#"
                              whileHover={{ y: -3 }}
                              className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                            >
                              <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute inset-0 shadow-inner opacity-50" />
                              
                              <div className="relative z-10">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  {item.title}
                                  {item.highlight && (
                                    <span className="ml-2 text-xs text-[#84CC16]">✨ New</span>
                                  )}
                                </h4>
                                <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  {item.desc}
                                </p>
                              </div>

                              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Right Sidebar - Get Started */}
                      <div className="col-span-2 flex flex-col">
                        {/* Header to match center column height */}
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Get Started
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            We're ready to help
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <motion.a
                            href="tel:+19515550123"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 border border-[#06B6D4]/30 hover:border-[#06B6D4]/60 transition-all duration-300 overflow-hidden shadow-lg block"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Phone className="w-6 h-6 text-[#06B6D4] mb-3 relative z-10" />
                            <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Call Us
                            </h5>
                            <p className="text-[#06B6D4] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              (951) 555-0123
                            </p>
                            <p className="text-[#9CA3AF] text-xs relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Mon-Fri: 8am - 6pm PST
                            </p>
                          </motion.a>

                          <motion.a
                            href="#consultation"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-linear-to-br from-[#84CC16]/20 to-[#1E3A8A]/20 border border-[#84CC16]/30 hover:border-[#84CC16]/60 transition-all duration-300 overflow-hidden shadow-lg block flex-1"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#84CC16]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Calendar className="w-6 h-6 text-[#84CC16] mb-3 relative z-10" />
                            <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Free Consultation
                            </h5>
                            <p className="text-[#9CA3AF] text-sm mb-3 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                              30-min strategy call
                            </p>
                            <div className="flex items-center text-[#84CC16] text-sm relative z-10 group-hover:translate-x-1 transition-transform" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Book Now
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </motion.a>

                          <div className="pt-4 border-t border-[#06B6D4]/20">
                            <a 
                              href="#resources" 
                              className="text-[#9CA3AF] hover:text-[#06B6D4] text-sm transition-colors flex items-center gap-2"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              View Case Studies
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Industries Dropdown */}
                  {isMegaMenuOpen === 'Industries' && (
                    <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                      {/* Left Sidebar - Limited Offer */}
                      <div className="col-span-3 flex flex-col">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Special Offer
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Exclusive for Temecula
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <div className="relative p-6 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#84CC16]/20 border border-[#06B6D4]/30 backdrop-blur-xl overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-300 shadow-lg">
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Sparkles className="w-7 h-7 text-[#84CC16] mb-4 relative z-10" />
                            <h4 className="text-[#F9FAFB] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Limited Offer
                            </h4>
                            <p className="text-[#9CA3AF] text-sm mb-5 relative z-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Free AI Strategy Session worth $500 — exclusively for Temecula businesses
                            </p>
                            <Button 
                              className="w-full bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/40 transition-all duration-300 border-0 relative z-10 group/btn"
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              Claim Now
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                          
                          <div className="p-4 rounded-xl bg-[#1E3A8A]/20 border border-[#06B6D4]/20 shadow-inner">
                            <p className="text-[#06B6D4] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              ⭐️ 5.0 Rating
                            </p>
                            <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Trusted by 50+ local businesses
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Industries We Serve
                          </h3>
                          <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Specialized automation for your industry
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                          {industries.map((item, index) => (
                            <motion.a
                              key={item.title}
                              href="#"
                              whileHover={{ y: -3 }}
                              className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                            >
                              <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute inset-0 shadow-inner opacity-50" />
                              
                              <div className="relative z-10">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  {item.title}
                                </h4>
                                <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  {item.desc}
                                </p>
                              </div>

                              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Right Sidebar - Get Started */}
                      <div className="col-span-2 flex flex-col">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Get Started
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            We're ready to help
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <motion.a
                            href="tel:+19515550123"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 border border-[#06B6D4]/30 hover:border-[#06B6D4]/60 transition-all duration-300 overflow-hidden shadow-lg block"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Phone className="w-6 h-6 text-[#06B6D4] mb-3 relative z-10" />
                            <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Call Us
                            </h5>
                            <p className="text-[#06B6D4] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              (951) 555-0123
                            </p>
                            <p className="text-[#9CA3AF] text-xs relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Mon-Fri: 8am - 6pm PST
                            </p>
                          </motion.a>

                          <motion.a
                            href="#consultation"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-linear-to-br from-[#84CC16]/20 to-[#1E3A8A]/20 border border-[#84CC16]/30 hover:border-[#84CC16]/60 transition-all duration-300 overflow-hidden shadow-lg block flex-1"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#84CC16]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Calendar className="w-6 h-6 text-[#84CC16] mb-3 relative z-10" />
                            <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Free Consultation
                            </h5>
                            <p className="text-[#9CA3AF] text-sm mb-3 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                              30-min strategy call
                            </p>
                            <div className="flex items-center text-[#84CC16] text-sm relative z-10 group-hover:translate-x-1 transition-transform" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Book Now
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </motion.a>

                          <div className="pt-4 border-t border-[#06B6D4]/20">
                            <a 
                              href="#resources" 
                              className="text-[#9CA3AF] hover:text-[#06B6D4] text-sm transition-colors flex items-center gap-2"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              View Case Studies
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AI Automation Dropdown */}
                  {isMegaMenuOpen === 'AI Automation' && (
                    <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                      {/* Left Sidebar - Free AI Setup */}
                      <div className="col-span-3 flex flex-col">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Special Offer
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Exclusive for Temecula
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <div className="relative p-6 rounded-xl bg-linear-to-br from-[#84CC16]/20 to-[#06B6D4]/20 border border-[#84CC16]/30 backdrop-blur-xl overflow-hidden group hover:border-[#84CC16]/50 transition-all duration-300 shadow-lg">
                            <div className="absolute inset-0 bg-linear-to-br from-[#84CC16]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="text-3xl mb-4">🚀</div>
                            <h4 className="text-[#F9FAFB] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Free AI Setup
                            </h4>
                            <p className="text-[#9CA3AF] text-sm mb-5 relative z-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Get AI automation running in your business — exclusively for Temecula area
                            </p>
                            <Button 
                              className="w-full bg-linear-to-r from-[#84CC16] to-[#06B6D4] text-white rounded-xl hover:shadow-lg hover:shadow-[#84CC16]/40 transition-all duration-300 border-0 relative z-10 group/btn"
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              Get Offer
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                          
                          <div className="p-4 rounded-xl bg-[#1E3A8A]/20 border border-[#06B6D4]/20 shadow-inner">
                            <p className="text-[#84CC16] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              ⚡ Quick Setup
                            </p>
                            <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Live in 48 hours or less
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            AI Automation Solutions
                          </h3>
                          <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Transform your business with intelligent automation
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                          {aiAutomation.map((item, index) => (
                            <motion.a
                              key={item.title}
                              href="#"
                              whileHover={{ y: -3 }}
                              className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                            >
                              <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute inset-0 shadow-inner opacity-50" />
                              
                              <div className="relative z-10">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  {item.title}
                                </h4>
                                <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  {item.desc}
                                </p>
                              </div>

                              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Right Sidebar - Book Demo */}
                      <div className="col-span-2 flex flex-col">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            See It Live
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Book a live demo
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <motion.a
                            href="tel:+19515550123"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 border border-[#06B6D4]/30 hover:border-[#06B6D4]/60 transition-all duration-300 overflow-hidden shadow-lg block"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Phone className="w-6 h-6 text-[#06B6D4] mb-3 relative z-10" />
                            <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Call Us
                            </h5>
                            <p className="text-[#06B6D4] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              (951) 555-0123
                            </p>
                            <p className="text-[#9CA3AF] text-xs relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Mon-Fri: 8am - 6pm PST
                            </p>
                          </motion.a>

                          <motion.a
                            href="#demo"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-linear-to-br from-[#84CC16]/20 to-[#1E3A8A]/20 border border-[#84CC16]/30 hover:border-[#84CC16]/60 transition-all duration-300 overflow-hidden shadow-lg block flex-1"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#84CC16]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Calendar className="w-6 h-6 text-[#84CC16] mb-3 relative z-10" />
                            <h5 className="text-[#F9FAFB] mb-1 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Book Free Demo
                            </h5>
                            <p className="text-[#9CA3AF] text-sm mb-3 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                              See AI automation in action
                            </p>
                            <div className="flex items-center text-[#84CC16] text-sm relative z-10 group-hover:translate-x-1 transition-transform" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Schedule Now
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </motion.a>

                          <div className="pt-4 border-t border-[#06B6D4]/20">
                            <a 
                              href="#automation-guide" 
                              className="text-[#9CA3AF] hover:text-[#06B6D4] text-sm transition-colors flex items-center gap-2"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Download Guide
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SEO & Ads Dropdown */}
                  {isMegaMenuOpen === 'SEO & Ads' && (
                    <div className="relative" style={{ minHeight: '520px' }}>
                      <div className="grid grid-cols-12 gap-6">
                        {/* Main Content */}
                        <div className="col-span-9">
                          <div className="text-center mb-6">
                            <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              SEO & Advertising Services
                            </h3>
                            <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Dominate local search and maximize ad ROI
                            </p>
                          </div>

                          <div className="grid grid-cols-3 gap-6">
                            {seoAds.map((item, index) => (
                              <motion.a
                                key={item.title}
                                href="#"
                                whileHover={{ y: -3 }}
                                className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                              >
                                <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 shadow-inner opacity-50" />
                                
                                <div className="relative z-10">
                                  <div className="text-3xl mb-3">{item.icon}</div>
                                  <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {item.title}
                                  </h4>
                                  <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {item.desc}
                                  </p>
                                </div>

                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </div>

                        {/* Right Promo Card */}
                        <div className="col-span-2 flex flex-col">
                          <motion.div
                            whileHover={{ y: -3 }}
                            className="relative p-6 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#84CC16]/20 border border-[#06B6D4]/30 backdrop-blur-xl overflow-hidden group hover:border-[#06B6D4]/50 transition-all duration-300 shadow-lg h-full flex flex-col justify-between"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div>
                              <div className="text-3xl mb-4">📈</div>
                              <h4 className="text-[#F9FAFB] mb-2 relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Free SEO Audit
                              </h4>
                              <p className="text-[#9CA3AF] text-sm mb-5 relative z-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Discover how you rank locally and get a custom growth plan worth $500
                              </p>
                            </div>
                            <Button 
                              className="w-full bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/40 transition-all duration-300 border-0 relative z-10 group/btn flex items-center justify-center gap-2"
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              Get Free Audit
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>

                      {/* Bottom Tagline */}
                      <div className="mt-6 text-center">
                        <p className="text-[#9CA3AF] italic text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Drive leads with precision.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* About Dropdown */}
                  {isMegaMenuOpen === 'About' && (
                    <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                      {/* Left Column - Company Info */}
                      <div className="col-span-3 flex flex-col">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Company Info
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Trusted since 2020
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <div className="relative p-6 rounded-xl bg-linear-to-br from-[#1E3A8A]/30 to-[#111827]/20 border border-[#06B6D4]/20">
                            <Award className="w-7 h-7 text-[#84CC16] mb-4" />
                            <h4 className="text-[#F9FAFB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Industry Leader
                            </h4>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Recognized for innovation in AI automation for small businesses
                            </p>
                          </div>
                          
                          <div className="p-4 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Building2 className="w-5 h-5 text-[#06B6D4]" />
                              <p className="text-[#F9FAFB] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Temecula HQ
                              </p>
                            </div>
                            <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Serving Southern California
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Main Content - Links */}
                      <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            About Admix Digital
                          </h3>
                          <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Learn more about who we are and what we do
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          {aboutLinks.map((link, index) => (
                            <motion.a
                              key={link.title}
                              href={`#${link.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                              whileHover={{ y: -3 }}
                              className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                            >
                              <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute inset-0 shadow-inner opacity-50" />
                              
                              <div className="relative z-10">
                                <div className="p-2 rounded-lg bg-[#06B6D4]/20 group-hover:bg-[#06B6D4]/30 transition-colors w-fit mb-3">
                                  <link.icon className="w-5 h-5 text-[#06B6D4]" />
                                </div>
                                <h4 className="text-[#F9FAFB] mb-1 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  {link.title}
                                </h4>
                              </div>

                              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Mission */}
                      <div className="col-span-2 flex flex-col">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Our Mission
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Why we exist
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <div className="relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#84CC16]/20 border border-[#06B6D4]/30 transition-all duration-300 shadow-lg flex-1">
                            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                              We help small businesses harness AI to grow faster with less effort.
                            </p>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Based in Temecula, we're committed to making advanced technology accessible.
                            </p>
                          </div>

                          <div className="pt-4 border-t border-[#06B6D4]/20">
                            <a 
                              href="#team"
                              className="text-[#9CA3AF] hover:text-[#06B6D4] text-sm transition-colors flex items-center gap-2"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Meet Our Team
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contact Dropdown */}
                  {isMegaMenuOpen === 'Contact' && (
                    <div className="relative grid grid-cols-11 gap-8" style={{ minHeight: '520px' }}>
                      {/* Left Column - Contact Info */}
                      <div className="col-span-3 flex flex-col">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Quick Contact
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Reach us directly
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <div className="relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 border border-[#06B6D4]/30 transition-all duration-300 shadow-lg">
                            <Phone className="w-6 h-6 text-[#06B6D4] mb-3" />
                            <h5 className="text-[#F9FAFB] mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Phone
                            </h5>
                            <a href="tel:+19515550123" className="text-[#06B6D4] mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              (951) 555-0123
                            </a>
                            <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Mon-Fri: 8am - 6pm PST
                            </p>
                          </div>
                          
                          <div className="p-5 rounded-xl bg-[#1E3A8A]/20 border border-[#06B6D4]/20">
                            <Mail className="w-6 h-6 text-[#84CC16] mb-3" />
                            <h5 className="text-[#F9FAFB] mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Email
                            </h5>
                            <a href="mailto:hello@admixdigital.com" className="text-[#84CC16] text-sm block" style={{ fontFamily: 'Inter, sans-serif' }}>
                              hello@admixdigital.com
                            </a>
                          </div>

                          <div className="p-4 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-[#06B6D4]" />
                              <p className="text-[#F9FAFB] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Fast Response
                              </p>
                            </div>
                            <p className="text-[#9CA3AF] text-xs mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                              We respond within 1 business day
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Main Content - Contact Methods */}
                      <div className="col-span-6 border-x border-[#06B6D4]/15 px-6">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h3 className="text-[#F9FAFB] text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Get In Touch
                          </h3>
                          <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Choose the best way to reach us
                          </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                          {/* Schedule a Call */}
                          <motion.a
                            href="#schedule"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 shadow-inner opacity-50" />
                            
                            <div className="relative z-10">
                              <div className="text-3xl mb-3">📅</div>
                              <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Schedule Call
                              </h4>
                              <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                30-min consultation
                              </p>
                            </div>

                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                            </div>
                          </motion.a>

                          {/* Send Message */}
                          <motion.a
                            href="#message"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 shadow-inner opacity-50" />
                            
                            <div className="relative z-10">
                              <div className="text-3xl mb-3">💬</div>
                              <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Send Message
                              </h4>
                              <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Ask us anything
                              </p>
                            </div>

                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                            </div>
                          </motion.a>

                          {/* Visit Office */}
                          <motion.a
                            href="#visit"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 shadow-inner opacity-50" />
                            
                            <div className="relative z-10">
                              <div className="text-3xl mb-3">📍</div>
                              <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Visit Office
                              </h4>
                              <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Temecula, CA
                              </p>
                            </div>

                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                            </div>
                          </motion.a>

                          {/* Live Chat */}
                          <motion.a
                            href="#chat"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 shadow-inner opacity-50" />
                            
                            <div className="relative z-10">
                              <div className="text-3xl mb-3">💬</div>
                              <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Live Chat
                              </h4>
                              <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Instant support
                              </p>
                            </div>

                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                            </div>
                          </motion.a>

                          {/* Request Quote */}
                          <motion.a
                            href="#quote"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 shadow-inner opacity-50" />
                            
                            <div className="relative z-10">
                              <div className="text-3xl mb-3">💰</div>
                              <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Get Quote
                              </h4>
                              <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Custom pricing
                              </p>
                            </div>

                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                            </div>
                          </motion.a>

                          {/* Emergency Support */}
                          <motion.a
                            href="#emergency"
                            whileHover={{ y: -3 }}
                            className="group relative p-5 rounded-xl bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/10"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/10 to-[#84CC16]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 shadow-inner opacity-50" />
                            
                            <div className="relative z-10">
                              <div className="text-3xl mb-3">🚨</div>
                              <h4 className="text-[#F9FAFB] mb-2 group-hover:text-[#06B6D4] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Emergency
                              </h4>
                              <p className="text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                24/7 for clients
                              </p>
                            </div>

                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                            </div>
                          </motion.a>
                        </div>
                      </div>

                      {/* Right Column - Office Location */}
                      <div className="col-span-2 flex flex-col">
                        <div className="text-center mb-6" style={{ height: '68px' }}>
                          <h4 className="text-[#F9FAFB] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Our Location
                          </h4>
                          <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Come visit us
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                          <div className="relative p-5 rounded-xl bg-linear-to-br from-[#06B6D4]/20 to-[#84CC16]/20 border border-[#06B6D4]/30 transition-all duration-300 shadow-lg flex-1">
                            <MapPin className="w-6 h-6 text-[#06B6D4] mb-3" />
                            <h5 className="text-[#F9FAFB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              Temecula Office
                            </h5>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Old Town Temecula<br />
                              Temecula, CA 92590
                            </p>
                            <a 
                              href="#directions"
                              className="inline-flex items-center gap-1 text-[#06B6D4] hover:text-[#84CC16] text-sm transition-colors"
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              Get Directions
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>

                          <div className="pt-4 border-t border-[#06B6D4]/20">
                            <p className="text-[#9CA3AF] text-xs text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Serving all of Southern California
                            </p>
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
