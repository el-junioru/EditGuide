'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HelpCircle, Download, FileVideo, CreditCard, AlertCircle } from 'lucide-react';

const faqs = [
  {
    question: "How do I download my presets?",
    answer: "After purchase, you'll receive an email with download links. You can also access your downloads from your account page.",
  },
  {
    question: "Which software versions are supported?",
    answer: "Our presets support DaVinci Resolve 18+, Premiere Pro 2023+, and CapCut latest version.",
  },
  {
    question: "How do I install the presets?",
    answer: "Simply import the preset files into your software's presets folder, or use the included installation guide.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes! We offer a 14-day money-back guarantee. Contact support@presets.com for a refund.",
  },
  {
    question: "Do you offer bundle discounts?",
    answer: "Yes! Check our shop for current bundle deals. You can save up to 40% with bundles.",
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Help Center
          </h1>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <Link href="/contact" className="p-6 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-colors">
              <HelpCircle className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-white font-semibold mb-2">Contact Support</h3>
              <p className="text-text-secondary text-sm">Can't find what you need? Talk to us directly.</p>
            </Link>
            <Link href="/refund" className="p-6 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-colors">
              <CreditCard className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-white font-semibold mb-2">Refunds</h3>
              <p className="text-text-secondary text-sm">14-day money-back guarantee.</p>
            </Link>
            <Link href="/license" className="p-6 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-colors">
              <FileVideo className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-white font-semibold mb-2">Licensing Info</h3>
              <p className="text-text-secondary text-sm">Usage rights and restrictions.</p>
            </Link>
            <a href="mailto:support@presets.com" className="p-6 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-colors">
              <AlertCircle className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-white font-semibold mb-2">Email Support</h3>
              <p className="text-text-secondary text-sm">support@presets.com</p>
            </a>
          </div>

          {/* FAQs */}
          <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl bg-bg-secondary border border-border">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="text-white font-medium">{faq.question}</span>
                  <span className="text-text-tertiary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="px-4 pb-4 text-text-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}