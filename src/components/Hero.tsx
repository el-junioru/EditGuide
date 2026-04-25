'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-secondary/5 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Transform Your
            <br />
            <span className="text-gradient">Video Content</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            Professional color grading presets for DaVinci Resolve, Premiere Pro, and CapCut. 
            Create stunning videos in minutes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#presets" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient text-white font-semibold hover:brightness-110 transition-all hover:scale-102">
              Browse Presets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={() => window.open('/Media/demo.mp4', '_blank')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-white font-semibold hover:bg-bg-secondary transition-colors"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-12 mt-16"
          >
            {[
              { value: '500+', label: 'Presets' },
              { value: '10K+', label: 'Creators' },
              { value: '4.9', label: 'Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-gradient" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </div>
            ))}
</motion.div>
        </div>
      </div>
    </section>
  );
}