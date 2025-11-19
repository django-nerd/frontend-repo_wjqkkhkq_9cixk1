import React from "react";
import { motion } from "framer-motion";

const blocks = [
  { title: "Protocol scheduling", desc: "Set times and days. Get reminders to stay consistent." },
  { title: "Dose tracking", desc: "Log dose, time, and notes in a tap." },
  { title: "Inventory", desc: "Track vials, syringes, and supplies. Avoid running out." },
  { title: "Encyclopedia", desc: "Look up peptides, ranges, and practical tips." },
  { title: "Smart Insights", desc: "We surface patterns from your logs." },
  { title: "Metrics", desc: "Record sleep, energy, workouts, weight, and more." },
  { title: "Charts", desc: "Simple charts show progress over time." },
  { title: "Custom protocols", desc: "Build your own stacks and cycles." },
  { title: "Cycle tracking", desc: "Set on and off blocks to manage safety." },
  { title: "Privacy", desc: "Your data is private and stored securely." },
];

function FeatureBlocks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Features</h2>
          <div className="hidden md:block text-sm text-slate-400">Built for clarity and speed</div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="rounded-2xl border border-pep-gray4/50 bg-gradient-to-br from-pep-gray2/80 to-pep-gray1/80 p-5 shadow-soft hover:shadow-lg hover:shadow-black/30"
            >
              <h3 className="text-white font-semibold">{b.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureBlocks;
