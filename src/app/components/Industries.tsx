'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Wrench, Wind, Dumbbell, Truck, Briefcase } from 'lucide-react';

interface IndustriesProps {
  plumberImage: string;
  fitnessImage: string;
}

export function Industries({ plumberImage, fitnessImage }: IndustriesProps) {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const industries = [
    {
      icon: Wrench,
      name: 'Plumbers',
      image: plumberImage,
      description: 'Emergency call handling, automated scheduling, and review management systems that keep your calendar full.',
      stat: '89% faster response times',
      color: '#06B6D4'
    },
    {
      icon: Wind,
      name: 'HVAC',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop',
      description: 'Seasonal campaign automation, maintenance reminders, and smart lead qualification for peak efficiency.',
      stat: '3x seasonal bookings',
      color: '#84CC16'
    },
    {
      icon: Dumbbell,
      name: 'Fitness',
      image: fitnessImage,
      description: 'Member retention campaigns, class promotion automation, and personalized engagement that drives renewals.',
      stat: '94% retention rate',
      color: '#06B6D4'
    },
    {
      icon: Truck,
      name: 'Movers',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
      description: 'Quote automation, booking systems, and follow-up workflows that convert inquiries into confirmed moves.',
      stat: '67% quote acceptance',
      color: '#84CC16'
    },
    {
      icon: Briefcase,
      name: 'Others',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop',
      description: 'Custom solutions for any service business. We adapt our AI marketing systems to your unique needs.',
      stat: 'Tailored to you',
      color: '#06B6D4'
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-linear-to-b from-[#111827] to-[#1E3A8A]/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#84CC16] rounded-full blur-[150px]" />
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
            Industries We Serve
          </h2>
          <p
            className="text-[#9CA3AF] max-w-2xl mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem'
            }}
          >
            Specialized AI marketing solutions designed for your specific business type
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((industry, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === index
                  ? 'bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white shadow-lg shadow-[#06B6D4]/30'
                  : 'bg-[#1E3A8A]/20 text-[#9CA3AF] hover:bg-[#1E3A8A]/40 border border-[#06B6D4]/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <industry.icon size={20} />
              {industry.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="relative">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                opacity: activeTab === index ? 1 : 0,
                y: activeTab === index ? 0 : 20,
                display: activeTab === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -40 }}
                animate={activeTab === index ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="aspect-16/10 relative">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-br opacity-40"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}40, transparent)`
                    }}
                  />
                </div>

                {/* Stat Badge */}
                <motion.div
                  className="absolute bottom-6 left-6 bg-[#111827]/90 backdrop-blur-xl rounded-xl px-6 py-4 border border-[#06B6D4]/30 shadow-2xl"
                  initial={{ scale: 0, y: 20 }}
                  animate={activeTab === index ? { scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p
                    className="text-[#84CC16]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 700
                    }}
                  >
                    {industry.stat}
                  </p>
                  <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Average improvement
                  </p>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={activeTab === index ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}30, ${industry.color}10)`
                    }}
                  >
                    <industry.icon size={32} style={{ color: industry.color }} />
                  </div>
                  <h3
                    className="text-[#F9FAFB]"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '2rem',
                      fontWeight: 700
                    }}
                  >
                    {industry.name}
                  </h3>
                </div>

                <p
                  className="text-[#9CA3AF] mb-8"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.25rem',
                    lineHeight: 1.8
                  }}
                >
                  {industry.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {[
                    '24/7 Automated Lead Capture',
                    'Industry-Specific SEO Strategy',
                    'Smart Review Management'
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={activeTab === index ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: industry.color }}
                      />
                      <p className="text-[#F9FAFB]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <button
                  className="px-8 py-3 bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white rounded-xl hover:shadow-lg hover:shadow-[#06B6D4]/50 hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  See {industry.name} Solutions
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}