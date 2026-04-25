'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6">
            <p className="text-text-secondary">Last updated: April 2024</p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="text-text-secondary">
                We collect information you provide directly to us, such as your name, email address, and payment information when making a purchase. We also collect usage data to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-text-secondary">
                We use your information to: Provide and maintain our services, Process your transactions, Send you important updates, and Improve our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Information Sharing</h2>
              <p className="text-text-secondary">
                We do not sell your personal information. We may share information with service providers who assist us in operating our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Data Security</h2>
              <p className="text-text-secondary">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights</h2>
              <p className="text-text-secondary">
                You have the right to access, update, or delete your personal information. Contact us to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Contact</h2>
              <p className="text-text-secondary">
                If you have questions about this Privacy Policy, please contact us at support@editguide.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}