'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartSidebar() {
  const { items, removeFromCart, isOpen, setIsOpen, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-bg-primary border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-accent" />
                <h2 className="text-lg font-semibold text-white">Your Cart</h2>
                <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-sm">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-text-secondary" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-text-tertiary mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Your cart is empty</h3>
                  <p className="text-text-secondary text-sm">
                    Add some presets to get started
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 p-3 rounded-xl bg-bg-secondary border border-border"
                    >
                      <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.thumbnail}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium truncate">{item.name}</h4>
                        <p className="text-text-secondary text-sm">
                          ${item.salePrice || item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 rounded-lg hover:bg-bg-tertiary transition-colors self-start"
                      >
                        <Trash2 className="w-4 h-4 text-text-tertiary hover:text-error transition-colors" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                    ${totalPrice}
                  </span>
                </div>
                <button className="w-full py-4 rounded-xl bg-gradient text-white font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  href="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 rounded-xl border border-border text-white font-semibold hover:bg-bg-secondary transition-colors text-center"
                >
                  View Cart
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}