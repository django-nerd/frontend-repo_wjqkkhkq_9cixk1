import React from "react";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Pricing</h2>
        <p className="mt-2 text-slate-300">One plan. Simple pricing.</p>

        <div className="mt-10 grid place-items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl rounded-2xl border border-pep-gray4/50 bg-gradient-to-br from-pep-gray2/80 to-pep-gray1/80 p-8 text-left shadow-soft"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold text-white">Pepstack</h3>
              <div className="text-4xl font-extrabold text-white">
                $12 <span className="text-base font-medium text-slate-400">per month</span>
              </div>
            </div>
            <ul className="mt-6 grid gap-2 text-slate-300 text-sm sm:grid-cols-2">
              <li>All features</li>
              <li>Unlimited protocols</li>
              <li>Unlimited logs</li>
              <li>Private, secure storage</li>
              <li>Cancel anytime</li>
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-pep-primary px-6 py-3 text-white font-medium shadow-soft hover:bg-pep-primaryDark transition active:scale-[0.98] focus:outline-none focus:shadow-ring">
              Start your trial
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
