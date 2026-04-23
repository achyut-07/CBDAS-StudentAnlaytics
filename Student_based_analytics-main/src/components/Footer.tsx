"use client";

import { motion } from "framer-motion";
import { BarChart3, ExternalLink, Heart } from "lucide-react";



const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Innovation", href: "#innovation" },
  { label: "Architecture", href: "#architecture" },
  { label: "Features", href: "#features" },
  { label: "Impact", href: "#impact" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Results", href: "#results" },

];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6 border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-base gradient-text">StudentAnalytics</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-xs">
              A cloud-based student performance analytics platform built with Azure SQL and Power BI.
              Turning educational data into actionable insights.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">Sections</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 hover:text-blue-400 text-sm transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">Tech Stack</h4>
            <div className="space-y-2.5">
              {[
                { label: "Next.js App Router", color: "text-blue-400" },
                { label: "Microsoft Azure SQL", color: "text-cyan-400" },
                { label: "Power BI + DAX", color: "text-yellow-400" },
                { label: "Framer Motion", color: "text-violet-400" },
                { label: "Tailwind CSS", color: "text-teal-400" },
              ].map((tech) => (
                <div key={tech.label} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  <span className={`text-sm ${tech.color} font-medium`}>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live dashboard CTA */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative glass rounded-2xl p-6 border border-white/10 mb-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-blue-600/10 pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">🚀 Try the Live Dashboard</h3>
              <p className="text-slate-400 text-sm">Interact with the actual Power BI report powered by Azure SQL</p>
            </div>
            <motion.a
              href="#dashboard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-sm flex-shrink-0 shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Open Dashboard
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Student Performance Analytics Dashboard.
          </p>

        </div>
      </div>
    </footer>
  );
}
