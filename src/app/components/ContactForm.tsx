'use client';

import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactForm() {
  return (
    <section className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
            Contact Us
          </h2>
          <p
            className="text-[#9CA3AF] max-w-2xl mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem'
            }}
          >
            We're here to help. Reach out to us for a free consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="bg-[#1E3A8A]/20 p-8 rounded-xl border border-[#06B6D4]/20"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F9FAFB] mb-2">Name</label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F9FAFB] mb-2">Email</label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#F9FAFB] mb-2">Phone</label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#F9FAFB] mb-2">Message</label>
                <Textarea id="message" placeholder="How can we help?" rows={5} />
              </div>
              <Button type="submit" className="w-full bg-linear-to-r from-[#06B6D4] to-[#84CC16] text-white">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#06B6D4]/20 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#F9FAFB]">Email</h3>
                <p className="text-[#9CA3AF]">hello@admixdigital.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#06B6D4]/20 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#F9FAFB]">Phone</h3>
                <p className="text-[#9CA3AF]">(951) 555-0123</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#06B6D4]/20 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#F9FAFB]">Office</h3>
                <p className="text-[#9CA3AF]">123 Innovation Drive, Temecula, CA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}