import React from "react";
import { motion } from "framer-motion";

function HowItWorks() {
  const steps = [
    { title: "Choose protocol", desc: "Pick from templates or create your own." },
    { title: "Track doses", desc: "Log each dose with time and amount." },
    { title: "Log daily stats", desc: "Record sleep, energy, mood, and workouts." },
    { title: "Get insights", desc: "See patterns and correlations." },
    { title: "Adjust and improve", desc: "Fine-tune your plan based on data." },
  ];

  return (
    <section className="py-20 bg-pep-gray0">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-pep-gray4/50 bg-pep-gray2/70 p-5 shadow-soft hover:shadow-lg hover:shadow-black/30"
            >
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
