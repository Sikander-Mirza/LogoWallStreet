import React from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck2,
  Users,
  MessageSquare,
  Rocket,
} from "lucide-react";

// default steps (used if no steps prop is passed)
const defaultSteps = [
  {
    id: 1,
    title: "Make an Appointment",
    description:
      "Book a quick discovery call so we can understand your goals, timelines, and budget.",
    icon: CalendarCheck2,
  },
  {
    id: 2,
    title: "Meet Our Team",
    description:
      "Connect with our strategists and designers to align on the right creative and technical direction.",
    icon: Users,
  },
  {
    id: 3,
    title: "Get Consultation",
    description:
      "Receive a clear, tailored game plan that maps out deliverables, phases, and investment.",
    icon: MessageSquare,
  },
  {
    id: 4,
    title: "Start a New Project",
    description:
      "We kick off, collaborate with you in tight feedback loops, and launch with confidence.",
    icon: Rocket,
  },
];

export default function WorkingProcess({
  title = "Our Working Process",
  subtitle = "From first call to launch, our process is built to keep you informed, involved, and confident in every decision we make together.",
  sectionId,
  steps = defaultSteps,
}) {
  return (
    <section
      id={sectionId}
      className="relative overflow-hidden bg-[#f5f8ff] py-16 md:py-20"
    >
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-14 left-10 h-56 w-56 rounded-full bg-orange-300/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 lg:px-8">
        {/* heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[2px] w-10 bg-orange-500" />
            <span className="text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase">
              How we work
            </span>
            <span className="h-[2px] w-10 bg-orange-200" />
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-[#111827]"
            style={{ fontFamily: "var(--font-Playfair)" }}
          >
            {title}
          </h2>
          <p
            className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            {subtitle}
          </p>
        </div>

        {/* DESKTOP: center line + alternating cards */}
        <div className="hidden md:block">
          <div className="relative">
            {/* vertical gradient line */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex justify-center">
              <div className="w-[3px] rounded-full bg-gradient-to-b from-orange-500 via-pink-500 to-indigo-500" />
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <ZigZagRow key={step.id ?? index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE: stacked cards with side line */}
        <div className="md:hidden">
          <div className="relative border-l border-dashed border-slate-300 ml-6 space-y-6">
            {steps.map((step, index) => (
              <MobileStep key={step.id ?? index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Desktop row: card + spine + connector line */
function ZigZagRow({ step, index }) {
  const isLeft = index % 2 === 0;
  const number = (index + 1).toString().padStart(2, "0");
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-8"
    >
      {/* LEFT COLUMN */}
      <div
        className={
          isLeft
            ? "flex justify-end"
            : "flex justify-end opacity-0 pointer-events-none"
        }
      >
        {isLeft && (
          <ProcessCard
            number={number}
            Icon={Icon}
            title={step.title}
            description={step.description}
            align="right"
          />
        )}
      </div>

      {/* CENTER SPINE + connector */}
      <div className="relative flex flex-col items-center">
        {/* spine dot glow */}
        <div className="relative">
          <div className="absolute h-10 w-5 rounded-full bg-orange-300/50 blur-xl" />
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow">
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-orange-500 to-pink-500" />
          </div>
        </div>

        {/* connector line towards card */}
        <div
          className={[
            "absolute top-4 h-[2px] w-8 bg-gradient-to-r from-orange-400 to-transparent",
            isLeft ? "right-8" : "left-8 rotate-180",
          ].join(" ")}
        />
      </div>

      {/* RIGHT COLUMN */}
      <div
        className={
          !isLeft
            ? "flex justify-start"
            : "flex justify-start opacity-0 pointer-events-none"
        }
      >
        {!isLeft && (
          <ProcessCard
            number={number}
            Icon={Icon}
            title={step.title}
            description={step.description}
            align="left"
          />
        )}
      </div>
    </motion.div>
  );
}

/** Card with number + icon, then heading & text */
function ProcessCard({ number, Icon, title, description }) {
  return (
    <div
      className={[
        "max-w-md rounded-3xl bg-white px-6 py-5",
        "shadow-[0_18px_50px_rgba(15,23,42,0.12)] border border-slate-100",
        "flex flex-col gap-3",
      ].join(" ")}
    >
      {/* top row: number + icon */}
      <div className="flex items-center gap-3 items-start text-left">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white text-sm font-semibold">
          {number}
        </div>
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>

      {/* heading + text */}
      <div className="items-start text-left">
        <h3
          className="text-lg font-semibold text-[#111827]"
          style={{ fontFamily: "var(--font-Playfair)" }}
        >
          {title}
        </h3>
        <p
          className="mt-1 text-sm text-slate-600"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/** Mobile stacked steps with side line */
function MobileStep({ step, index }) {
  const number = (index + 1).toString().padStart(2, "0");
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative pl-5"
    >
      {/* spine dot */}
      <span className="absolute -left-[11px] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-slate-300">
        <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-500 to-pink-500" />
      </span>

      <div className="rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white text-sm font-semibold">
            {number}
          </div>
          {Icon && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <Icon className="h-4 w-4" />
            </div>
          )}
        </div>
        <h3
          className="text-sm font-semibold text-slate-900"
          style={{ fontFamily: "var(--font-Playfair)" }}
        >
          {step.title}
        </h3>
        <p
          className="mt-1 text-[13px] text-slate-600"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}