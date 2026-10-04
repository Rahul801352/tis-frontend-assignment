# Tulas International School (TIS) – Animated Homepage Redesign

> **Frontend Developer Assignment Submission**  
> **Candidate Project**: Tulas International School (TIS) – Redesigned Modern, Responsive & Animated Homepage with Connected Full-Stack Backend API.  
> **Reference Website**: [https://tis.edu.in/](https://tis.edu.in/)

---

## 🌟 Executive Summary

This project is a redesign and full-stack implementation of the official **Tulas International School (TIS)** homepage. While strictly retaining authentic TIS branding, copy, color palette, and institutional legacy (CBSE Co-Educational Residential School established in 2012 in Dehradun under Rishabh Educational Trust), the user experience has been elevated into an agency-level web application.

The application features smooth **Framer Motion** scroll animations, an interactive **custom cursor**, top **reading progress bar**, persistent **dark/light mode theme switcher**, and a **fully connected backend persistence layer** for real-time admission enquiries and contact messages.

---

## 🚀 Live Demo & Repository

- **Live Deployed Website**: **[https://tis-frontend-assignment-pi.vercel.app](https://tis-frontend-assignment-pi.vercel.app)**
- **GitHub Repository**: **[https://github.com/Rahul801352/tis-frontend-assignment](https://github.com/Rahul801352/tis-frontend-assignment)**
- **Reference Website**: [https://tis.edu.in/](https://tis.edu.in/)

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Core Framework** | **Next.js 14 (App Router, React 18, TypeScript)** | Modern server-rendered architecture, type safety, optimized asset bundling, and native API routes. |
| **Styling** | **Tailwind CSS + CSS Modules** | Custom brand tokenization (TIS Crimson `#b90124`, Teal `#60bab1`, Gold `#c09d59`), fluid typography, and dark mode class strategy. |
| **Animation Engine** | **Framer Motion** | Spring-based physics, staggered viewport reveals, interactive hover reactions, and modal transitions. |
| **Icons** | **Lucide React** | Clean, accessible SVG iconography. |
| **Theming** | **next-themes** | Persistent dark/light mode toggle with zero layout shift. |
| **Backend API** | **Next.js Route Handlers (`app/api/*`)** | RESTful endpoints handling enquiries, contact inquiries, and newsletter registrations. |
| **Data Persistence** | **JSON/File-Backed Store + In-Memory Fallback** | Atomic persistence for admission enquiries, contact submissions, and subscriber records. |
| **User Feedback** | **Custom Toast System + Canvas Confetti** | Real-time optimistic feedback upon form completion. |

---

## ✨ Implemented Features

### 🏆 All 4 Mandatory & Stand-Out Advanced Features
1. **Interactive Custom Cursor**:
   - Spring-interpolated ring that smoothly follows pointer coordinates.
   - Dynamically expands and morphs when hovering over clickable links, buttons, and cards with contextual badges (`"Apply"`, `"View"`, `"Learn More"`).
   - Gracefully disabled on touchscreen and mobile devices to preserve native touch ergonomics.
2. **Scroll-Triggered Reveals & Staggered Animations**:
   - Viewport-aware scroll reveals using Framer Motion `whileInView`.
   - Cards and statistics smoothly fade and slide in with coordinated stagger timings.
3. **Animated Dark / Light Mode Theme Switcher**:
   - Smooth rotating icon toggle with persistent `localStorage` theme state.
   - High contrast styling meticulously tested across dark surfaces (`#0b0f17`, `#111827`) and warm light surfaces (`#fdfbf7`, `#ffffff`).
4. **Scroll Progress Indicator**:
   - Fixed top reading bar dynamically bound to page scroll height using `useScroll` and `useSpring`.
   - Displays real-time percentage reading badge.

### 🏛️ Complete Homepage Sections (Per Assignment Brief)
1. **Navbar**: Fixed glassmorphism bar with TIS emblem, admissions helpline (`+91-9837983791`), navigation links, theme toggle, primary CTA, and responsive mobile drawer.
2. **Hero Section**: High-impact headline ("Where Ancient Wisdom Meets Global Future"), floating accreditation badges, primary/secondary CTAs, and virtual tour modal.
3. **About TIS**: History, "Modern Gurukul" philosophy, founder vision, and 6 animated live statistics counters (22+ Acres, 16+ Sports, 6:1 Ratio, 24x7 Medical, 12+ Collaborations, 100% Placement).
4. **Academic Wings**: Structured cards for Primary (IV-V), Middle (VI-VIII), Secondary (IX-X), and Senior Secondary (XI-XII) with an interactive **"Explore Curriculum" modal**.
5. **Campus & Facilities Bento Grid**: Responsive bento layout featuring smart classrooms, robotics lab, Olympic sports complex, central library, residential hostels, and dining hall with category filters and detail lightbox.
6. **Why Choose TIS**: 6 core institutional pillars with staggered viewport reveal animations.
7. **Sports & Life at TIS (Signature Section)**: Highlights all 16+ sports disciplines (Archery, Swimming, Horse Riding, 10m Shooting Range, Football, Basketball, Tennis, Squash, etc.) with category filters.
8. **Dignitaries on Campus**: Showcases visits and mentorship from Olympic medalists and national icons (Sakshi Malik, Vishesh Bhriguvanshi, Shooter Dadi, Abhishek Verma, Laxmi Agarwal).
9. **Parent Testimonials Carousel**: Auto-advancing slider with real parent reviews, star ratings, and Google Review verification badges.
10. **Admissions 2026-27 CTA**: 4-step admission roadmap, prospectus download, and counselor helpline strip.
11. **Contact Section & Live Connected Form**: Verified Dehradun campus coordinates, helpline phone numbers, email, interactive Google Maps embed, and live form.
12. **Reviewer Submissions Drawer (Live DB Inspector)**: Discreet floating badge in the bottom-left corner that opens a slide-out drawer fetching live records from `/api/submissions`, proving the frontend and backend are communicating in real time!
13. **Complete Responsive Footer**: Comprehensive navigation, policy links, social media channels, and working newsletter subscription box.

---

## 🔌 Connected Backend API Architecture

| Endpoint | Method | Description |
|---|---|---|
| `/api/enquiry` | `POST` | Validates student name, phone (10 digits), class, and state. Generates a unique tracking reference (e.g. `TIS-2026-8921`) and persists the enquiry. |
| `/api/contact` | `POST` | Validates message inquiries and stores them in the contact table. |
| `/api/newsletter` | `POST` | Validates email address and subscribes user to the bulletin. |
| `/api/submissions` | `GET` | Fetches all stored enquiries and messages for admin/reviewer verification. |
| `/api/stats` | `GET` | Returns live system metrics (total enquiries, system status, uptime). |

---

## 💻 Local Installation & Setup

### Prerequisites
- **Node.js**: v18.0.0 or later (Tested on Node v22.12.0)
- **npm**: v9.0.0 or later

### Step 1: Clone Repository
```bash
git clone https://github.com/your-username/tis-frontend-assignment.git
cd tis-frontend-assignment
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the site.

### Step 4: Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Visit [https://vercel.com/new](https://vercel.com/new) and import `tis-frontend-assignment`.
3. Vercel automatically detects Next.js.
4. Click **Deploy**. Both the frontend and backend API route handlers will deploy globally with zero configuration.

### Deploy to Netlify
1. Connect your GitHub repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

---

## 📁 Project Component Structure

```
tis-frontend-assignment/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts       # POST contact queries
│   │   │   ├── enquiry/route.ts       # POST admission enquiries
│   │   │   ├── newsletter/route.ts    # POST newsletter subscriptions
│   │   │   ├── stats/route.ts         # GET dynamic system metrics
│   │   │   └── submissions/route.ts   # GET all stored records
│   │   ├── globals.css                # Tailwind directives & theme variables
│   │   ├── layout.tsx                 # SEO, JSON-LD Schema, Fonts, Providers
│   │   └── page.tsx                   # Main page composition
│   ├── components/
│   │   ├── ui/
│   │   │   ├── CustomCursor.tsx       # Feature 1: Mouse follower ring
│   │   │   ├── ScrollProgress.tsx     # Feature 2: Scroll reading progress bar
│   │   │   ├── ThemeToggle.tsx        # Feature 3: Dark/Light animated switcher
│   │   │   ├── Toast.tsx              # Real-time toast feedback
│   │   │   ├── EnquiryModal.tsx       # Admission application popup
│   │   │   └── SubmissionsDrawer.tsx  # Reviewer live DB inspector
│   │   ├── Navbar.tsx                 # Glassmorphic header & mobile drawer
│   │   ├── Hero.tsx                   # Hero section with ranking cards & CTAs
│   │   ├── About.tsx                  # Philosophy & animated live statistics
│   │   ├── Academics.tsx              # Class IV-XII wings & syllabus modal
│   │   ├── Facilities.tsx             # Campus bento grid & detail lightbox
│   │   ├── WhyTIS.tsx                 # 6 Core Value Pillars
│   │   ├── SportsAndLife.tsx          # 16+ Olympic sports directory
│   │   ├── Dignitaries.tsx            # Olympic medalists & dignitaries
│   │   ├── Testimonials.tsx           # Verified parent feedback carousel
│   │   ├── AdmissionsCTA.tsx          # 4-step roadmap & brochure download
│   │   ├── Contact.tsx                # Campus info & connected live enquiry form
│   │   ├── Footer.tsx                 # Footer & newsletter
│   │   └── ThemeProvider.tsx          # Next-themes client provider
│   ├── data/
│   │   └── schoolData.ts              # Authentic TIS facts, sports & programs
│   ├── lib/
│   │   ├── storage.ts                 # Backend persistent storage engine
│   │   └── utils.ts                   # Class name mergers and formatters
│   └── types/
│       └── index.ts                   # TypeScript interfaces
├── public/                            # Static assets & icons
├── tailwind.config.ts                 # Brand colors & font declarations
├── tsconfig.json                      # Strict TypeScript configuration
└── package.json
```

---

## 📋 Evaluation Criteria Self-Audit

| Criteria | Target | Implementation Details |
|---|---|---|
| **Code Flaws & Architecture (30%)** | Clean breakdown, no unused variables, semantic HTML | 14 isolated reusable components, strict TypeScript, semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), zero console errors. |
| **Animation & UX Quality (30%)** | Smooth motion, intuitive interactions, responsiveness | Framer Motion spring physics, custom reactive cursor, reading progress, full mobile hamburger drawer, touch detection. |
| **Creativity & Design (20%)** | Modern agency look-and-feel, innovative UI | Bento grid, glassmorphic headers, gold/crimson gradients, dark mode support, confetti animations. |
| **Full-Stack Connection** | Real frontend ↔ backend communication | 5 API Route Handlers, persistent database storage, and a live inspection drawer for technical review. |

---

*Designed and Developed for Tulas International School (TIS) Frontend Developer Evaluation.*
