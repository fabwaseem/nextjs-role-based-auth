"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-300 hover:text-white"
    >
      <motion.path
        initial={false}
        animate={isOpen ? { d: "M 3 3 L 21 21" } : { d: "M 3 7 L 21 7" }}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        initial={false}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        d="M 3 12 L 21 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        transition={{ duration: 0.2 }}
      />
      <motion.path
        initial={false}
        animate={isOpen ? { d: "M 3 21 L 21 3" } : { d: "M 3 17 L 21 17" }}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Navbar = () => {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "How to Use", href: "/how-to-use" },
    { name: "Pricing", href: "/pricing" },
    { name: "Help", href: "/help" },
    ...(session?.user?.role === "ADMIN"
      ? [{ name: "Admin", href: "/admin" }]
      : []),
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-lg`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                role-auth
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="ml-4 px-6 py-2.5 bg-accent hover:bg-[#4338CA] rounded-full text-sm font-medium transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <Link
              href="/login"
              className="mr-4 px-6 py-2.5 bg-accent hover:bg-[#4338CA] rounded-full text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            className={`absolute top-full left-0 right-0 lg:hidden overflow-hidden z-50 bg-background/80 backdrop-blur-lg`}
            style={{ transformOrigin: "top" }}
          >
            <div className="py-4 px-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    pathname === item.href
                      ? "text-accent"
                      : "hover:text-accent hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
