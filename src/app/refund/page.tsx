'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Refund Policy
          </h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6">
            <p className="text-text-secondary">Last updated: April 2024</p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">14-Day Money-Back Guarantee</h2>
              <p className="text-text-secondary">
                We want you to be fully satisfied with your purchase. If for any reason you're not happy with a preset, we offer a full refund within 14 days of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">How to Request a Refund</h2>
              <p className="text-text-secondary">
                To request a refund:
              </p>
              <ol className="list-decimal list-inside text-text-secondary mt-2 space-y-2">
                <li>Email us at support@presets.com</li>
                <li>Include your order number</li>
                <li>Mention the preset name</li>
                <li>Briefly explain why you're requesting a refund</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Refund Processing</h2>
              <p className="text-text-secondary">
                Once we receive your request, we'll process it within 3-5 business days. The refund will be credited to your original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Exceptions</h2>
              <p className="text-text-secondary">
                Refunds are available for all single purchases. For bundle deals, we refund the full bundle amount if requested within 14 days. After 14 days, all sales are final.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Questions?</h2>
              <p className="text-text-secondary">
                Contact us at support@presets.com for refund questions.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}