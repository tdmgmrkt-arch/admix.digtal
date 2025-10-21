'use client';

import { motion } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';
import { Button } from './ui/button';

export function StickyCTA() {
  return (
    <motion.div
      className="sticky bottom-0 z-40 bg-linear-to-r from-[#06B6D4] via-[#1E3A8A] to-[#84CC16] border-t-2 border-[#06B6D4]/50 shadow-2xl"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text */}
          <div className="text-center md:text-left">
            <h3
              className="text-white mb-1"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700
              }}
            >
              Get a Free AI Marketing Strategy — Tailored to Your Business
            </h3>
            <p
              className="text-white/80"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem'
              }}
            >
              Limited availability • No obligation • See results in 30 days
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a href="tel:+19515551234">
              <Button
                size="lg"
                className="bg-white text-[#1E3A8A] hover:bg-white/90 rounded-xl px-6 py-3 flex items-center gap-2 shadow-lg hover:scale-105 transition-all duration-300 border-0"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Phone size={20} />
                (951) 555-1234
              </Button>
            </a>

            <motion.div
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Button
                size="lg"
                className="bg-[#84CC16] text-white hover:bg-[#84CC16]/90 rounded-xl px-8 py-3 flex items-center gap-2 shadow-lg hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Calendar size={20} />
                Schedule Now
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{ skewX: '-20deg' }}
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
