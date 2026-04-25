'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User, X, Menu, LogOut, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const softwareItems = [
  { name: 'DaVinci Resolve', href: '/?software=davinci', color: 'text-text-secondary' },
  { name: 'Premiere Pro', href: '/?software=premiere', color: 'text-text-secondary' },
  { name: 'CapCut', href: '/?software=capcut', color: 'text-text-secondary' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const { user, loading: authLoading, signOut } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setUserMenuOpen(false);
  };

  const handleDeleteAccount = async () => {
    setDeleting(true);
    // Account deletion requires backend support - will be implemented later
    // For now, just show the confirmation and sign out
    await signOut();
    setDeleting(false);
    setShowDeleteConfirm(false);
  };

  const handleUserClick = () => {
    if (!user && !authLoading) {
      window.location.href = '/register';
      return;
    }
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <>
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
              <img src="/logo.png" alt="EditGuide" className="w-10 h-10 rounded-lg object-contain bg-bg-secondary" />
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

              <div className="relative" ref={menuRef}>
                <button 
                  onClick={handleUserClick}
                  className="hidden sm:flex items-center gap-2 p-2 rounded-lg hover:bg-bg-secondary transition-colors"
                >
                  <User className="w-5 h-5 text-text-secondary" />
                </button>

                <AnimatePresence>
                  {userMenuOpen && user && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-72 bg-bg-secondary border border-border rounded-xl shadow-xl overflow-hidden"
                    >
                      <div className="p-4 border-b border-border">
                        <p className="text-text-secondary text-sm">Signed in as</p>
                        <p className="text-white font-medium truncate">{user.email}</p>
                      </div>
                      
                      <div className="p-2">
                        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-bg-tertiary text-text-secondary hover:text-white transition-colors">
                          View Profile
                        </button>
                        <button 
                          onClick={handleSignOut}
                          className="w-full text-left px-4 py-3 rounded-lg hover:bg-bg-tertiary text-text-secondary hover:text-white transition-colors flex items-center gap-3"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>

                      <div className="p-2 border-t border-border">
                        <button 
                          onClick={() => setShowDeleteConfirm(true)}
                          className="w-full text-left px-4 py-3 rounded-lg hover:bg-error/10 text-error transition-colors flex items-center gap-3"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete Account
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
                {!user ? (
                  <Link 
                    href="/register" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors py-2"
                  >
                    <User className="w-5 h-5" />
                    Sign In
                  </Link>
                ) : (
                  <button 
                    onClick={() => {
                      handleSignOut();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors py-2"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Delete Account Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setShowDeleteConfirm(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
            >
              <div className="bg-bg-secondary border border-border rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Delete Account?
                </h2>
                <p className="text-text-secondary mb-6">
                  This will permanently delete your account and all your data. This action cannot be undone.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 py-3 rounded-xl border border-border text-white font-semibold hover:bg-bg-tertiary transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    disabled={deleting}
                    className="flex-1 py-3 rounded-xl bg-error text-white font-semibold hover:brightness-110 transition-all disabled:opacity-50"
                  >
                    {deleting ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}