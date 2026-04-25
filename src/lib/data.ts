import { Preset } from './types';

export const PRESETS: Preset[] = [
  {
    id: '1',
    name: 'Midnight Cinema',
    description: 'A sophisticated color grading preset with deep shadows and rich contrast. Perfect for film noir, thrillers, and dramatic storytelling. Features custom LUTs, adjusted skin tones, and atmospheric grain.',
    software: 'davinci',
    style: 'cinematic',
    price: 49,
    salePrice: 39,
    thumbnail: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=800&fit=crop'
    ],
    features: [
      'Custom cinematic LUTs',
      'Adjusted skin tones',
      'Film grain overlay',
      'Vignette effect',
      'Color wheels preset'
    ],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Summer Vibes',
    description: 'Bright, warm, and energetic preset perfect for lifestyle content, travel vlogs, and social media. Enhances greens and blues while keeping skin tones natural.',
    software: 'davinci',
    style: 'lifestyle',
    price: 29,
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop'
    ],
    features: [
      'Warm color grade',
      'Enhanced saturation',
      'Sky enhancement',
      'Soft contrast',
      'Quick edit nodes'
    ],
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    name: 'Neon Dreams',
    description: 'Cyberpunk-inspired preset with intense neon colors and dark undertones. Perfect for music videos, gaming content, and futuristic aesthetics.',
    software: 'premiere',
    style: 'music-video',
    price: 59,
    salePrice: 49,
    thumbnail: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop'
    ],
    features: [
      'Neon color pop',
      'Dark moody grade',
      'RGB split effect',
      'Glow highlights',
      'Beat sync ready'
    ],
    createdAt: '2024-03-10'
  },
  {
    id: '4',
    name: 'Corporate Elite',
    description: 'Professional, clean color grading for business content, interviews, and corporate videos. Subtle enhancements that make your content look premium.',
    software: 'premiere',
    style: 'commercial',
    price: 39,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1553878522-d76680763827?w=1200&h=800&fit=crop'
    ],
    features: [
      'Clean white balance',
      'Subtle contrast boost',
      'Professional LUT',
      'Lower thirds match',
      'Logo safe colors'
    ],
    createdAt: '2024-01-25'
  },
  {
    id: '5',
    name: 'TikTok Viral',
    description: 'Eye-catching preset optimized for short-form social media content. High contrast, vibrant colors designed to stop the scroll.',
    software: 'capcut',
    style: 'social-media',
    price: 19,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611162616305-c6b4f9afc4c9?w=1200&h=800&fit=crop'
    ],
    features: [
      'Vertical optimized',
      'High saturation',
      'Quick edits',
      'Text overlay ready',
      'Filter stacking'
    ],
    createdAt: '2024-04-05'
  },
  {
    id: '6',
    name: 'Retro Wave',
    description: '80s-inspired nostalgic preset with warm tones, soft focus, and vintage character. Perfect for retro content and throwback aesthetic.',
    software: 'davinci',
    style: 'lifestyle',
    price: 35,
    thumbnail: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=800&fit=crop'
    ],
    features: [
      'Vintage color grade',
      'Soft focus effect',
      'Light leak overlays',
      'Letterbox option',
      'Retro transitions'
    ],
    createdAt: '2024-03-28'
  },
  {
    id: '7',
    name: 'Fashion Week',
    description: 'High-fashion color grading with desaturated tones and dramatic lighting. Perfect for fashion shoots, lookbooks, and editorial content.',
    software: 'premiere',
    style: 'cinematic',
    price: 69,
    salePrice: 59,
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&h=800&fit=crop'
    ],
    features: [
      'Desaturated tones',
      'Dramatic lighting',
      'Skin detail retain',
      'Grain optional',
      'Magazine look'
    ],
    createdAt: '2024-02-14'
  },
  {
    id: '8',
    name: 'Urban Street',
    description: 'Gritty, urban color grade perfect for street photography, skate videos, and urban content. High contrast with teal and orange push.',
    software: 'capcut',
    style: 'music-video',
    price: 25,
    thumbnail: 'https://images.unsplash.com/photo-1547756536-cde3673fa2e5?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1547756536-cde3673fa2e5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&h=800&fit=crop'
    ],
    features: [
      'Teal orange grade',
      'High contrast',
      'Street optimized',
      'Fast edits',
      'Beat cuts ready'
    ],
    createdAt: '2024-04-12'
  },
  {
    id: '9',
    name: 'Natural Light',
    description: 'Soft, natural-looking color grading that enhances video without looking edited. Perfect for beauty, lifestyle, and family content.',
    software: 'davinci',
    style: 'lifestyle',
    price: 45,
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1200&h=800&fit=crop'
    ],
    features: [
      'Natural skin tones',
      'Soft enhancement',
      'No overkill',
      'Family safe',
      'Easy workflow'
    ],
    createdAt: '2024-01-30'
  },
  {
    id: '10',
    name: 'Drone Aerial',
    description: 'Optimized for aerial drone footage with enhanced skies, water, and landscape colors. Makes your drone content truly pop.',
    software: 'premiere',
    style: 'cinematic',
    price: 55,
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&h=800&fit=crop'
    ],
    features: [
      'Sky enhancement',
      'Water color boost',
      'Landscape pop',
      'Gimbal shake fix',
      'Panorama ready'
    ],
    createdAt: '2024-03-15'
  },
  {
    id: '11',
    name: 'Foodie Gram',
    description: 'Make your food content look delicious with warm, appetizing color grading. Enhances colors to make any dish look insta-worthy.',
    software: 'capcut',
    style: 'social-media',
    price: 22,
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&h=800&fit=crop'
    ],
    features: [
      'Food enhancement',
      'Warm tones',
      'Steam effect',
      'Quick edits',
      'Template bundle'
    ],
    createdAt: '2024-04-20'
  },
  {
    id: '12',
    name: 'Minimal Gray',
    description: 'Clean, minimalistic color grade with desaturated colors and gray tones. Perfect for tech reviews, minimalist content, and premium aesthetic.',
    software: 'davinci',
    style: 'commercial',
    price: 42,
    thumbnail: 'https://images.unsplash.com/photo-1499951360447-b19be6fe79f3?w=600&h=450&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1499951360447-b19be6fe79f3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop'
    ],
    features: [
      'Desaturated look',
      'Clean gray tones',
      'Tech optimized',
      'Minimal noise',
      'Clean edit nodes'
    ],
    createdAt: '2024-02-28'
  }
];

export const SOFTWARE_LABELS: Record<string, string> = {
  davinci: 'DaVinci Resolve',
  premiere: 'Premiere Pro',
  capcut: 'CapCut'
};

export const STYLE_LABELS: Record<string, string> = {
  cinematic: 'Cinematic',
  lifestyle: 'Lifestyle',
  'music-video': 'Music Video',
  commercial: 'Commercial',
  'social-media': 'Social Media'
};