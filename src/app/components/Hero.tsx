'use client';

import { motion } from 'motion/react';
import { Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  const floatingElements = [
    { icon: Sparkles, delay: 0, x: 100, y: 50 },
    { icon: Zap, delay: 0.2, x: -80, y: -40 },
    { icon: TrendingUp, delay: 0.4, x: 120, y: -60 }
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#1E3A8A]/95 via-[#111827]/90 to-[#111827]/95" />
        <div className="absolute inset-0 bg-linear-to-br from-[#06B6D4]/20 via-transparent to-[#84CC16]/20" />
      </div>

      {/* Animated Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #06B6D4 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((elem, i) => (
        <motion.div
          key={i}
          className="absolute z-10 text-[#06B6D4]/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            x: [elem.x, elem.x + 20, elem.x],
            y: [elem.y, elem.y - 20, elem.y]
          }}
          transition={{
            duration: 4,
            delay: elem.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{ left: '50%', top: '50%' }}
        >
          <elem.icon size={48} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-6 px-4 py-2 bg-[#06B6D4]/20 border border-[#06B6D4]/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-[#06B6D4]" style={{ fontFamily: 'Inter, sans-serif' }}>
              AI-Powered Marketing for Temecula Businesses
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-[#F9FAFB]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.2
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Smart Automation & Digital Marketing for Local Businesses
          </motion.h1>

          <motion.p
            className="mb-10 text-[#9CA3AF] max-w-2xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
              lineHeight: 1.6
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Helping Temecula's service pros grow faster through AI-powered marketing that works while you sleep.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl px-8 py-6 hover:shadow-2xl hover:shadow-[#06B6D4]/50 hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="relative z-10">Get Your Free AI Marketing Plan</span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-[#84CC16] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-8 py-6 border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/10 hover:shadow-lg hover:shadow-[#06B6D4]/30 transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              See How It Works
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#06B6D4] rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-[#06B6D4] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}