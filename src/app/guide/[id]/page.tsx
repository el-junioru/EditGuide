'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Check, Star, Play, Download } from 'lucide-react';
import { PRESETS, SOFTWARE_LABELS, STYLE_LABELS } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PresetDetailPage() {
  const params = useParams();
  const { addToCart, items } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const preset = PRESETS.find(p => p.id === params.id);
  
  if (!preset) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Preset not found</h1>
          <Link href="/" className="text-accent hover:underline">Go home</Link>
        </div>
      </div>
    );
  }

  const isInCart = items.some(item => item.id === preset.id);
  const price = preset.salePrice || preset.price;

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(preset);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to presets
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden bg-bg-secondary"
              >
                <img
                  src={preset.images[selectedImage]}
                  alt={preset.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex gap-3">
                {preset.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 rounded-lg bg-accent/20 text-accent text-sm font-medium">
                  {SOFTWARE_LABELS[preset.software]}
                </span>
                <span className="px-3 py-1 rounded-lg bg-bg-secondary text-text-secondary text-sm">
                  {STYLE_LABELS[preset.style]}
                </span>
              </div>

              <h1 className="text-4xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {preset.name}
              </h1>

              <p className="text-text-secondary text-lg mb-6">
                {preset.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-text-secondary">4.9</span>
                <span className="text-text-tertiary">(128 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                  ${price}
                </span>
                {preset.salePrice && (
                  <>
                    <span className="text-xl text-text-tertiary line-through" style={{ fontFamily: 'var(--font-mono)' }}>
                      ${preset.price}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-accent/20 text-accent font-semibold">
                      SAVE ${preset.price - preset.salePrice}
                    </span>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={isInCart}
                  className={`flex-1 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    isInCart
                      ? 'bg-success text-white'
                      : 'bg-gradient text-white hover:brightness-110'
                  }`}
                >
                  {isInCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </button>
                <button className="px-6 py-4 rounded-xl border border-border text-white font-semibold hover:bg-bg-secondary transition-colors">
                  <Play className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              <div className="p-6 rounded-xl bg-bg-secondary border border-border">
                <h3 className="text-white font-semibold mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {preset.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-success" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}