'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User, X, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const softwareItems = [
  { name: 'DaVinci Resolve', href: '/?software=davinci', color: 'text-[#FF6B35]' },
  { name: 'Premiere Pro', href: '/?software=premiere', color: 'text-[#9999FF]' },
  { name: 'CapCut', href: '/?software=capcut', color: 'text-[#00F2EA]' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>E</span>
            </div>
            <span className="text-xl font-semibold text-gradient hidden sm:block" style={{ fontFamily: 'var(--font-display)' }}>
              EDITGUIDE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {softwareItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity ${item.color}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-bg-secondary transition-colors">
              <Search className="w-5 h-5 text-text-secondary" />
            </button>
            
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded-lg hover:bg-bg-secondary transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-text-secondary" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button className="hidden sm:flex items-center gap-2 p-2 rounded-lg hover:bg-bg-secondary transition-colors">
              <User className="w-5 h-5 text-text-secondary" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-bg-secondary transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-text-secondary" />
              ) : (
                <Menu className="w-5 h-5 text-text-secondary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-secondary border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {softwareItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 text-text-secondary hover:text-white transition-colors py-2 ${item.color}`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors py-2">
                <User className="w-5 h-5" />
                Sign In
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}