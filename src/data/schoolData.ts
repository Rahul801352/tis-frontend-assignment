import { AcademicProgram, Facility, SportActivity, Testimonial, Dignitary, StatItem } from '../types';

export const SCHOOL_INFO = {
  name: "Tulas International School",
  shortName: "TIS Dehradun",
  tagline: "The Modern Gurukul - Where Tradition Meets Tomorrow",
  slogan: "Let's Do It with Tulas",
  established: 2012,
  founderTrust: "Rishabh Educational Trust",
  affiliation: "CBSE Co-Educational Residential School (Class IV to XII)",
  location: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011, Uttarakhand, India",
  admissionsHelpline: "+91-9837983791",
  landlines: ["0135-2699444", "0135-2699666"],
  email: "info@tis.edu.in",
  admissionsEmail: "admissions@tis.edu.in",
  googleMapsUrl: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  coordinates: {
    lat: 30.3430336,
    lng: 77.8891652,
  },
  socialLinks: {
    facebook: "https://www.facebook.com/tulasinternationalschool/",
    instagram: "https://www.instagram.com/tulasinternationalschool/",
    youtube: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
    linkedin: "https://www.linkedin.com/school/tulas-international-school/",
    twitter: "https://twitter.com/tulas_intschool"
  }
};

export const STATS_DATA: StatItem[] = [
  {
    id: "campus-area",
    number: "22+",
    numericValue: 22,
    suffix: " Acres",
    label: "Lush Himalayan Campus",
    description: "Serene, pollution-free learning sanctuary in the foothills of Dehradun",
    icon: "Trees"
  },
  {
    id: "olympic-sports",
    number: "16+",
    numericValue: 16,
    suffix: " Disciplines",
    label: "Olympic Sports Facilities",
    description: "Professional coaching, international grade courts, tracks & ranges",
    icon: "Trophy"
  },
  {
    id: "ratio",
    number: "6:1",
    numericValue: 6,
    prefix: "",
    suffix: "",
    label: "Student-Teacher Ratio",
    description: "Unmatched individualized attention, pastoral care & personalized mentorship",
    icon: "Users"
  },
  {
    id: "medical",
    number: "24x7",
    numericValue: 24,
    suffix: " Support",
    label: "Resident Medical Infirmary",
    description: "Full-time resident doctors, round-the-clock nurses & ambulance readiness",
    icon: "HeartPulse"
  },
  {
    id: "collaborations",
    number: "12+",
    numericValue: 12,
    suffix: " Global Alliances",
    label: "International Partnerships",
    description: "Exchange programs, Model UN, and university prep networks across 4 continents",
    icon: "Globe"
  },
  {
    id: "placement",
    number: "100%",
    numericValue: 100,
    suffix: "%",
    label: "University Acceptance",
    description: "Graduates accepted into top premier universities in India and abroad",
    icon: "GraduationCap"
  }
];

export const RANKINGS_DATA = [
  {
    rank: "#1",
    title: "Co-Educational Boarding School in Dehradun",
    source: "Education Today (2024)",
    badge: "Dehradun Top Honor"
  },
  {
    rank: "#1",
    title: "Co-Educational Boarding School in North India",
    source: "Outlook Magazine Ranking",
    badge: "North India Best"
  },
  {
    rank: "#2",
    title: "Co-Educational Residential School in Uttarakhand",
    source: "Education Today",
    badge: "State Laurels"
  },
  {
    rank: "#4",
    title: "Co-Educational Boarding School Across India",
    source: "All India Education Survey",
    badge: "National Excellence"
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "primary",
    gradeRange: "Class IV - V",
    title: "Primary Wing (The Inquirers)",
    subtitle: "Nurturing curiosity, foundational literacy, and joyful exploration",
    description: "In the formative primary years, we build an imaginative, supportive learning environment. Students are guided to ask questions, explore hands-on wonders, and cultivate empathy and collaborative skills.",
    keyFeatures: [
      "Activity-driven experiential learning modules",
      "Bilingual fluency & public speaking clubs",
      "Foundational coding, logic puzzles & robotics introduction",
      "Daily physical education & fine arts sessions"
    ],
    focusAreas: ["Curiosity Cultivation", "Emotional Quotient", "Foundational Numeracy", "Art & Theatre"],
    badge: "Foundational Tier",
    iconName: "Sparkles"
  },
  {
    id: "middle",
    gradeRange: "Class VI - VIII",
    title: "Middle School (The Explorers)",
    subtitle: "Conceptual depth, interdisciplinary projects, and character building",
    description: "Transitioning into middle school, learners embrace self-discovery and critical inquiry. Rigorous CBSE standards are blended with project-based learning, scientific experiments, and foreign language options.",
    keyFeatures: [
      "Integrated STEM laboratories & design thinking",
      "Model United Nations (MUN) junior debate forum",
      "French, German, and Sanskrit language electives",
      "Mandatory participation in 2 competitive sports"
    ],
    focusAreas: ["Critical Inquiry", "Scientific Temper", "Leadership Ethics", "Sports Specialization"],
    badge: "Intermediate Tier",
    iconName: "Compass"
  },
  {
    id: "secondary",
    gradeRange: "Class IX - X",
    title: "Secondary School (The Achievers)",
    subtitle: "Academic rigour, competitive foundations, and CBSE board mastery",
    description: "A crucial milestone where students synthesize conceptual mastery with board exam readiness. Expert subject faculty conduct targeted remedial and accelerated batches, alongside career aptitude counseling.",
    keyFeatures: [
      "Comprehensive CBSE board curriculum with mock diagnostics",
      "Integrated NTSE, Olympiad, and foundational coaching",
      "AI, Web Technologies, and Financial Literacy electives",
      "Community service & environmental stewardship initiatives"
    ],
    focusAreas: ["Board Mastery", "Aptitude Profiling", "Analytical Problem-Solving", "Social Responsibility"],
    badge: "Secondary Wing",
    iconName: "BookOpenCheck"
  },
  {
    id: "senior-secondary",
    gradeRange: "Class XI - XII",
    title: "Senior Secondary (The Leaders)",
    subtitle: "Specialized streams, university entrance coaching, and global aspirations",
    description: "Offering Science (PCM/PCB), Commerce, and Humanities streams taught by master educators. In-house integrated coaching prepares students concurrently for JEE, NEET, CLAT, CUET, SAT, and foreign university admissions.",
    keyFeatures: [
      "Science, Commerce, and Humanities with 15+ flexible subject combinations",
      "Dedicated College Placement Cell with 1-on-1 counseling",
      "In-house competitive coaching for JEE / NEET / CUET / SAT",
      "Internships, capstone research papers & leadership councils"
    ],
    focusAreas: ["University Pathways", "Competitive Edge", "Career Visioning", "Global Mindset"],
    badge: "Collegiate Wing",
    iconName: "Award"
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "smart-classes",
    title: "Hi-Tech Digital Classrooms",
    category: "Academic",
    description: "Acoustically treated, air-cooled classrooms equipped with interactive 4K smart interactive panels, ergonomic furniture, and high-speed Wi-Fi.",
    highlights: ["4K Touch Smart Panels", "Ergonomic Seating", "Climate-Controlled", "Digital Lesson Archives"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "sports-complex",
    title: "Olympic-Grade Sports Complex",
    category: "Sports",
    description: "16+ disciplines including an indoor heated swimming pool, floodlit basketball and tennis courts, professional shooting range, and equestrian horse riding arena.",
    highlights: ["Indoor Heated Pool", "10m Air Rifle Shooting Range", "Full-Size Football Turf", "Horse Riding Arena"],
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "science-robotics-lab",
    title: "Advanced STEM & Robotics Studio",
    category: "Academic",
    description: "Cutting-edge physics, chemistry, biology labs alongside a dedicated maker space with 3D printers, IoT kits, and drone design workstations.",
    highlights: ["3D Printing Stations", "Arduino & Raspberry Pi Kits", "Strict Safety Protocols", "Research Mentorship"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "library",
    title: "Central Knowledge Hub & E-Library",
    category: "Academic",
    description: "Home to over 20,000 physical volumes, international journals, digital subscriptions (JSTOR, National Geographic), and peaceful glass-walled study alcoves.",
    highlights: ["20,000+ Print Books", "Global Digital Databases", "Quiet Study Pods", "Audiobook Listening Kiosks"],
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "hostels",
    title: "Modern Residential Hostels",
    category: "Residential",
    description: "Separate, secure boarding houses for boys and girls with spacious rooms, attached washrooms, recreational common rooms, and caring resident housemasters.",
    highlights: ["24x7 Multi-Tier Security", "Resident Houseparents", "Laundry & Housekeeping", "Recreational Lounges"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "dining",
    title: "Multi-Cuisine Organic Dining",
    category: "Health",
    description: "A state-of-the-art hygienic dining hall serving 4 wholesome, nutritionist-planned vegetarian meals daily, prepared using fresh organic ingredients.",
    highlights: ["Nutritionist Curated Menus", "100% Pure Vegetarian", "Steam Cooked & RO Purified", "Special Dietary Care"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "infirmary",
    title: "24/7 Medical Care & Wellness",
    category: "Health",
    description: "8-bed sanitized infirmary with full-time medical officer, round-the-clock certified nurses, tie-ups with leading multi-speciality hospitals in Dehradun.",
    highlights: ["Resident Doctor & Nurses", "Dedicated Ambulance", "Regular Health Checkups", "Mental Wellness Counseling"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    featured: false
  }
];

export const SPORTS_DATA: SportActivity[] = [
  {
    id: "archery",
    name: "Archery",
    category: "Olympic",
    description: "National standard outdoor shooting ranges guided by certified NIS coaches who have trained world champions.",
    coach: "NIS Certified Coach",
    facilities: "50m & 70m Standard Target Range",
    image: "https://images.unsplash.com/photo-1511067007798-4029d3ae7544?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "swimming",
    name: "Swimming",
    category: "Olympic",
    description: "Half-Olympic size, temperature-regulated pool with certified lifeguards and stroke correction coaches.",
    coach: "National Level Swimmer",
    facilities: "All-Weather Heated Indoor Pool",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "horse-riding",
    name: "Horse Riding",
    category: "Adventure",
    description: "Dedicated equestrian club with pedigreed horses, professional stable hands, and dressage training.",
    coach: "Ex-Army Equestrian Instructor",
    facilities: "Dedicated Sand Paddock & Obstacle Course",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "shooting",
    name: "10m Shooting Range",
    category: "Olympic",
    description: "Precision 10-lane electronic target shooting range for air rifle and air pistol disciplines.",
    coach: "National Shooting Champion",
    facilities: "Electronic Swiss Scoring Targets",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "football",
    name: "Football",
    category: "Outdoor",
    description: "FIFA-dimension grass turf pitch hosting inter-school tournaments, tactical clinics, and fitness camps.",
    coach: "AIFF 'D' Licensed Coach",
    facilities: "Natural Lush Grass Stadium with Floodlights",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "basketball",
    name: "Basketball",
    category: "Outdoor",
    description: "Two FIBA standard maple-coated synthetic courts with shock absorption and LED match lighting.",
    coach: "State Basketball Veteran",
    facilities: "2 Synthetic Floodlit Regulation Courts",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lawn-tennis",
    name: "Lawn Tennis",
    category: "Outdoor",
    description: "All-weather hard courts engineered to US Open standards for endurance and agility drills.",
    coach: "AITA Certified Tennis Coach",
    facilities: "Synthetic Decoturf Courts with Night Lighting",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "squash",
    name: "Squash",
    category: "Indoor",
    description: "Glass-backed international regulation squash courts with impact-cushioned wooden flooring.",
    coach: "WSF Level 1 Coach",
    facilities: "Air-Conditioned Glass-Backed Courts",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cricket",
    name: "Cricket",
    category: "Outdoor",
    description: "Full-boundary cricket ground with natural turf wickets, bowling machines, and indoor practice nets.",
    coach: "BCCI Level 1 Coach",
    facilities: "4 Turf Practice Pitches & Automated Bowling Net",
    image: "https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "badminton",
    name: "Badminton",
    category: "Indoor",
    description: "Multi-court indoor arena featuring Yonex synthetic mats and anti-glare high-bay luminaires.",
    coach: "Former State Champion",
    facilities: "4 Synthetic Indoor Courts",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "taekwondo",
    name: "Taekwondo & Karate",
    category: "Martial Arts",
    description: "Holistic self-defense and belt progression training emphasizing mental focus and discipline.",
    coach: "Black Belt 4th Dan Master",
    facilities: "Full Mat Dojo with Safety Gear",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    category: "Indoor",
    description: "Stag Americas tournament tables with ITTF approved bounce surfaces and multi-ball robots.",
    coach: "National Ranking Player",
    facilities: "Dedicated TT Hall with 6 Competition Tables",
    image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    author: "Tashi Tsering",
    relation: "Father of Jigmet Skaldon (Class IX)",
    studentName: "Jigmet Skaldon",
    quote: "I would like to convey my heartfelt thanks to the Management and Teachers of Tulas International School for taking such dedicated care of my son. His confidence in speaking, academic grades, and love for basketball have blossomed exponentially.",
    rating: 5,
    source: "Google Review"
  },
  {
    id: "test-2",
    author: "Namita Agarwal",
    relation: "Mother of Krishna Agarwal (Class XI - Science)",
    studentName: "Krishna Agarwal",
    quote: "Tulas gives a truly comprehensive environment for our child to grow. The balance between rigorous competitive coaching, horse riding, and music has helped Krishna understand himself better. It feels like an extended family.",
    rating: 5,
    source: "Parent Feedback"
  },
  {
    id: "test-3",
    author: "Sandeep Kumar",
    relation: "Father of Aryan (Class VII)",
    studentName: "Aryan",
    quote: "Our experience with TIS has been nothing short of extraordinary. The boarding staff is extremely supportive and cooperative. Whenever we talk to Aryan, he beams with stories about his science projects and archery achievements.",
    rating: 5,
    source: "Google Review"
  },
  {
    id: "test-4",
    author: "Pinky Sharma",
    relation: "Mother of Swastik Sharma (Class X)",
    studentName: "Swastik Sharma",
    quote: "I am thoroughly satisfied with the nurturing experience my son is receiving. The teachers are exceptionally approachable and passionate. The discipline and moral values instilled here are exemplary.",
    rating: 5,
    source: "Parent Feedback"
  },
  {
    id: "test-5",
    author: "Gulabdas Gupta",
    relation: "Father of Annika Gulabdas Gupta (Class VIII)",
    studentName: "Annika",
    quote: "We admitted our daughter to Tulas this year. She is delighted with the modern facilities, clean hostel environment, and diverse extra-curricular activities. TIS has surpassed all our expectations for a boarding school.",
    rating: 5,
    source: "Google Review"
  }
];

export const DIGNITARIES_DATA: Dignitary[] = [
  {
    id: "sakshi-malik",
    name: "Sakshi Malik",
    title: "Olympic Bronze Medalist & Padma Shri Awardee",
    achievements: "First Indian female wrestler to win an Olympic medal (Rio 2016), Rajiv Gandhi Khel Ratna awardee.",
    category: "Sports & Influencers",
    quote: "The athletic infrastructure and sporting spirit at Tulas International School are truly world-class."
  },
  {
    id: "vishesh",
    name: "Vishesh Bhriguvanshi",
    title: "Captain, Indian National Basketball Team",
    achievements: "FIBA Asia star, Arjuna Awardee who led Team India to Asian Gold.",
    category: "Sports & Influencers",
    quote: "Tulas builds athletes of character and supreme resilience."
  },
  {
    id: "shooter-dadi",
    name: "Prakashi Tomar & Late Chandro Tomar",
    title: "National Rifle Shooting Legends ('Shooter Dadi')",
    achievements: "Inspirational national icons whose life story inspired the Bollywood movie 'Saand Ki Aankh'.",
    category: "Sports & Influencers",
    quote: "Watching young girls master the 10m rifle range at TIS fills our hearts with pride."
  },
  {
    id: "abhishek-verma",
    name: "Abhishek Verma",
    title: "World #6 Archer & Asian Games Gold Medalist",
    achievements: "Arjuna Awardee and two-time World Cup individual champion.",
    category: "Sports & Influencers",
    quote: "The archery setup at TIS rivals national training camps."
  },
  {
    id: "laxmi-agarwal",
    name: "Laxmi Agarwal",
    title: "International Women of Courage Awardee",
    achievements: "Founder of The Laxmi Foundation, inspiration behind the film 'Chhapaak'.",
    category: "Sports & Influencers",
    quote: "Tulas students demonstrate empathy, social courage, and visionary thinking."
  }
];

export const WHY_CHOOSE_TIS = [
  {
    id: "gurukul",
    title: "Modern Gurukul Philosophy",
    desc: "A harmonious synthesis of timeless Indian ethos (respect, mindfulness, self-reliance) with 21st-century global education and digital innovation.",
    icon: "GraduationCap"
  },
  {
    id: "sports-foundation",
    title: "Sports as Foundation",
    desc: "Not a mere extracurricular activity, but a core pillar with 16+ Olympic sports cultivating grit, team dynamics, and mental fortitude.",
    icon: "Trophy"
  },
  {
    id: "mentorship",
    title: "Unrivaled 6:1 Mentorship",
    desc: "Every child is nurtured individually with bespoke academic support, personal coaching, and round-the-clock pastoral guardianship.",
    icon: "HeartHandshake"
  },
  {
    id: "campus-ecosystem",
    title: "22-Acre Himalayan Sanctuary",
    desc: "An idyllic, pollution-free campus offering clean mountain air, expansive athletic turf, smart academic blocks, and peaceful residential life.",
    icon: "Mountain"
  },
  {
    id: "university-pathways",
    title: "Global University Success",
    desc: "Comprehensive college guidance, SAT/CUET/JEE integration, and career roadmaps ensuring 100% admissions into premier global institutions.",
    icon: "Compass"
  },
  {
    id: "safety-care",
    title: "Impeccable Safety & Nutrition",
    desc: "Multi-tier security, 24/7 resident medical care, and wholesome nutritionist-crafted pure vegetarian cuisine for holistic student wellness.",
    icon: "ShieldCheck"
  }
];
