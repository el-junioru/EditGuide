'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, ShoppingCart, Eye, X } from 'lucide-react';
import { Preset } from '@/lib/types';
import { SOFTWARE_LABELS, STYLE_LABELS } from '@/lib/data';
import { useCart } from '@/context/CartContext';

interface PresetCardProps {
  preset: Preset;
  index: number;
}

export default function PresetCard({ preset, index }: PresetCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, items } = useCart();
  
  const isInCartNow = items.some(item => item.id === preset.id);
  const price = preset.salePrice || preset.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(preset);
    setIsInCart(true);
    setTimeout(() => setIsInCart(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/preset/${preset.id}`}>
        <div
          className="group relative rounded-xl bg-bg-tertiary border border-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:card-shadow hover:glow-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Thumbnail */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={preset.thumbnail}
              alt={preset.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-2 py-1 rounded-md bg-bg-primary/80 backdrop-blur-sm text-xs font-medium text-white">
                {SOFTWARE_LABELS[preset.software]}
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 rounded-md bg-accent/80 backdrop-blur-sm text-xs font-medium text-white">
                {STYLE_LABELS[preset.style]}
              </span>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-x-3 bottom-3 flex items-center justify-between"
            >
              <button className="p-2 rounded-lg bg-bg-primary/80 backdrop-blur-sm hover:bg-bg-primary transition-colors group/btn">
                <Eye className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={handleAddToCart}
                disabled={isInCartNow}
                className={`p-2 rounded-lg backdrop-blur-sm transition-colors ${
                  isInCartNow 
                    ? 'bg-success text-white' 
                    : 'bg-accent hover:bg-accent/80 text-white'
                }`}
              >
                {isInCartNow ? (
                  <X className="w-4 h-4" />
                ) : (
                  <ShoppingCart className="w-4 h-4" />
                )}
              </button>
            </motion.div>
          </div>

          {/* Info */}
          <div className="p-4">
            <h3 className="text-white font-semibold mb-1 group-hover:text-accent transition-colors">
              {preset.name}
            </h3>
            <p className="text-text-secondary text-sm line-clamp-2 mb-3">
              {preset.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                  ${price}
                </span>
                {preset.salePrice && (
                  <span className="text-sm text-text-tertiary line-through" style={{ fontFamily: 'var(--font-mono)' }}>
                    ${preset.price}
                  </span>
                )}
              </div>
              {preset.salePrice && (
                <span className="px-2 py-0.5 rounded-md bg-accent/20 text-accent text-xs font-medium">
                  SAVE ${preset.price - preset.salePrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}