import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Parallax background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-pep-radial" />
      <motion.div
        className="absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-pep-primary/20 blur-3xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Track peptides. Improve performance.
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Pepstack helps you schedule protocols, track doses, log metrics, and see what works. Simple, clear, and private.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#pricing" className="inline-flex items-center rounded-2xl bg-pep-primary px-5 py-3 text-white font-medium shadow-soft hover:bg-pep-primaryDark transition active:scale-[0.98]">
                Start your trial
              </a>
              <a href="#features" className="inline-flex items-center rounded-2xl border border-pep-gray4/60 px-5 py-3 text-slate-200 font-medium hover:bg-pep-gray2 transition">
                See features
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-400">No fluff. Cancel anytime.</p>
          </motion.div>

          {/* Screenshot with subtle float */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="absolute -inset-8 -z-10 bg-pep-primary/15 blur-3xl rounded-full" />
            <motion.div
              className="rounded-2xl border border-pep-gray4/50 bg-pep-gray2/70 p-3 backdrop-blur shadow-soft"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-pep-gray3 to-pep-gray1 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-9 w-40 rounded-full bg-pep-gray4/40" />
                  <div className="mx-auto mb-2 h-6 w-64 rounded bg-pep-gray4/30" />
                  <div className="mx-auto mb-6 h-4 w-52 rounded bg-pep-gray4/20" />
                  <div className="mx-auto grid w-72 grid-cols-3 gap-3">
                    <div className="h-24 rounded-xl bg-pep-gray4/25" />
                    <div className="h-24 rounded-xl bg-pep-gray4/25" />
                    <div className="h-24 rounded-xl bg-pep-gray4/25" />
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-3 text-center text-xs text-slate-500">App screenshot placeholder</p>
          </motion.div>
        </div>
      </div>

      {/* angled divider */}
      <div className="pointer-events-none relative h-8 sm:h-12">
        <div className="absolute inset-0 -skew-y-1 bg-gradient-to-b from-transparent to-pep-gray0/30" />
      </div>
    </section>
  );
}

export default Hero;
