"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Academics } from "@/components/Academics";
import { Facilities } from "@/components/Facilities";
import { WhyTIS } from "@/components/WhyTIS";
import { SportsAndLife } from "@/components/SportsAndLife";
import { Dignitaries } from "@/components/Dignitaries";
import { Testimonials } from "@/components/Testimonials";
import { AdmissionsCTA } from "@/components/AdmissionsCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { EnquiryModal } from "@/components/ui/EnquiryModal";
import { SubmissionsDrawer } from "@/components/ui/SubmissionsDrawer";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string>("Class IX");

  const handleOpenEnquiry = (grade?: string) => {
    if (grade) setSelectedGrade(grade);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfbf7] dark:bg-gray-950 transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Hero Section with CTAs */}
      <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* About Section with philosophy & statistics */}
      <About onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Academics Offerings (Classes IV to XII) */}
      <Academics onOpenEnquiry={(grade) => handleOpenEnquiry(grade)} />

      {/* Campus & Facilities Bento Grid */}
      <Facilities />

      {/* Why Choose TIS (Core Pillars) */}
      <WhyTIS />

      {/* Sports & Life at TIS (16+ Olympic Disciplines) */}
      <SportsAndLife />

      {/* Olympic Mentors & Dignitaries on Campus */}
      <Dignitaries />

      {/* Real Parent & Alumni Testimonials */}
      <Testimonials />

      {/* Admissions CTA Section */}
      <AdmissionsCTA onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Contact Section + Live Backend Connected Form */}
      <Contact />

      {/* Complete Responsive Footer */}
      <Footer />

      {/* Admission Enquiry Modal (Popup triggered anywhere) */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        defaultGrade={selectedGrade}
      />

      {/* Submissions & Backend Inspector Drawer (Live verification tool for evaluator) */}
      <SubmissionsDrawer />
    </main>
  );
}
