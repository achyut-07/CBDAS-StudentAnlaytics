"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, GitBranch, Server, ChevronRight } from "lucide-react";

const skills = [
  { label: "Java & DSA", icon: Code2, color: "from-orange-500 to-amber-500", level: 90 },
  { label: "Full Stack Development", icon: Globe, color: "from-blue-500 to-cyan-500", level: 85 },
  { label: "Data Analytics", icon: Database, color: "from-violet-500 to-purple-500", level: 88 },
  { label: "Azure Cloud", icon: Server, color: "from-sky-500 to-blue-500", level: 75 },
  { label: "Power BI & DAX", icon: GitBranch, color: "from-yellow-500 to-orange-500", level: 82 },
  { label: "SQL & Databases", icon: Database, color: "from-emerald-500 to-teal-500", level: 86 },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Java", "Spring Boot",
  "Azure SQL", "Power BI", "DAX", "MySQL", "HTML/CSS", "Node.js", "Git",
];

function SkillBar({ level, color, delay, inView }: { level: number; color: string; delay: number; inView: boolean }) {
  return (
    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
      />
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase">Developer</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-16"
        >
          👨‍💻 About the{" "}
          <span className="gradient-text">Developer</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Profile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-white/10"
          >
            {/* Avatar */}
            <div className="flex items-center gap-5 mb-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 flex items-center justify-center text-4xl font-black text-white shadow-xl shadow-blue-500/30 flex-shrink-0"
              >
                SK
              </motion.div>
              <div>
                <h3 className="text-2xl font-black text-white">Sai Krishna</h3>
                <p className="text-blue-400 font-semibold">B.Tech CSE Student</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-slate-400 text-sm">Open to opportunities</span>
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Passionate Computer Science student with a strong foundation in Full Stack Development, 
              Data Analytics, and Cloud Technologies. Built this project to demonstrate how modern 
              cloud tools can transform education through data-driven thinking.
            </p>

            {/* Key highlights */}
            {[
              "Currently pursuing B.Tech in Computer Science Engineering",
              "Strong background in Java and Data Structures & Algorithms",
              "Experienced with cloud platforms including Microsoft Azure",
              "Skilled in Full Stack development and business analytics",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.5 }}
                className="flex items-start gap-2.5 mb-2.5"
              >
                <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </motion.div>
            ))}

            {/* Tech tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.04 + 0.8 }}
                  whileHover={{ scale: 1.08 }}
                  className="text-xs px-2.5 py-1 rounded-lg glass border border-white/10 text-slate-300 font-medium cursor-default hover:border-blue-500/40 hover:text-blue-400 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <h3 className="text-lg font-bold text-white mb-6">⚡ Technical Skills</h3>
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.4 }}
                className="glass rounded-xl p-4 border border-white/8 group hover:border-white/15 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <skill.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-200 font-semibold text-sm">{skill.label}</span>
                  </div>
                  <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>
                <SkillBar level={skill.level} color={skill.color} delay={i * 0.1 + 0.6} inView={isInView} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
