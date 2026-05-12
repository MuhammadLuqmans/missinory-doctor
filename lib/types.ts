export type Region = "Africa" | "Asia & ME" | "Americas";

export type NeedCategory =
  | "Equipment"
  | "Construction"
  | "Training"
  | "Response";

export interface HospitalSummary {
  slug: string;
  name: string;
  location: string;
  country: string;
  region: Region;
  imageUrl: string;
  blurb: string;
  beds: number;
  founded: number;
  /** Either open roles or specialties — label flips accordingly. */
  metricLabel: string;
  metricValue: string;
  urgentNeeds?: number;
}

export interface BudgetLine {
  name: string;
  detail: string;
  amount: number;
}

export interface TimelineStep {
  date: string;
  title: string;
  description: string;
  state: "done" | "current" | "future";
}

export interface FieldUpdate {
  date: string;
  title: string;
  paragraphs: string[];
  photoUrl?: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface NeedDetail {
  slug: string;
  title: string;
  titleHighlight?: string;
  hospitalSlug: string;
  hospitalName: string;
  hospitalLocation: string;
  hospitalCountry: string;
  category: NeedCategory;
  urgent?: boolean;
  urgencyLabel?: string;
  heroImageUrl: string;
  lede: string;
  whyHeadline: string;
  whyParagraphs: string[];
  budget: BudgetLine[];
  budgetTotal: number;
  budgetNote?: string;
  timeline: TimelineStep[];
  updates: FieldUpdate[];
  faqs: FaqItem[];
  /** Funding progress */
  raised: number;
  goal: number;
  donors: number;
  estimatedClose: string;
}

export interface NeedCardData {
  slug: string;
  title: string;
  location: string;
  blurb: string;
  imageUrl: string;
  raised: number;
  goal: number;
  urgent?: boolean;
  urgencyLabel?: string;
  category: NeedCategory;
}
