'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Zap, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useRef } from 'react';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const floatingElements = [
    { icon: Sparkles, delay: 0, x: 100, y: 50, color: '#06B6D4' },
    { icon: Zap, delay: 0.2, x: -80, y: -40, color: '#84CC16' },
    { icon: TrendingUp, delay: 0.4, x: 120, y: -60, color: '#F59E0B' },
    { icon: Star, delay: 0.6, x: -120, y: 80, color: '#06B6D4' }
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Layers */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/98 via-[#1E3A8A]/95 to-[#111827]/98" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#06B6D4]/15 via-transparent to-[#84CC16]/15" />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-gradient-to-r from-[#06B6D4]/30 to-[#84CC16]/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-gradient-to-l from-[#84CC16]/30 to-[#F59E0B]/30 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] bg-grid-pattern" />

      {/* Animated Dots Pattern */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20 bg-dots-pattern"
        animate={{
          backgroundPosition: ['0px 0px', '20px 20px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Premium Floating Elements */}
      {floatingElements.map((elem, i) => (
        <motion.div
          key={i}
          className="absolute z-10 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
            x: [elem.x, elem.x + 30, elem.x],
            y: [elem.y, elem.y - 30, elem.y],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            delay: elem.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{ left: '50%', top: '50%' }}
        >
          <div className="relative">
            <elem.icon size={56} style={{ color: elem.color, filter: 'drop-shadow(0 0 20px currentColor)' }} />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${elem.color}40, transparent)`,
                filter: 'blur(20px)'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Premium Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-6 text-left py-32"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-3 bg-glass rounded-full premium-shadow group cursor-default"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-[#84CC16]" />
            </motion.div>
            <span className="text-gradient text-sm font-semibold tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
              AI-POWERED MARKETING FOR TEMECULA BUSINESSES
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
          </motion.div>

          {/* Main Headline with Gradient */}
          <motion.h1
            className="mb-8 text-[#F9FAFB] leading-tight"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Smart Automation &{' '}
            <span className="text-gradient">Digital Marketing</span>{' '}
            <br className="hidden md:block" />
            for Local Businesses
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mb-12 text-[#D1D5DB] max-w-3xl text-lg leading-relaxed"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.125rem, 1.75vw, 1.5rem)',
              lineHeight: 1.7
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Helping Temecula's service professionals grow 3x faster through AI-powered marketing that works while you sleep.
            <span className="text-[#06B6D4] font-semibold"> Trusted by 50+ local businesses.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-2xl px-10 py-7 text-lg font-bold premium-shadow-lg border-0 overflow-hidden"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Your Free AI Marketing Plan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#84CC16] to-[#06B6D4]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 glow-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-10 py-7 text-lg font-semibold border-2 border-[#06B6D4] text-[#06B6D4] bg-glass-hover premium-shadow backdrop-blur-premium"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span className="flex items-center gap-3">
                  See How It Works
                  <Zap className="w-5 h-5" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center gap-6 text-sm text-[#9CA3AF]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#84CC16] border-2 border-[#0F172A]" />
                ))}
              </div>
              <span className="text-[#D1D5DB]">50+ Happy Clients</span>
            </div>
            <div className="h-4 w-px bg-[#374151]" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                ))}
              </div>
              <span className="text-[#D1D5DB]">5.0 Rating</span>
            </div>
            <div className="h-4 w-px bg-[#374151]" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#84CC16]" />
              <span className="text-[#D1D5DB]">48hr Setup</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative">
          <div className="w-7 h-12 border-2 border-[#06B6D4] rounded-full flex justify-center pt-2 bg-[#06B6D4]/10 backdrop-blur-sm premium-shadow">
            <motion.div
              className="w-2 h-3 bg-gradient-to-b from-[#06B6D4] to-[#84CC16] rounded-full"
              animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            style={{
              border: '2px solid #06B6D4',
              filter: 'blur(4px)'
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}