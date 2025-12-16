import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-slate-900/80 border border-slate-800 rounded-3xl shadow-[0_24px_80px_rgba(15,23,42,0.8)] px-6 py-8 sm:px-8 sm:py-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-400/60">
            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
          </div>
        </div>

        <h1
          className="text-2xl sm:text-3xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-Playfair)" }}
        >
          Payment Successful!
        </h1>

        <p
          className="text-sm sm:text-base text-slate-300 mb-4"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          Thank you for choosing{" "}
          <span className="font-semibold text-white">The Logo Wall Street LLC</span>.
          Your order has been received and is now being processed.
        </p>

        <p
          className="text-xs sm:text-sm text-slate-400 mb-6"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          We’ll send you a confirmation email with your package details and next
          steps shortly. If you have any questions, feel free to contact us.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="
              inline-flex items-center justify-center rounded-full
              px-6 py-2.5 text-sm font-semibold
              bg-gradient-to-r from-orange-500 to-red-500
              text-white
              shadow-[0_0_30px_rgba(249,115,22,0.6)]
              hover:shadow-[0_0_40px_rgba(249,115,22,0.9)]
              hover:scale-[1.02]
              transition-transform transition-shadow duration-200
            "
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            Back to Home
          </Link>

          <Link
            to="/contact-us"
            className="
              inline-flex items-center justify-center rounded-full
              px-6 py-2.5 text-sm font-semibold
              border border-slate-600 text-slate-100
              hover:bg-white/5 hover:border-slate-300
              transition-colors duration-200
            "
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}