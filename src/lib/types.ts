export type Software = 'davinci' | 'premiere' | 'capcut';
export type Style = 'cinematic' | 'lifestyle' | 'music-video' | 'commercial' | 'social-media';

export interface Preset {
  id: string;
  name: string;
  description: string;
  software: Software;
  style: Style;
  price: number;
  salePrice?: number;
  thumbnail: string;
  previewVideo?: string;
  images: string[];
  features: string[];
  createdAt: string;
}

export interface CartItem extends Preset {
  quantity: number;
}