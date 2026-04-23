"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Maximize2, RefreshCw } from "lucide-react";

const POWER_BI_SRC =
  "https://app.powerbi.com/view?r=eyJrIjoiYWQzZTg5OTktZTdkMS00YTQ1LWE5NDYtYjY1MzQyZmE0MWJlIiwidCI6IjgwOGNjODNlLWE1NDYtNDdlNy1hMDNmLTczYTFlYmJhMjRmMyIsImMiOjEwfQ%3D%3D";

export default function DashboardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRefresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = POWER_BI_SRC;
    }
  };

  return (
    <section id="dashboard" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      {/* Bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500" />
          <span className="text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase">Live Embed</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-4"
        >
          📊 Live Power BI{" "}
          <span className="gradient-text">Dashboard</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-12"
        >
          Interact with the live dashboard directly below — all data is powered by Azure SQL in real time.
        </motion.p>

        {/* Dashboard frame */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between bg-[#0d1528]/90 backdrop-blur-sm px-6 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-slate-400 text-xs font-medium ml-2">Student Performance Analytics — Power BI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold">Live</span>
              </div>
              <button
                onClick={handleRefresh}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                title="Refresh Dashboard"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* iframe */}
          <div className="relative bg-[#050a18]" style={{ paddingTop: "56.25%" }}>
            <iframe
              ref={iframeRef}
              title="Student based analytics"
              src={POWER_BI_SRC}
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </motion.div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <motion.a
            href={POWER_BI_SRC}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234,179,8,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 justify-center"
          >
            <Maximize2 className="w-5 h-5" />
            Open Full Dashboard
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
