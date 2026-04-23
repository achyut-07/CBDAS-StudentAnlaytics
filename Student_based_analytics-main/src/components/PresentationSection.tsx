"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Database, Cpu, BarChart3, Layout, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Layers,
    title: "Data Collection",
    desc: "Collected student data across 9 students — including marks per subject, attendance percentages, and academic session details. Organized into structured Excel sheets for clean import.",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    bg: "from-blue-500/10 to-transparent",
  },
  {
    step: "02",
    icon: Database,
    title: "Azure SQL Storage",
    desc: "Migrated the dataset to Microsoft Azure SQL Database. Created normalized tables for Students, Subjects, Marks, and Attendance with proper relationships and indexing for query performance.",
    color: "from-cyan-500 to-teal-500",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/20",
    bg: "from-cyan-500/10 to-transparent",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Power BI Connection",
    desc: "Connected Microsoft Power BI Desktop to Azure SQL using DirectQuery mode for live data refresh. Configured the data model with relationships across all tables.",
    color: "from-yellow-500 to-orange-500",
    glow: "shadow-yellow-500/20",
    border: "border-yellow-500/20",
    bg: "from-yellow-500/10 to-transparent",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "DAX KPI Creation",
    desc: "Wrote custom DAX formulas to calculate: Average Marks, Pass Percentage, Fail Count, and Attendance Rate. These power the core KPI tiles on the dashboard.",
    color: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/20",
    bg: "from-violet-500/10 to-transparent",
  },
  {
    step: "05",
    icon: Layout,
    title: "Dashboard Visualization",
    desc: "Designed the Power BI report with bar charts, KPI cards, line graphs for trends, a scatter plot for attendance vs marks, and subject comparison matrix. Published to Power BI Service for web embed.",
    color: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/20",
    bg: "from-emerald-500/10 to-transparent",
  },
];

export default function PresentationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="presentation" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
          <span className="text-violet-400 text-sm font-bold tracking-[0.2em] uppercase">Build Journey</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6"
        >
          🎤 How I{" "}
          <span className="gradient-text">Built This</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-20"
        >
          A step-by-step walkthrough of the complete project development process from data collection to live dashboard.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                className="flex gap-8 items-start"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl ${step.glow} z-10`}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className={`flex-1 glass rounded-2xl p-6 border ${step.border} bg-gradient-to-r ${step.bg} group`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center sm:hidden flex-shrink-0 shadow-lg`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className={`text-xs font-bold tracking-widest bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        STEP {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
