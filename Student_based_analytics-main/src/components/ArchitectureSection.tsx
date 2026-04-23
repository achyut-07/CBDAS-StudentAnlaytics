"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, ChevronRight, Cpu, Monitor, Code2, Hash } from "lucide-react";

const archSteps = [
  {
    icon: Database,
    label: "Student Data",
    desc: "Raw marks, attendance, subjects",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/30",
  },
  {
    icon: Database,
    label: "Azure SQL",
    desc: "Structured cloud DB",
    color: "from-cyan-500 to-teal-500",
    glow: "shadow-cyan-500/30",
  },
  {
    icon: Cpu,
    label: "Power BI",
    desc: "DAX processing engine",
    color: "from-yellow-500 to-orange-500",
    glow: "shadow-yellow-500/30",
  },
  {
    icon: Monitor,
    label: "Dashboard",
    desc: "Live KPI visualization",
    color: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/30",
  },
];

const techItems = [
  { icon: Database, label: "Azure SQL", detail: "Structured cloud storage for all student records", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: Cpu, label: "Power BI", detail: "Real-time data visualization & interactive reporting", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  { icon: Code2, label: "DAX Language", detail: "Custom formula engine for KPI calculations", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
  { icon: Hash, label: "KPIs Built", detail: "Avg Marks, Pass %, Fail Count, Attendance Rate", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
];

export default function ArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="architecture" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute inset-0 bg-[#0a0f1e]/60 pointer-events-none" />

      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase">System Architecture</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6"
        >
          ⚙️ Technical{" "}
          <span className="gradient-text">Implementation</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-16"
        >
          A modern cloud-native pipeline from raw student records to interactive KPI dashboards.
        </motion.p>

        {/* Architecture pipeline */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 mb-16">
          {archSteps.map((step, i) => (
            <div key={step.label} className="flex flex-col lg:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                className="flex flex-col items-center text-center w-44"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl ${step.glow} mb-4`}
                >
                  <step.icon className="w-9 h-9 text-white" />
                </motion.div>
                <h4 className="font-bold text-white text-base mb-1">{step.label}</h4>
                <p className="text-slate-500 text-xs">{step.desc}</p>
              </motion.div>

              {i < archSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.5 }}
                  className="flex items-center justify-center mx-4 my-4 lg:my-0"
                >
                  <div className="flex items-center gap-1">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-slate-600 to-slate-500 hidden lg:block" />
                    <ChevronRight className="w-6 h-6 text-slate-500 rotate-90 lg:rotate-0" />
                    <div className="h-0.5 w-12 bg-gradient-to-r from-slate-500 to-slate-600 hidden lg:block" />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Tech details grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.7 }}
              whileHover={{ y: -5 }}
              className={`glass rounded-xl p-5 border ${item.bg} group`}
            >
              <item.icon className={`w-6 h-6 ${item.color} mb-3 group-hover:scale-110 transition-transform`} />
              <h4 className="font-bold text-white text-sm mb-1.5">{item.label}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
