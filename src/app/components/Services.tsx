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
      color: '#84CC16',
      gradient: 'from-[#84CC16] to-[#65A30D]',
      stat: '3.2x ROI',
      statLabel: 'Avg Increase'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Smart conversations that convert visitors into customers 24/7',
      color: '#06B6D4',
      gradient: 'from-[#06B6D4] to-[#0891B2]',
      stat: '85%',
      statLabel: 'Lead Capture'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Rank higher and dominate local search results in Temecula',
      color: '#F59E0B',
      gradient: 'from-[#F59E0B] to-[#D97706]',
      stat: 'Top 3',
      statLabel: 'Google Ranking'
    },
    {
      icon: Megaphone,
      title: 'Local Ads Management',
      description: 'Precision targeting for maximum ROI on every advertising dollar',
      color: '#06B6D4',
      gradient: 'from-[#06B6D4] to-[#0284C7]',
      stat: '45%',
      statLabel: 'Cost Reduction'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Eliminate repetitive tasks and save 10+ hours weekly',
      color: '#84CC16',
      gradient: 'from-[#84CC16] to-[#4D7C0F]',
      stat: '10+ hrs',
      statLabel: 'Saved Weekly'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamless systems that keep your business organized and growing',
      color: '#06B6D4',
      gradient: 'from-[#06B6D4] to-[#0369A1]',
      stat: '100%',
      statLabel: 'Sync Rate'
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#06B6D4]/20 to-[#84CC16]/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-[#84CC16]/20 to-[#F59E0B]/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 15,
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-glass rounded-full"
          >
            <Zap className="w-4 h-4 text-[#84CC16]" />
            <span className="text-[#06B6D4] text-sm font-semibold tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
              OUR SERVICES
            </span>
          </motion.div>

          <h2
            className="text-[#F9FAFB] mb-6"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}
          >
            Full-Service{' '}
            <span className="text-gradient">AI Marketing</span>{' '}
            Solutions
          </h2>
          <p
            className="text-[#9CA3AF] max-w-3xl mx-auto text-lg leading-relaxed"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem'
            }}
          >
            Everything you need to automate, optimize, and scale your business with cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                y: -16,
                scale: 1.03
              }}
              className="group relative h-full perspective-card"
            >
              {/* Premium Card */}
              <div className="relative bg-glass-hover rounded-3xl p-8 border border-[#06B6D4]/20 hover:border-[#06B6D4]/50 transition-all duration-500 premium-shadow-lg h-full flex flex-col overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}15, transparent 60%)`
                  }}
                />

                {/* Top Accent with Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 rounded-t-3xl bg-gradient-to-r ${service.gradient}`}
                />

                {/* Stat Badge */}
                <motion.div
                  className="absolute top-6 right-6 bg-glass rounded-xl px-3 py-2 border border-[#06B6D4]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: 20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <div className="text-center">
                    <div className="text-[#F9FAFB] font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {service.stat}
                    </div>
                    <div className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.statLabel}
                    </div>
                  </div>
                </motion.div>

                {/* Premium Icon Container */}
                <motion.div
                  className="relative w-24 h-24 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}25, ${service.color}08)`,
                    boxShadow: `0 12px 40px ${service.color}30`
                  }}
                  whileHover={{
                    rotate: [0, -8, 8, 0],
                    scale: 1.15
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <service.icon size={48} style={{ color: service.color, filter: `drop-shadow(0 0 12px ${service.color}60)` }} />

                  {/* Animated Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2"
                    style={{ borderColor: service.color }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle, ${service.color}40, transparent 70%)`,
                      filter: 'blur(16px)'
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.6, 0.4]
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
                  className="text-[#F9FAFB] mb-4 group-hover:text-gradient-hover transition-all duration-300"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.625rem',
                    fontWeight: 700,
                    lineHeight: 1.3
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#9CA3AF] group-hover:text-[#D1D5DB] transition-colors duration-300 mb-6 grow"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.0625rem',
                    lineHeight: 1.7
                  }}
                >
                  {service.description}
                </p>

                {/* Call to Action */}
                <motion.div
                  className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: service.color, fontFamily: 'Poppins, sans-serif' }}
                  whileHover={{ gap: 12 }}
                >
                  Explore Service
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Corner Accent */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${service.color}40, transparent 70%)`
                  }}
                />
              </div>

              {/* External Glow on Hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"
                style={{
                  boxShadow: `0 0 60px ${service.color}30`,
                  filter: 'blur(30px)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Premium Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <div className="bg-glass rounded-3xl p-12 premium-shadow-lg border border-[#06B6D4]/30 max-w-2xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#06B6D4]/10 to-[#84CC16]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <p className="text-[#D1D5DB] mb-6 text-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                Not sure which service is right for you?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-5 bg-gradient-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-2xl font-bold text-lg premium-shadow-lg border-0 overflow-hidden"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Schedule a Free Consultation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 glow-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}