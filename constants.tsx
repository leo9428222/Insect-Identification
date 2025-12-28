
import React from 'react';
import { 
  Camera, Database, Library, Map, Users, WifiOff, ShieldCheck, 
  GraduationCap, Globe, Zap, Check, Star, Leaf, Search, Menu, X, 
  ChevronRight, Apple, PlayCircle, Mail, Twitter, Instagram, 
  Facebook, Youtube
} from 'lucide-react';
import { Feature, Stat, InsectCategory, NavItem } from './types';

export const COLORS = {
  forest: '#1B4D3E',
  leaf: '#4CAF50',
  sage: '#8BC34A',
  amber: '#FFA726',
  sky: '#42A5F5',
  sunset: '#FF7043',
  cream: '#F5F7F2',
  charcoal: '#2C2C2C',
  warmgray: '#9E9E9E'
};

export const NAVIGATION: NavItem[] = [
  { label: 'Features', path: '/#features' },
  { label: 'Database', path: '/database' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Community', path: '/community' },
  { 
    label: 'Learn', 
    path: '#',
    children: [
      { label: 'Blog', path: '/blog' },
      { label: 'Help Center', path: '/support' },
      { label: 'About Us', path: '/about' },
      { label: 'Conservation', path: '/conservation' }
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Instant AI Identification",
    description: "Snap a photo and get precise species identification in seconds. Our neural network recognizes over 5,000 unique species with 98% accuracy.",
    imageUrl: "https://picsum.photos/seed/bug1/720/500",
    icon: <Camera className="w-16 h-16 text-leaf" />
  },
  {
    id: 2,
    title: "Comprehensive Species Database",
    description: "Explore detailed profiles containing habitat info, dietary habits, and high-resolution galleries for every insect in our library.",
    imageUrl: "https://picsum.photos/seed/bug2/720/500",
    icon: <Database className="w-16 h-16 text-leaf" />
  },
  {
    id: 3,
    title: "Personal Collection",
    description: "Build your digital museum. Organize your discoveries by date, location, or taxonomy and share your rare finds with fellow enthusiasts.",
    imageUrl: "https://picsum.photos/seed/bug3/720/500",
    icon: <Library className="w-16 h-16 text-leaf" />
  },
  {
    id: 4,
    title: "Interactive Global Map",
    description: "Contribute to citizen science. See where specific species are being spotted worldwide and track seasonal migration patterns.",
    imageUrl: "https://picsum.photos/seed/bug4/720/500",
    icon: <Map className="w-16 h-16 text-leaf" />
  }
];

export const STATS: Stat[] = [
  { label: 'Identifications', value: '2.5M+', icon: <Check className="w-6 h-6" /> },
  { label: 'Users Worldwide', value: '500K+', icon: <Users className="w-6 h-6" /> },
  { label: 'Species Database', value: '5,000+', icon: <Database className="w-6 h-6" /> },
  { label: 'Accuracy Rate', value: '98%', icon: <Star className="w-6 h-6" /> }
];

export const CATEGORIES: InsectCategory[] = [
  { id: '1', name: 'Butterflies', count: 1240, imageUrl: 'https://picsum.photos/seed/butterfly/300/300', type: 'Flying' },
  { id: '2', name: 'Beetles', count: 3200, imageUrl: 'https://picsum.photos/seed/beetle/300/300', type: 'Crawling' },
  { id: '3', name: 'Bees & Wasps', count: 850, imageUrl: 'https://picsum.photos/seed/bee/300/300', type: 'Flying' },
  { id: '4', name: 'Dragonflies', count: 420, imageUrl: 'https://picsum.photos/seed/dragonfly/300/300', type: 'Flying' },
  { id: '5', name: 'Moths', count: 2100, imageUrl: 'https://picsum.photos/seed/moth/300/300', type: 'Flying' },
  { id: '6', name: 'Spiders', count: 1100, imageUrl: 'https://picsum.photos/seed/spider/300/300', type: 'Crawling' },
  { id: '7', name: 'Ants', count: 640, imageUrl: 'https://picsum.photos/seed/ant/300/300', type: 'Crawling' },
  { id: '8', name: 'Grasshoppers', count: 380, imageUrl: 'https://picsum.photos/seed/grasshopper/300/300', type: 'Crawling' }
];

export const Logo = ({ className = "h-10" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-lg border-2 border-forest">
      <div className="absolute inset-0 bg-forest opacity-10"></div>
      <Search className="w-6 h-6 text-forest relative z-10" />
      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-leaf rounded-full flex items-center justify-center transform rotate-45 border-2 border-white">
        <div className="w-1 h-3 bg-white rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
         <Leaf className="w-8 h-8 text-leaf" />
      </div>
    </div>
    <span className="text-2xl font-bold text-white tracking-tight">BugScope</span>
  </div>
);
