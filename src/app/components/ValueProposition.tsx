'use client';

import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Bot, Target, Zap } from 'lucide-react';

export function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Bot,
      title: 'AI-Driven Lead Generation',
      description: 'Automated systems that capture, qualify, and nurture leads 24/7 without manual effort.',
      color: '#06B6D4'
    },
    {
      icon: Target,
      title: 'SEO for Local Dominance',
      description: 'Rank #1 in Temecula searches and dominate your local market with data-driven optimization.',
      color: '#84CC16'
    },
    {
      icon: Zap,
      title: 'Automations that Save Hours',
      description: 'Free up 20+ hours per week with smart workflows that handle repetitive tasks automatically.',
      color: '#06B6D4'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-linear-to-b from-[#111827] to-[#1E3A8A]/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#06B6D4] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#84CC16] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[#F9FAFB] mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700
            }}
          >
            Why Temecula Businesses Choose Us
          </h2>
          <p
            className="text-[#9CA3AF] max-w-2xl mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem'
            }}
          >
            We combine AI technology with local market expertise to deliver results that matter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group h-full"
            >
              {/* Glass Card */}
              <div className="relative bg-[#1E3A8A]/10 backdrop-blur-xl rounded-2xl p-8 border border-[#06B6D4]/20 hover:border-[#06B6D4]/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#06B6D4]/20 h-full flex flex-col">
                {/* Accent Top Border */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${feature.color}, ${feature.color}80)`
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center relative"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`
                  }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon size={32} style={{ color: feature.color }} />
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${feature.color}40, transparent)`
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-[#F9FAFB] mb-3"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#9CA3AF] grow"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}30, transparent)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}