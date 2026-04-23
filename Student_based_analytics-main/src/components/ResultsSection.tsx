"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Award, Users, BookOpen } from "lucide-react";

const results = [
  { icon: Award, value: "100%", label: "Pass Rate", sub: "All 9 students passed", color: "from-emerald-500 to-teal-500", glow: "shadow-emerald-500/30" },
  { icon: TrendingUp, value: "70%", label: "Average Score", sub: "Class-wide average marks", color: "from-blue-500 to-cyan-500", glow: "shadow-blue-500/30" },
  { icon: Users, value: "9", label: "Students Tracked", sub: "Comprehensive profiles", color: "from-violet-500 to-purple-500", glow: "shadow-violet-500/30" },
  { icon: BookOpen, value: "High", label: "Attendance Impact", sub: "Strong correlation found", color: "from-orange-500 to-amber-500", glow: "shadow-orange-500/30" },
];

const insights = [
  { label: "Students with 80%+ attendance scored above class average", pct: 88 },
  { label: "Math had the lowest average — recommended for extra sessions", pct: 63 },
  { label: "Science showed the highest subject average scores overall", pct: 78 },
  { label: "No students failed after structured performance tracking", pct: 100 },
];

function ProgressBar({ pct, delay, inView }: { pct: number; delay: number; inView: boolean }) {
  return (
    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
      />
    </div>
  );
}

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-violet-600/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase">Project Results</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6"
        >
          📈 Results &{" "}
          <span className="gradient-text">Insights</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-16"
        >
          Measured outcomes from the Student Performance Analytics Dashboard — real data, real impact.
        </motion.p>

        {/* Result KPI cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.3 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass rounded-2xl p-6 border border-white/10 text-center group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 rounded-2xl`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center mx-auto mb-4 shadow-xl ${r.glow} group-hover:scale-110 transition-transform`}>
                <r.icon className="w-7 h-7 text-white" />
              </div>
              <div className={`text-4xl font-black mb-1 bg-gradient-to-br ${r.color} bg-clip-text text-transparent`}>
                {r.value}
              </div>
              <div className="text-white font-semibold mb-1">{r.label}</div>
              <div className="text-slate-500 text-xs">{r.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Insights with progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-8">📊 Key Dashboard Insights</h3>
          <div className="space-y-6">
            {insights.map((item, i) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 text-sm flex-1 pr-4">{item.label}</span>
                  <span className="text-blue-400 font-bold text-sm flex-shrink-0">{item.pct}%</span>
                </div>
                <ProgressBar pct={item.pct} delay={i * 0.15 + 0.9} inView={isInView} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
