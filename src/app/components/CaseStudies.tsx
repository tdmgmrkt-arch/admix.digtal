'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

interface CaseStudiesProps {
  image1: string;
  image2: string;
}

export function CaseStudies({ image1, image2 }: CaseStudiesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cases = [
    {
      image: image1,
      metric: '+230% Leads',
      timeframe: 'in 90 Days',
      company: 'Temecula HVAC Pro',
      description: 'Transformed their lead generation with AI chatbots and local SEO optimization, resulting in a massive increase in qualified customer inquiries.',
      stats: [
        { label: 'Monthly Leads', value: '347' },
        { label: 'Cost Per Lead', value: '-62%' },
        { label: 'Conversion Rate', value: '18%' }
      ],
      icon: TrendingUp,
      gradient: 'from-[#06B6D4] to-[#1E3A8A]'
    },
    {
      image: image2,
      metric: '2x ROI',
      timeframe: 'on Local Ads',
      company: 'Elite Fitness Studio',
      description: 'Doubled their return on ad spend through precision targeting and automated follow-up systems that convert browsers into members.',
      stats: [
        { label: 'Ad Spend ROI', value: '215%' },
        { label: 'New Members', value: '+124' },
        { label: 'Retention Rate', value: '94%' }
      ],
      icon: DollarSign,
      gradient: 'from-[#84CC16] to-[#06B6D4]'
    }
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-linear-to-b from-[#1E3A8A]/30 via-[#111827] to-[#111827] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #06B6D4 1px, transparent 1px), linear-gradient(#06B6D4 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
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
            Real Results from Real Businesses
          </h2>
          <p
            className="text-[#9CA3AF] max-w-2xl mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem'
            }}
          >
            See how we've helped Temecula businesses scale with AI-powered marketing
          </p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileInView={{ y: 0 }}
              style={{ willChange: 'transform' }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <motion.div
                  className={`relative rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-4/3] relative">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.company}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-linear-to-br ${caseStudy.gradient} opacity-40`} />
                  </div>
                  
                  {/* Floating Metric Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-[#111827]/90 backdrop-blur-xl rounded-xl p-4 border border-[#06B6D4]/30 shadow-2xl"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <caseStudy.icon size={20} className="text-[#84CC16]" />
                      <span className="text-[#84CC16]" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.75rem', fontWeight: 700 }}>
                        {caseStudy.metric}
                      </span>
                    </div>
                    <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {caseStudy.timeframe}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  >
                    <h3
                      className="text-[#06B6D4] mb-3"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.5rem',
                        fontWeight: 600
                      }}
                    >
                      {caseStudy.company}
                    </h3>

                    <p
                      className="text-[#9CA3AF] mb-6"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1.125rem',
                        lineHeight: 1.7
                      }}
                    >
                      {caseStudy.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseStudy.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="bg-[#1E3A8A]/20 backdrop-blur-sm rounded-xl p-4 border border-[#06B6D4]/20"
                        >
                          <p
                            className="text-[#84CC16] mb-1"
                            style={{
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: '1.5rem',
                              fontWeight: 700
                            }}
                          >
                            {stat.value}
                          </p>
                          <p
                            className="text-[#9CA3AF] text-sm"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="group bg-transparent border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/10 rounded-xl transition-all duration-300"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      View Case Study
                      <motion.span
                        className="inline-block ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={18} />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
