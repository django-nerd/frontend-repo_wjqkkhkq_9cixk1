import React from "react";

const blocks = [
  {
    title: "Protocol scheduling",
    desc: "Set times and days. Get reminders to stay consistent.",
  },
  { title: "Dose tracking", desc: "Log dose, time, and notes in a tap." },
  {
    title: "Inventory",
    desc: "Track vials, syringes, and supplies. Avoid running out.",
  },
  {
    title: "Encyclopedia",
    desc: "Look up peptides, ranges, and practical tips.",
  },
  { title: "Smart Insights", desc: "We surface patterns from your logs." },
  {
    title: "Metrics",
    desc: "Record sleep, energy, workouts, weight, and more.",
  },
  { title: "Charts", desc: "Simple charts show progress over time." },
  { title: "Custom protocols", desc: "Build your own stacks and cycles." },
  { title: "Cycle tracking", desc: "Set on and off blocks to manage safety." },
  { title: "Privacy", desc: "Your data is private and stored securely." },
];

function FeatureBlocks() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white">Features</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
              <h3 className="text-white font-semibold">{b.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureBlocks;
