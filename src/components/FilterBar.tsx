'use client';

import { motion } from 'framer-motion';
import { Software, Style } from '@/lib/types';
import { SOFTWARE_LABELS, STYLE_LABELS } from '@/lib/data';

interface FilterBarProps {
  selectedSoftware: Software | 'all';
  selectedStyle: Style | 'all';
  sortBy: string;
  onSoftwareChange: (software: Software | 'all') => void;
  onStyleChange: (style: Style | 'all') => void;
  onSortChange: (sort: string) => void;
}

const softwareOptions: (Software | 'all')[] = ['all', 'davinci', 'premiere', 'capcut'];
const styleOptions: (Style | 'all')[] = ['all', 'cinematic', 'lifestyle', 'music-video', 'commercial', 'social-media'];
const sortOptions = ['newest', 'popular', 'price-low', 'price-high'];

export default function FilterBar({
  selectedSoftware,
  selectedStyle,
  sortBy,
  onSoftwareChange,
  onStyleChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-20 z-40 bg-bg-primary/95 backdrop-blur-xl border-b border-border py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Software Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1">
            {softwareOptions.map((software) => (
              <button
                key={software}
                onClick={() => onSoftwareChange(software)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedSoftware === software
                    ? 'text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {software === 'all' ? 'All' : SOFTWARE_LABELS[software]}
                {selectedSoftware === software && (
                  <motion.div
                    layoutId="softwareIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Style & Sort */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Style Dropdown */}
            <select
              value={selectedStyle}
              onChange={(e) => onStyleChange(e.target.value as Style | 'all')}
              className="flex-1 lg:flex-none px-4 py-2 rounded-lg bg-bg-secondary border border-border text-text-secondary text-sm focus:outline-none focus:border-accent transition-colors"
            >
              {styleOptions.map((style) => (
                <option key={style} value={style}>
                  {style === 'all' ? 'All Styles' : STYLE_LABELS[style]}
                </option>
              ))}
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="flex-1 lg:flex-none px-4 py-2 rounded-lg bg-bg-secondary border border-border text-text-secondary text-sm focus:outline-none focus:border-accent transition-colors"
            >
              {sortOptions.map((sort) => (
                <option key={sort} value={sort}>
                  {sort === 'newest' ? 'Newest' : sort === 'popular' ? 'Popular' : sort === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
}