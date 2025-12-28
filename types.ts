
export interface InsectCategory {
  id: string;
  name: string;
  count: number;
  imageUrl: string;
  type: 'Flying' | 'Crawling' | 'Aquatic';
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}
