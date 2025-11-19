import React from "react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-pep-gray4/50 bg-gradient-to-br from-pep-gray2/80 to-pep-gray1/80 p-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Ready to get clear?</h2>
          <p className="mt-2 text-slate-300">Start your trial. Set your plan. Track what matters.</p>
          <a href="#pricing" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-pep-primary px-6 py-3 text-white font-medium shadow-soft hover:bg-pep-primaryDark transition active:scale-[0.98] focus:outline-none focus:shadow-ring">
            Start your trial
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
