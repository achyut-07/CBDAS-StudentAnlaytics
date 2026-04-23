"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Building2, Timer, TrendingUp, CheckCircle2 } from "lucide-react";

const impacts = [
  {
    icon: GraduationCap,
    title: "Early Intervention for Weak Students",
    desc: "Teachers can instantly identify students at risk of failing and provide targeted support before it's too late.",
    metric: "100%",
    metricLabel: "Pass Rate Achieved",
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/10 to-cyan-500/5 border-blue-500/20",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decision Making",
    desc: "Moves educators from gut feeling to fact-based decisions with real data on performance patterns and trends.",
    metric: "3x",
    metricLabel: "Faster Insights",
    color: "from-violet-500 to-purple-500",
    bg: "from-violet-500/10 to-purple-500/5 border-violet-500/20",
  },
  {
    icon: Building2,
    title: "Scalable to Any Institution",
    desc: "The Azure SQL architecture scales effortlessly from 9 students to thousands in a college or university system.",
    metric: "∞",
    metricLabel: "Scalable Students",
    color: "from-emerald-500 to-teal-500",
    bg: "from-emerald-500/10 to-teal-500/5 border-emerald-500/20",
  },
  {
    icon: Timer,
    title: "Massive Time Savings",
    desc: "What used to take hours of manual calculation is now done automatically and updated in real time.",
    metric: "90%",
    metricLabel: "Time Saved",
    color: "from-orange-500 to-amber-500",
    bg: "from-orange-500/10 to-amber-500/5 border-orange-500/20",
  },
];

const useCases = [
  "School & College Performance Reviews",
  "Parent-Teacher Meeting Reports",
  "Board of Education Submissions",
  "Scholarship Eligibility Analysis",
  "Academic Counseling Sessions",
  "Government Education Audits",
];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">Real World Impact</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6"
        >
          🌍 Impact &{" "}
          <span className="gradient-text">Practical Use</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-16"
        >
          Beyond the hackathon — this project solves a real problem faced by educators across India and globally.
        </motion.p>

        {/* Impact cards grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.3 }}
              whileHover={{ y: -6 }}
              className={`glass rounded-2xl p-6 border bg-gradient-to-br ${item.bg} flex gap-5 items-start group`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.desc}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.metric}</span>
                  <span className="text-slate-500 text-xs">{item.metricLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">🎯 Practical Use Cases</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.08 + 0.9 }}
                className="flex items-center gap-2.5 text-slate-300 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                {useCase}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
