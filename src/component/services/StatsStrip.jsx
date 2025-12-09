import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  MonitorSmartphone,
  Award,
  UserCheck,
} from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    label: "Trusted Clients",
    value: 1485,
    suffix: "+",
    icon: Users,
  },
  {
    id: 2,
    label: "Projects Completed",
    value: 3452,
    suffix: "+",
    icon: MonitorSmartphone,
  },
  {
    id: 3,
    label: "Years of Experience",
    value: 25,
    suffix: "+",
    icon: Award,
  },
  {
    id: 4,
    label: "Professional Team",
    value: 75,
    suffix: "+",
    icon: UserCheck,
  },
];

export default function StatsStrip() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#021041] via-[#041b6a] to-[#021041] border border-white/10 shadow-[0_26px_80px_rgba(15,23,42,0.55)]"
        >
          {/* background decorations */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-indigo-400/20" />
            <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full border border-orange-400/25" />
            <div className="absolute bottom-6 right-10 grid grid-cols-6 gap-1 text-indigo-500/40 text-[6px]">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i}>•</span>
              ))}
            </div>
          </div>

          {/* content */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <StatItem key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat }) {
  const Icon = stat.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative group px-8 py-8 flex flex-col items-center justify-center text-center"
    >
      {/* glow on hover */}
      <div className="pointer-events-none absolute inset-x-6 bottom-4 top-4 rounded-3xl bg-gradient-to-b from-orange-500/0 via-orange-500/0 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

      {/* icon */}
      <div className="relative mb-3">
        <div className="absolute inset-0 rounded-2xl bg-orange-500/25 blur-md opacity-60" />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#02133f] border border-orange-400/40 text-orange-300">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {/* value with CountUp */}
      <div className="relative">
        <p
          className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          <CountUp
            start={0}
            end={stat.value}
            duration={2}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
          <span className="text-orange-400 text-2xl align-top ml-1">
            {stat.suffix}
          </span>
        </p>
        <p
          className="mt-1 text-sm text-slate-200/80"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}