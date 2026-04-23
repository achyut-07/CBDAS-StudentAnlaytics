"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Innovation", href: "#innovation" },
  { label: "Architecture", href: "#architecture" },
  { label: "Features", href: "#features" },
  { label: "Impact", href: "#impact" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/10 dark:border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-base bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent hidden sm:block">
              StudentAnalytics
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                className="px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right side: toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <motion.a
              href="#dashboard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Live Dashboard
            </motion.a>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-xl glass text-slate-500 dark:text-slate-300"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 glass-strong flex flex-col pt-24 px-8 gap-4 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-xl font-semibold text-slate-700 dark:text-slate-200 border-b border-black/5 dark:border-white/5 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
