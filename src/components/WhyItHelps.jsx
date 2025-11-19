import React from "react";
import { motion } from "framer-motion";

function WhyItHelps() {
  const benefits = [
    "You stay on track",
    "You hit your goals faster",
    "You avoid mistakes",
    "You understand what works",
    "You can manage complex stacks",
    "You see patterns in your data",
    "You get clarity instead of guessing",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pep-gray0 to-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Why it helps</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="flex items-start gap-3 rounded-2xl border border-pep-gray4/50 bg-pep-gray2/70 p-4 shadow-soft hover:shadow-lg hover:shadow-black/30 transition-shadow"
            >
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-pep-primary" />
              <span className="text-slate-300">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyItHelps;
