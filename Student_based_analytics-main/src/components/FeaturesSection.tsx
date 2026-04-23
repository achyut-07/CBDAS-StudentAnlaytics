"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, BarChart2, GitCompare, BookOpen, Bell, Download } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Student Performance Tracking",
    desc: "Monitor each student's academic journey with individual performance records, grade history, and subject-wise scores in one unified view.",
    badge: "Core Feature",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    gradient: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20",
    iconGrad: "from-blue-500 to-cyan-500",
  },
  {
    icon: GitCompare,
    title: "Subject-Wise Comparison",
    desc: "Compare performance across multiple subjects to identify weak areas. Interactive bar charts highlight where gaps exist for individual or class-wide improvement.",
    badge: "Analytics",
    badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    gradient: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
    iconGrad: "from-violet-500 to-purple-500",
  },
  {
    icon: BarChart2,
    title: "Attendance vs Marks Analysis",
    desc: "Uncover the correlation between attendance frequency and academic performance — a key insight that helps educators intervene early.",
    badge: "Correlation",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    gradient: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20",
    iconGrad: "from-emerald-500 to-teal-500",
  },
  {
    icon: BookOpen,
    title: "KPI Dashboard",
    desc: "At-a-glance KPIs: Class Average, Pass Rate, Fail Count, and Attendance Score — refreshed automatically from Azure SQL data.",
    badge: "KPIs",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    gradient: "from-yellow-500/10 to-amber-500/5",
    border: "border-yellow-500/20",
    iconGrad: "from-yellow-500 to-amber-500",
  },
  {
    icon: Bell,
    title: "Early Warning System",
    desc: "Automatically flags students with marks below threshold or poor attendance, enabling proactive support before results worsen.",
    badge: "Smart Alert",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    gradient: "from-red-500/10 to-rose-500/5",
    border: "border-red-500/20",
    iconGrad: "from-red-500 to-rose-500",
  },
  {
    icon: Download,
    title: "Export & Reports",
    desc: "Export complete analytics reports in PDF or Excel format for parent meetings, board reviews, or record-keeping.",
    badge: "Reports",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    gradient: "from-cyan-500/10 to-sky-500/5",
    border: "border-cyan-500/20",
    iconGrad: "from-cyan-500 to-sky-500",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050d1a]/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">Working Model</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6"
        >
          🖥️ Core{" "}
          <span className="gradient-text">Functionality</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-16"
        >
          Every feature was designed to solve a real pain point for educators managing student performance data.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative glass rounded-2xl p-7 border ${f.border} bg-gradient-to-br ${f.gradient} overflow-hidden group cursor-default`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.03] rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.iconGrad} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${f.badgeColor}`}>
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
