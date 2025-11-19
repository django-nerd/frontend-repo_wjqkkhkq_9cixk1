import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Protocol scheduling", desc: "Set your plan with times and days. Get daily reminders so you follow it." },
  { title: "Dose tracking", desc: "Record each dose. See history at a glance." },
  { title: "Inventory management", desc: "Track vials and supplies. Know when to reorder." },
  { title: "Peptide encyclopedia", desc: "Look up compounds, dosing ranges, and notes in one place." },
  { title: "Smart Insights", desc: "We look at your logs and highlight patterns that matter." },
  { title: "Metric logging", desc: "Log sleep, energy, weight, mood, workouts, and more." },
  { title: "Progress charts", desc: "Simple charts show how things change over time." },
  { title: "Custom protocols", desc: "Build your own stack and schedule it your way." },
  { title: "Cycle tracking", desc: "Set on and off cycles. Stay safe and consistent." },
  { title: "Safe storage and privacy", desc: "Your data stays private. We use secure storage." },
];

function WhatItDoes() {
  return (
    <section id="features" className="relative py-20 bg-pep-gray0">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pep-primary/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">What Pepstack does</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Pepstack helps you manage protocols, doses, inventory, and metrics in one place. It keeps your plan clear. It shows what is working.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-pep-gray4/50 bg-pep-gray2/70 p-5 shadow-soft hover:shadow-lg hover:shadow-black/30 transition-shadow"
            >
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatItDoes;
