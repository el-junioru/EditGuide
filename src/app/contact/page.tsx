'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-bg-primary">
        <Header />
        <main className="pt-32 pb-16">
          <div className="max-w-md mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-3xl font-semibold text-white mb-4">Message Sent!</h1>
            <p className="text-text-secondary mb-8">We'll get back to you as soon as possible.</p>
            <Link href="/" className="text-accent hover:underline">Back to home</Link>
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
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-4xl font-semibold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Contact Us
          </h1>
          <p className="text-text-secondary mb-8">Have a question? We'd love to hear from you.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border text-white placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border text-white placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we help?"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border text-white placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient text-white font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </button>
          </form>

          <div className="mt-8 p-4 rounded-xl bg-bg-secondary border border-border">
            <p className="text-text-secondary text-sm">
              For fastest response, email us directly at <span className="text-accent">support@editguide.com</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}