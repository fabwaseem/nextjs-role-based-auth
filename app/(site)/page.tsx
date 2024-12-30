"use client";
import HeroSection from "@/components/landing/HeroSection";
import { motion } from "framer-motion";
import Link from "next/link";

function LandingPage() {
  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <HeroSection />
    </main>
  );
}

export default LandingPage;
