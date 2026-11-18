'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'AI Automation', href: '#ai-automation' },
    { name: 'SEO & Ads', href: '#seo-ads' },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="relative bg-linear-to-b from-[#0F172A] to-[#111827] pt-20 pb-8 overflow-hidden">
      {/* Top Edge Ambient Light */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#06B6D4]/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-12 bg-linear-to-b from-[#06B6D4]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Tagline */}
          <div>
           {/* Logo */}
            <motion.div
              className="flex items-center pb-5" // Removed space-x-2 as the image might handle spacing differently
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/AMXDIG.png" // Path relative to the 'public' folder
                alt="Admix Digital Logo"
                width={160} // Adjust width as needed
                height={40} // Adjust height as needed - maintain aspect ratio
                priority // Add priority if it's above the fold for faster loading
              />
            </motion.div>

            <p
              className="text-[#9CA3AF] mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                lineHeight: 1.6
              }}
            >
              AI-powered marketing automation for service businesses in Temecula and beyond. We help local businesses grow smarter, faster.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-[#1E3A8A]/30 border border-[#06B6D4]/20 flex items-center justify-center text-[#9CA3AF] hover:text-[#06B6D4] hover:bg-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent)',
                      filter: 'blur(8px)'
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-[#F9FAFB] mb-6"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.125rem',
                fontWeight: 600
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#06B6D4] transition-colors duration-300 flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                  >
                    <motion.span
                      className="w-0 h-px bg-[#06B6D4] group-hover:w-3 transition-all duration-300"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4
              className="text-[#F9FAFB] mb-6"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.125rem',
                fontWeight: 600
              }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#9CA3AF]">
                <MapPin size={18} className="mt-1 shrink-0 text-[#06B6D4]" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                  123 Innovation Drive<br />
                  Temecula, CA 92590
                </span>
              </li>
              <li className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#06B6D4] transition-colors">
                <Phone size={18} className="shrink-0 text-[#06B6D4]" />
                <a href="tel:+19515551234" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                  (951) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#06B6D4] transition-colors">
                <Mail size={18} className="shrink-0 text-[#06B6D4]" />
                <a href="mailto:hello@admixdigital.com" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                  hello@admixdigital.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4
              className="text-[#F9FAFB] mb-6"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.125rem',
                fontWeight: 600
              }}
            >
              Newsletter
            </h4>
            <p
              className="text-[#9CA3AF] mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                lineHeight: 1.6
              }}
            >
              Get weekly AI marketing tips and local business growth strategies.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-[#1E3A8A]/20 border-[#06B6D4]/30 text-[#F9FAFB] placeholder:text-[#9CA3AF]/50 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 rounded-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <Button
                className="bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/50 transition-all duration-300 border-0"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#06B6D4]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-[#9CA3AF] text-center md:text-left"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem'
              }}
            >
              © 2025 Admix Digital | Temecula's Leading AI Marketing Agency
            </p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-[#9CA3AF] hover:text-[#06B6D4] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-[#9CA3AF] hover:text-[#06B6D4] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Light at Bottom */}
      <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-[#06B6D4]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-[#84CC16]/5 rounded-full blur-[100px]" />
    </footer>
  );
}
