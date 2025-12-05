import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  title,
  description,
  breadcrumbLabel = "",
}) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b183b] to-[#091229] text-white px-6 py-24 overflow-hidden"
      style={{ marginBottom: "-80px" }}
    >
      {/* Soft Background Shape */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-700/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center space-y-8"
      >
        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-wide drop-shadow-xl mt-10">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-gray-200 text-sm backdrop-blur-md border border-white/10 shadow-lg">
          <span className="hover:text-white transition cursor-pointer">
            Home
          </span>
          <ChevronRight size={16} className="opacity-70" />
          <span className="font-medium text-white">
            {breadcrumbLabel || title}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl space-y-4">
          <p className="text-gray-300 leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </motion.div>
    </section>
  );
}