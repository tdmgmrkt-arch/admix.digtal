'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

interface TestimonialsProps {
  portrait1: string;
  portrait2: string;
  portrait3: string;
}

export function Testimonials({ portrait1, portrait2, portrait3 }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Temecula Premier Plumbing',
      image: portrait1,
      quote: "Admix Digital transformed our business. The AI chatbot alone has captured over 200 leads in 3 months, and we're booking jobs 24/7 without lifting a finger.",
      rating: 5,
      role: 'Owner'
    },
    {
      name: 'Mike Rodriguez',
      company: 'Cool Air HVAC',
      image: portrait2,
      quote: 'Their local SEO strategy got us to #1 on Google for "HVAC Temecula" in just 60 days. Our phone hasn\'t stopped ringing since. Absolute game-changer.',
      rating: 5,
      role: 'CEO'
    },
    {
      name: 'Jessica Chen',
      company: 'Elite Fitness Studio',
      image: portrait3,
      quote: 'The automated email campaigns and member retention system they built increased our renewal rate to 94%. Best investment we\'ve ever made.',
      rating: 5,
      role: 'Founder'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="py-24 bg-linear-to-b from-[#1E3A8A]/20 via-[#111827] to-[#111827] relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15), transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(132, 204, 22, 0.15), transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15), transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

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
            What Our Clients Say
          </h2>
          <p
            className="text-[#9CA3AF] max-w-2xl mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem'
            }}
          >
            Real feedback from real business owners in Temecula
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden min-h-[500px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 0.95,
                  pointerEvents: currentIndex === index ? 'auto' : 'none'
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                {/* Glass Card */}
                <div className="bg-linear-to-br from-[#1E3A8A]/30 to-[#1E3A8A]/10 backdrop-blur-xl rounded-3xl p-12 border border-[#06B6D4]/30 shadow-2xl relative">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-[#06B6D4]/20">
                    <Quote size={80} />
                  </div>

                  {/* Stars */}
                  <motion.div
                    className="flex gap-1 mb-6 justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={currentIndex === index ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Star
                          size={24}
                          className="fill-[#84CC16] text-[#84CC16]"
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.p
                    className="text-[#F9FAFB] mb-8 text-center max-w-3xl mx-auto relative z-10"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1.375rem',
                      lineHeight: 1.8
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={currentIndex === index ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={currentIndex === index ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#06B6D4] shadow-lg shadow-[#06B6D4]/50">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#84CC16] rounded-full border-2 border-[#111827] flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                    </div>

                    <div className="text-left">
                      <h4
                        className="text-[#F9FAFB]"
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1.125rem',
                          fontWeight: 600
                        }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-[#9CA3AF]"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.875rem'
                        }}
                      >
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/10 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-8 h-3 bg-linear-to-r from-[#06B6D4] to-[#84CC16]'
                      : 'w-3 h-3 bg-[#9CA3AF]/30 hover:bg-[#9CA3AF]/50'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/10 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}