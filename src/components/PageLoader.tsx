'use client';

import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-bg-primary flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="w-12 h-12 mx-auto mb-4 overflow-hidden">
          <img src="/logo.png" alt="EditGuide" className="w-full h-full" />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gradient text-xl font-semibold"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          EDITGUIDE
        </motion.p>
      </motion.div>
    </div>
  );
}