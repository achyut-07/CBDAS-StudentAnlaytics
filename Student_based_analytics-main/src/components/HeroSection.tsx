"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp, Users, Award, ChevronDown } from "lucide-react";

function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function KPICard({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  delay,
  started,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
  started: boolean;
}) {
  const count = useCounter(value, 2000, started);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative glass rounded-2xl p-6 border border-white/10 overflow-hidden group cursor-default`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-end gap-1 mb-1">
          <span className="text-4xl font-black text-white">{count}</span>
          <span className="text-2xl font-bold text-white/80 mb-1">{suffix}</span>
        </div>
        <p className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors">{label}</p>
      </div>
    </motion.div>
  );
}

const kpiData = [
  { icon: Award, value: 100, suffix: "%", label: "Pass Rate", color: "from-emerald-500/20 to-teal-500/20", delay: 0.8 },
  { icon: TrendingUp, value: 70, suffix: "%", label: "Average Marks", color: "from-blue-500/20 to-cyan-500/20", delay: 0.9 },
  { icon: Users, value: 9, suffix: "", label: "Students Analysed", color: "from-violet-500/20 to-purple-500/20", delay: 1.0 },
];

export default function HeroSection() {
  const [kpiStarted, setKpiStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setKpiStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden bg-mesh"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-16 w-16 h-16 rounded-full border border-blue-500/30 hidden xl:block"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-16 w-10 h-10 rounded-full border border-violet-500/30 hidden xl:block"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass border border-emerald-500/30 rounded-full px-4 py-1.5 mb-8 text-sm"
        >
          <div className="relative w-2 h-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-emerald-400 font-semibold">Live Dashboard Active</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">Power BI + Azure SQL</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-white">Student</span>{" "}
          <span className="gradient-text">Performance</span>
          <br />
          <span className="text-white">Analytics</span>{" "}
          <span className="text-slate-400">Dashboard</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-400 mb-4 font-medium"
        >
          Cloud-Based Analytics using{" "}
          <span className="text-blue-400 font-semibold">Azure SQL</span> &{" "}
          <span className="text-yellow-400 font-semibold">Power BI</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-500 mb-12 max-w-2xl mx-auto italic"
        >
          ✨ &quot;Turning Student Data into Actionable Insights&quot;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#dashboard"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            🚀 View Live Dashboard
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#problem"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl glass border border-white/20 text-white font-bold text-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
          >
            📄 View Project Details
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {kpiData.map((kpi) => (
            <KPICard key={kpi.label} {...kpi} started={kpiStarted} />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
