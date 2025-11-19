import React from "react";
import { motion } from "framer-motion";

function SmartInsights() {
  return (
    <section className="relative py-24 bg-pep-gray0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pep-primary/30 to-transparent" />
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-pep-gray4/50 bg-gradient-to-br from-pep-gray2/80 to-pep-gray1/80 p-8 shadow-soft"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Smart Insights</h2>
          <p className="mt-3 text-slate-300">
            The app reviews your logs and metrics to find patterns. It looks at timing, dose, and outcomes. It then suggests small changes you can test. You stay in control. The goal is steady improvement, not guesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default SmartInsights;
