'use client';

import { Suspense, useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Software, Style } from '@/lib/types';
import { PRESETS } from '@/lib/data';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import ProductGrid from '@/components/ProductGrid';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';

function PresetsContent() {
  const searchParams = useSearchParams();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const softwareParam = searchParams.get('software');
  const initialSoftware: Software | 'all' = 
    softwareParam === 'davinci' ? 'davinci' :
    softwareParam === 'premiere' ? 'premiere' :
    softwareParam === 'capcut' ? 'capcut' : 'all';

  const [selectedSoftware, setSelectedSoftware] = useState<Software | 'all'>(initialSoftware);
  const [selectedStyle, setSelectedStyle] = useState<Style | 'all'>('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredPresets = useMemo(() => {
    let filtered = [...PRESETS];

    if (selectedSoftware !== 'all') {
      filtered = filtered.filter(p => p.software === selectedSoftware);
    }

    if (selectedStyle !== 'all') {
      filtered = filtered.filter(p => p.style === selectedStyle);
    }

    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        break;
      case 'price-low':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      default:
        filtered.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }

    return filtered;
  }, [selectedSoftware, selectedStyle, sortBy]);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <CartSidebar />
      
      <Hero />

      <section id="presets" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar
            selectedSoftware={selectedSoftware}
            selectedStyle={selectedStyle}
            sortBy={sortBy}
            onSoftwareChange={setSelectedSoftware}
            onStyleChange={setSelectedStyle}
            onSortChange={setSortBy}
          />
          
          <div className="mt-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                {selectedSoftware === 'all' ? 'All Presets' : 
                  selectedSoftware === 'davinci' ? 'DaVinci Resolve' :
                  selectedSoftware === 'premiere' ? 'Premiere Pro' : 'CapCut'} Presets
              </h2>
              <span className="text-text-secondary">
                {filteredPresets.length} presets
              </span>
            </div>
            
            <ProductGrid presets={filteredPresets} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <PresetsContent />
    </Suspense>
  );
}