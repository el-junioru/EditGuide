'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Terms of Service
          </h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6">
            <p className="text-text-secondary">Last updated: April 2024</p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-text-secondary">
                By accessing and using Presets, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms, you should not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Use License</h2>
              <p className="text-text-secondary">
                Permission is granted to temporarily download one copy of the materials (information or software) from Presets for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Disclaimer</h2>
              <p className="text-text-secondary">
                The materials on Presets are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Limitations</h2>
              <p className="text-text-secondary">
                In no event shall Presets be liable for any damages arising out of or in connection with the use of our website or products.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Refund Policy</h2>
              <p className="text-text-secondary">
                We offer a 14-day money-back guarantee on all preset purchases. If you're not satisfied, contact us within 14 days for a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Contact</h2>
              <p className="text-text-secondary">
                If you have any questions about these Terms, please contact us at support@presets.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}