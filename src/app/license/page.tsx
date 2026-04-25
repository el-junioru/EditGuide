'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            License & Usage Rights
          </h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6">
            <p className="text-text-secondary">Last updated: April 2024</p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Standard License</h2>
              <p className="text-text-secondary">
                Each preset purchase includes a standard license allowing you to use the preset in unlimited personal and commercial projects.
              </p>
              <ul className="list-disc list-inside text-text-secondary mt-2 space-y-1">
                <li>Use in unlimited personal projects</li>
                <li>Use in unlimited commercial projects</li>
                <li>Edit and modify the preset</li>
                <li>Use in end products for clients</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Restrictions</h2>
              <p className="text-text-secondary">
                You may NOT:
              </p>
              <ul className="list-disc list-inside text-text-secondary mt-2 space-y-1">
                <li>Resell or redistribute the preset</li>
                <li>Share the preset file publicly</li>
                <li>Claim ownership of the preset</li>
                <li>Use in competing products</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Extended License</h2>
              <p className="text-text-secondary">
                Need more rights? Contact us for an extended license that allows redistribution of modified preset files.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Questions</h2>
              <p className="text-text-secondary">
                Contact us at support@presets.com for licensing questions.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}