export interface AcademicProgram {
  id: string;
  gradeRange: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  focusAreas: string[];
  badge: string;
  iconName: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Academic' | 'Sports' | 'Residential' | 'Health';
  description: string;
  highlights: string[];
  image: string;
  featured?: boolean;
}

export interface SportActivity {
  id: string;
  name: string;
  category: 'Olympic' | 'Indoor' | 'Outdoor' | 'Martial Arts' | 'Adventure';
  description: string;
  coach: string;
  image: string;
  facilities: string;
}

export interface Testimonial {
  id: string;
  author: string;
  relation: string;
  studentName: string;
  grade?: string;
  quote: string;
  rating: number;
  source: 'Google Review' | 'Parent Feedback' | 'Alumni Network';
}

export interface Dignitary {
  id: string;
  name: string;
  title: string;
  achievements: string;
  category: 'Sports & Influencers' | 'Leaders of India';
  quote?: string;
}

export interface StatItem {
  id: string;
  number: string;
  numericValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  icon: string;
}

export interface EnquiryPayload {
  fullName: string;
  email?: string;
  phone: string;
  countryCode: string;
  classGrade: string;
  state: string;
  message?: string;
  consent: boolean;
}

export interface EnquiryRecord extends EnquiryPayload {
  id: string;
  referenceId: string;
  createdAt: string;
  status: 'PENDING' | 'CONTACTED' | 'ENROLLED';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  createdAt: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
}
