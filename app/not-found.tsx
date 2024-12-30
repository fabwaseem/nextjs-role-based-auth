"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GridBackground from "@/components/landing/GridBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <GridBackground />
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20 -z-10" />

      <div className="container px-4 mx-auto text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="relative"
        >
          <span className="text-[180px] md:text-[250px] font-bold text-white opacity-5 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              404
            </span>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 space-y-6"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Page Not Found
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 space-x-4"
        >
          <Link
            href="/"
            className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-colors inline-flex items-center"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
          >
            Go Back
          </button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-blue-500/50 to-transparent" />
          <div className="absolute right-0 bottom-1/4 w-1 h-32 bg-gradient-to-t from-purple-500/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}
