import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Globe2,
  User,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 text-slate-900 py-16 md:py-20">
      {/* soft background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-10 h-64 w-64 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 lg:px-8">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-10 bg-orange-500" />
              <span className="text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase">
                Contact us
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight text-slate-900"
              style={{ fontFamily: "var(--font-Playfair)" }}
            >
              Let’s Talk About
              <span className="text-orange-500"> Your Project</span>
            </h2>
            <p
              className="mt-3 text-sm md:text-base text-slate-600 max-w-xl"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              Share a few details and we’ll get back with ideas, pricing, and a
              clear next step – usually within one business day.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end text-xs text-slate-500">
            <span>Average response time</span>
            <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-slate-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Under 24 hours</span>
            </span>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.45fr)] items-stretch">
          {/* LEFT – gradient info card on white */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-400 via-red-400 to-sky-500 p-[1px] shadow-[0_22px_55px_rgba(15,23,42,0.18)]"
          >
            <div className="relative h-full w-full rounded-[1.4rem] bg-white px-6 py-7 sm:px-8 sm:py-9">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-orange-200/60" />

              <h3
                className="text-xl sm:text-2xl font-semibold mb-2 text-slate-900"
                style={{ fontFamily: "var(--font-Playfair)" }}
              >
                Get more information
              </h3>
              <p
                className="text-sm text-slate-600 mb-8"
                style={{ fontFamily: "var(--font-Poppins)" }}
              >
                Prefer talking to a human? Call us or send a message – we’ll
                help you choose the right package for your brand.
              </p>

              <div className="space-y-6">
                <InfoRow
                  icon={<MapPin className="h-5 w-5" />}
                  title="Visit our office"
                  description="1309 Coffeen Avenue, Sheridan, WY, US 82801"
                />
                <InfoRow
                  icon={<Mail className="h-5 w-5" />}
                  title="Write us an email"
                  description="info@thelogowallstreet.com"
                  href="mailto:info@thelogowallstreet.com"
                />
                <InfoRow
                  icon={<Phone className="h-5 w-5" />}
                  title="Call our team"
                  description="(307) 218-3240"
                  href="tel:+13072183240"
                />
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-orange-500 font-semibold">
                    Stay connected
                  </p>
                  <p
                    className="text-[13px] text-slate-600 mt-1"
                    style={{ fontFamily: "var(--font-Poppins)" }}
                  >
                    Follow us for design tips, client wins & behind‑the‑scenes.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <SocialIcon
                    label="Facebook"
                    icon={<Facebook className="h-4 w-4" />}
                  />
                  <SocialIcon
                    label="Instagram"
                    icon={<Instagram className="h-4 w-4" />}
                  />
                  <SocialIcon
                    label="LinkedIn"
                    icon={<Linkedin className="h-4 w-4" />}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – elevated white form card */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.15)]"
          >
            <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-red-400 to-sky-500 rounded-t-3xl" />
            <div className="px-5 py-6 sm:px-7 sm:py-7">
              <FormHeader />
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* LEFT SIDE HELPERS */

function InfoRow({ icon, title, description, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute inset-0 rounded-[1.75rem] bg-orange-100 blur-[1px]" />
        <div className="relative h-12 w-12 rounded-[1.75rem] bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/40">
          {icon}
        </div>
      </div>
      <div>
        <p
          className="text-sm font-semibold text-slate-900"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          {title}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-1 block text-[13px] text-slate-600 hover:text-orange-500 transition-colors"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            {description}
          </a>
        ) : (
          <p
            className="mt-1 text-[13px] text-slate-600"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function SocialIcon({ icon, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-orange-500 border border-orange-100 shadow-sm hover:bg-orange-500 hover:text-white transition-colors"
    >
      {icon}
    </button>
  );
}

/* RIGHT SIDE */

function FormHeader() {
  return (
    <div className="mb-5">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">
        Project inquiry
      </p>
      <h3
        className="mt-1 text-lg font-semibold text-slate-900"
        style={{ fontFamily: "var(--font-Playfair)" }}
      >
        Tell us about your project
      </h3>
      <p
        className="mt-1.5 text-[13px] text-slate-600"
        style={{ fontFamily: "var(--font-Poppins)" }}
      >
        A few quick details help us route your request to the right person.
      </p>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4">
      {/* Row 1 */}
      <div className="grid gap-4 md:grid-cols-2">
        <InputWithIcon
          icon={<User className="h-4 w-4" />}
          label="Name *"
          id="name"
          type="text"
          required
        />
        <InputWithIcon
          icon={<Mail className="h-4 w-4" />}
          label="Email *"
          id="email"
          type="email"
          required
        />
      </div>

      {/* Row 2 */}
      <div className="grid gap-4 md:grid-cols-2">
        <InputWithIcon
          icon={<Phone className="h-4 w-4" />}
          label="Phone"
          id="phone"
          type="tel"
        />
        <InputWithIcon
          icon={<Globe2 className="h-4 w-4" />}
          label="Country"
          id="country"
          type="text"
        />
      </div>

      {/* Budget */}
      <SelectWithLabel
        id="budget"
        label="Estimated budget"
        options={[
          "Under $500",
          "$500 – $2,000",
          "$2,000 – $5,000",
          "Above $5,000",
        ]}
      />

      {/* Message */}
      <TextareaWithLabel
        id="message"
        label="Project details"
        placeholder="Share your goals, timeline, and anything else we should know."
      />

      <div className="pt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/40 hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-white"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          <Send className="h-4 w-4" />
          <span>Submit request</span>
        </button>
        <p className="text-[11px] text-slate-500">
          We respect your privacy. Your information is kept confidential and
          never shared.
        </p>
      </div>
    </form>
  );
}

/* Small field components – light theme */

function InputWithIcon({ icon, label, id, type = "text", required }) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium text-slate-600 uppercase tracking-[0.12em]"
        style={{ fontFamily: "var(--font-Poppins)" }}
      >
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 focus-within:border-orange-500 focus-within:bg-white transition-colors">
        <span className="text-slate-500">{icon}</span>
        <input
          id={id}
          type={type}
          required={required}
          className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 outline-none"
          style={{ fontFamily: "var(--font-Poppins)" }}
          placeholder={label.replace(" *", "")}
        />
      </div>
    </div>
  );
}

function SelectWithLabel({ id, label, options }) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium text-slate-600 uppercase tracking-[0.12em]"
        style={{ fontFamily: "var(--font-Poppins)" }}
      >
        {label}
      </label>
      <div className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 focus-within:border-orange-500 focus-within:bg-white transition-colors">
        <select
          id={id}
          className="w-full bg-transparent text-sm text-slate-900 outline-none cursor-pointer"
          style={{ fontFamily: "var(--font-Poppins)" }}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function TextareaWithLabel({ id, label, placeholder }) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium text-slate-600 uppercase tracking-[0.12em]"
        style={{ fontFamily: "var(--font-Poppins)" }}
      >
        {label}
      </label>
      <div className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 focus-within:border-orange-500 focus-within:bg-white transition-colors">
        <textarea
          id={id}
          rows={4}
          className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 outline-none resize-y"
          style={{ fontFamily: "var(--font-Poppins)" }}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}