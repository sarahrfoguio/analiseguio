
export type SectionId = 'dashboard' | 'methodology' | 'product' | 'warroom' | 'plans' | 'convergencia';

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  action: string;
  color: string;
  details: string[];
}

export interface CompetitorData {
  name: string;
  tagline: string;
  focus: string;
  strength: string;
  weakness: string;
  preAnalysis: string;
  seo: {
    h1: string;
    keywords: string[];
  };
  scores: {
    product: number;
    process: number;
    people: number;
    gamification: number;
    automation: number;
  };
}

export interface Plan {
  name: string;
  features: string[];
  highlight?: boolean;
  fullDetails: string;
}

export interface BenchmarkingRow {
  resource: string;
  retorne: string;
  sisfood: string;
  alloy: string;
  fidelimax: string;
  opportunity: string;
}
