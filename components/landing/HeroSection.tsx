"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GridBackground from "./GridBackground";
import { LuMail } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Content Section with Grid Background */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Grid Background */}
        <div className="absolute inset-0 -z-10">
          <GridBackground />
        </div>

        {/* Blue Gradient Light Effect */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20 -z-10" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20 -z-10" />

        {/* Modern Stack Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 mb-8"
        >
          <div className="h-px w-8 bg-blue-500" />
          <span className="text-blue-500 font-medium">
            Next.js + TypeScript
          </span>
          <div className="h-px w-8 bg-blue-500" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight"
        >
          Role-Based Auth Template
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            for Modern Web Apps
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Secure authentication, role-based access control, and modern UI
          components. Start building your next project with our production-ready
          template.
        </motion.p>

        {/* Email Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuMail className="text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Your Email Address"
              className="block w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            />
          </div>
          <button className="w-full sm:w-auto px-8 py-3 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-lg font-medium transition-colors">
            Get Started Free
          </button>
        </motion.div>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-8 mb-16"
        >
          {[
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS",
            "Role-Based Access",
            "JWT Auth",
            "Modern UI",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-white/5 rounded-full text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <Image
            src="https://framerusercontent.com/images/SDGdXNGfNOqKZyGuibtu3qIdGkw.svg"
            alt="Dashboard Preview"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
