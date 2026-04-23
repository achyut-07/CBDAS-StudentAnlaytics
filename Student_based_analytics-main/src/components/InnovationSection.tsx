"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Zap, Target, Activity, Sparkles, LineChart } from "lucide-react";

const innovations = [
  {
    icon: Cloud,
    title: "Azure SQL Cloud Storage",
    desc: "Structured, scalable cloud database ensuring data reliability, security, and 24/7 accessibility from anywhere.",
    tag: "Cloud-Native",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    gradient: "from-blue-600/20 to-cyan-600/10 border-blue-500/20",
    iconGrad: "from-blue-500 to-cyan-500",
  },
  {
    icon: Activity,
    title: "Real-Time Power BI",
    desc: "Dynamic dashboards that update in real time, eliminating the lag of manual spreadsheet analysis.",
    tag: "Real-Time",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    gradient: "from-emerald-600/20 to-teal-600/10 border-emerald-500/20",
    iconGrad: "from-emerald-500 to-teal-500",
  },
  {
    icon: Target,
    title: "Smart KPI Engine",
    desc: "DAX-powered custom KPIs for pass rates, average marks, and attendance correlation — all calculated automatically.",
    tag: "DAX KPIs",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    gradient: "from-violet-600/20 to-purple-600/10 border-violet-500/20",
    iconGrad: "from-violet-500 to-purple-500",
  },
  {
    icon: LineChart,
    title: "Subject Trend Detection",
    desc: "Identifies performance trends across subjects over time, surfacing at-risk students before they fall behind.",
    tag: "ML Insights",
    tagColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    gradient: "from-pink-600/20 to-rose-600/10 border-pink-500/20",
    iconGrad: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Instant Visualization",
    desc: "Complex data transformed into intuitive charts, graphs, and heatmaps for at-a-glance understanding.",
    tag: "Interactive",
    tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    gradient: "from-yellow-600/20 to-amber-600/10 border-yellow-500/20",
    iconGrad: "from-yellow-500 to-amber-500",
  },
  {
    icon: Sparkles,
    title: "Educator-First Design",
    desc: "Built with teachers in mind — simple, clean UI that requires no technical expertise to interpret.",
    tag: "UX Focus",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    gradient: "from-cyan-600/20 to-sky-600/10 border-cyan-500/20",
    iconGrad: "from-cyan-500 to-sky-500",
  },
];

export default function InnovationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="innovation" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
          <span className="text-violet-400 text-sm font-bold tracking-[0.2em] uppercase">What Makes It Unique</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6"
        >
          💡 Innovation &{" "}
          <span className="gradient-text">Creativity</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-16"
        >
          A first-of-its-kind solution that combines enterprise-grade cloud infrastructure
          with education-focused analytics to create something truly impactful.
        </motion.p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {innovations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i + 0.3 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`relative glass rounded-2xl p-6 border bg-gradient-to-br ${item.gradient} overflow-hidden group`}
            >
              {/* Shimmer hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                {/* Tag */}
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-4 ${item.tagColor}`}>
                  {item.tag}
                </span>

                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.iconGrad} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
