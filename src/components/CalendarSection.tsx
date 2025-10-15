"use client";

import { motion } from "framer-motion";

export default function CalendarSection() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 overflow-hidden">
      {/* Glowing curved line (desktop only) */}
      <svg
        className="absolute bottom-[40%] left-0 w-full hidden md:block"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 Q600,50 1200,200"
          stroke="#e1a8ff"
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
          className="drop-shadow-[0_0_20px_#e1a8ff]"
        />
      </svg>

      {/* Cards container */}
      <div
        className="absolute md:bottom-[50%] md:w-[80%] max-w-6xl w-full z-10 
                   flex flex-col md:flex-row items-center 
                   justify-between gap-8 px-6 md:px-0"
      >
        <Card title="Date :" text="20th OCT 2025" delay={0.2} />
        <Card title="Time:" text={"10:00 am\nto\n6:00 pm"} delay={0.4} />
        <Card title="Venue:" text="Conference Hall" delay={0.6} />
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  text: string;
  delay?: number;
}

function Card({ title, text, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center text-center
                 rounded-3xl px-8 py-8 sm:px-10 sm:py-10 w-64 sm:w-72
                 backdrop-blur-lg bg-white/5 border border-white/20
                 shadow-[0_0_25px_rgba(225,168,255,0.2)]
                 hover:shadow-[0_0_35px_rgba(225,168,255,0.4)]
                 transition-all duration-500"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
        {title}
      </h2>
      <p className="text-base sm:text-lg text-gray-200 whitespace-pre-line leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
