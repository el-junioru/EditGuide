'use client';

import { motion } from 'framer-motion';
import { Preset } from '@/lib/types';
import PresetCard from './PresetCard';

interface ProductGridProps {
  presets: Preset[];
}

export default function ProductGrid({ presets }: ProductGridProps) {
  if (presets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold text-white mb-2">No presets found</h3>
          <p className="text-text-secondary">Try adjusting your filters</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {presets.map((preset, index) => (
        <PresetCard key={preset.id} preset={preset} index={index} />
      ))}
    </div>
  );
}