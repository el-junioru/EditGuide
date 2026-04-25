'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Lock, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder for Lemon Squeezy checkout
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-bg-primary">
        <Header />
        <main className="pt-32 pb-16">
          <div className="max-w-md mx-auto px-4 text-center">
            <h1 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Your cart is empty
            </h1>
            <p className="text-text-secondary mb-8">Add some presets to get started</p>
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient text-white font-semibold">
              Browse Presets
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-bg-primary">
        <Header />
        <main className="pt-32 pb-16">
          <div className="max-w-md mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-success" />
            </motion.div>
            <h1 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Thank You!
            </h1>
            <p className="text-text-secondary mb-8">
              Your order has been placed. Check your email for download links.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient text-white font-semibold">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
              <div className="bg-bg-secondary border border-border rounded-2xl p-6 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.thumbnail} alt={item.name} className="w-20 h-14 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <p className="text-text-secondary text-sm">{item.software}</p>
                    </div>
                    <span className="text-white font-medium">${item.salePrice || item.price}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-4 flex justify-between">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-xl font-bold text-gradient" style={{ fontFamily: 'var(--font-mono)' }}>
                    ${totalPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Payment Details</h2>
              <form onSubmit={handlePayment} className="bg-bg-secondary border border-border rounded-2xl p-6 space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border text-white placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Name on Card</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border text-white placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Card Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      placeholder="4242 4242 4242 4242"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-bg-tertiary border border-border text-white placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Expiry</label>
                    <input
                      type="text"
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      placeholder="MM/YY"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border text-white placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">CVC</label>
                    <input
                      type="text"
                      value={formData.cvc}
                      onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                      placeholder="123"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border text-white placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-text-tertiary text-sm">
                  <Lock className="w-4 h-4" />
                  Payments secured by Lemon Squeezy
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient text-white font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    `Pay $${totalPrice}`
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}