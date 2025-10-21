'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, Search, Megaphone, Workflow, Database, Zap } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Zap,
      title: 'AI-Powered Ad Optimization',
      description: 'Machine learning algorithms that maximize conversions and minimize ad spend',
      color: '#84CC16'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Smart conversations that convert visitors into customers',
      color: '#06B6D4'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Rank higher and dominate local search results',
      color: '#84CC16'
    },
    {
      icon: Megaphone,
      title: 'Local Ads Management',
      description: 'Precision targeting for maximum ROI on every dollar',
      color: '#06B6D4'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Eliminate repetitive tasks and save hours daily',
      color: '#84CC16'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamless systems that keep your business organized',
      color: '#06B6D4'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-[#111827] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#84CC16]/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
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
            Full-Service AI Marketing Solutions
          </h2>
          <p
            className="text-[#9CA3AF] max-w-2xl mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem'
            }}
          >
            Everything you need to automate, optimize, and scale your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut'
              }}
              whileHover={{
                y: -12,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02
              }}
              className="group relative h-full"
              style={{ perspective: '1000px' }}
            >
              {/* Card */}
              <div
                className="relative bg-linear-to-br from-[#1E3A8A]/30 to-[#1E3A8A]/10 backdrop-blur-xl rounded-2xl p-8 border border-[#06B6D4]/20 hover:border-[#06B6D4]/50 transition-all duration-500 shadow-xl hover:shadow-2xl h-full flex flex-col"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}40, transparent 70%)`,
                    filter: 'blur(20px)'
                  }}
                />

                {/* Top Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${service.color}, transparent)`
                  }}
                />

                {/* Icon Container */}
                <motion.div
                  className="relative w-20 h-20 rounded-xl mb-6 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                    boxShadow: `0 8px 24px ${service.color}20`
                  }}
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon size={40} style={{ color: service.color }} />
                  
                  {/* Pulsing Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2"
                    style={{ borderColor: service.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
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
                  className="text-[#F9FAFB] mb-3 group-hover:text-[#06B6D4] transition-colors duration-300"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#9CA3AF] flex-grow"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}
                >
                  {service.description}
                </p>

                {/* Animated Arrow on Hover */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: service.color, fontFamily: 'Poppins, sans-serif' }}
                >
                  Learn More
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-[#9CA3AF] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Not sure which service is right for you?
          </p>
          <button
            className="px-8 py-3 bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/50 hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}