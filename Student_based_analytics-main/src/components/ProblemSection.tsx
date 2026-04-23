"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Database, Clock, BarChart } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Data Overload",
    desc: "Educational institutions generate massive volumes of marks, attendance and performance data daily with no structured system to process it.",
    color: "from-red-500/20 to-orange-500/20 border-red-500/20",
    iconBg: "from-red-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "Manual Analysis",
    desc: "Teachers spend hours manually calculating averages, pass rates, and subject comparisons — a slow and error-prone process.",
    color: "from-orange-500/20 to-yellow-500/20 border-orange-500/20",
    iconBg: "from-orange-500 to-yellow-500",
  },
  {
    icon: BarChart,
    title: "No Trend Insights",
    desc: "Without analytics, critical patterns like a student's declining performance or attendance correlation go completely unnoticed.",
    color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/20",
    iconBg: "from-yellow-500 to-amber-500",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500" />
          <span className="text-red-400 text-sm font-bold tracking-[0.2em] uppercase">Problem Statement</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6"
        >
          🧠 Problem{" "}
          <span className="gradient-text-warm">Understanding</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-16"
        >
          Educational institutions are sitting on a goldmine of data, yet most lack the tools
          to make sense of it in real time.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -8 }}
              className={`glass rounded-2xl p-6 border bg-gradient-to-br ${item.color} relative group overflow-hidden`}
            >
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center mb-5 shadow-lg`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlighted problem statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative rounded-2xl p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-2xl" />
          <div className="absolute inset-0 border border-red-500/30 rounded-2xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-xl shadow-red-500/30">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-red-400 tracking-widest uppercase mb-2">Core Problem</p>
              <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Lack of <span className="text-orange-400">data-driven decision making</span> in education systems
                leads to missed opportunities for early intervention and student support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
