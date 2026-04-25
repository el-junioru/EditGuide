'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShow(true), 2000);
    } else if (consent === 'accepted') {
      setAccepted(true);
      initializeTracking();
    }
  }, []);

  const acceptAll = () => {
    const consentData = {
      accepted: true,
      date: new Date().toISOString(),
      email: '',
      marketing: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setAccepted(true);
    setShow(false);
    initializeTracking();
  };

  const decline = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ accepted: false, date: new Date().toISOString() }));
    setShow(false);
  };

  const initializeTracking = () => {
    // Meta Pixel (Facebook) - for ad targeting
    const metaScript = document.createElement('script');
    metaScript.innerHTML = `
      !function(f,b,g,v,a,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(g);t.async=!0;
      t.src=v;s=b.getElementsByTagName(g)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(metaScript);

    // Google Ads - for conversion tracking and remarketing
    const gtag = function(...args: any[]) { (window as any).gtagq = (window as any).gtagq || []; (window as any).gtagq.push(args); };
    (window as any).gtag = gtag;
    gtag('config', 'AW-YOUR_CONVERSION_ID');
    
    const googleScript = document.createElement('script');
    googleScript.async = true;
    googleScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-YOUR_CONVERSION_ID';
    document.head.appendChild(googleScript);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-bg-secondary border border-border rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">We value your privacy</h3>
                <p className="text-text-secondary text-sm">
                  We use cookies to improve your experience and deliver personalized ads. By accepting, you help us show you relevant products.
                </p>
              </div>
              <button onClick={decline} className="text-text-tertiary hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-3">
              <button
                onClick={decline}
                className="flex-1 py-2 rounded-lg border border-border text-white text-sm font-medium hover:bg-bg-tertiary transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 py-2 rounded-lg bg-gradient text-white text-sm font-medium hover:brightness-110 transition-all"
              >
                Accept
              </button>
            </div>
            <Link href="/privacy" className="block mt-2 text-xs text-text-tertiary hover:text-white">
              Privacy Policy →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}