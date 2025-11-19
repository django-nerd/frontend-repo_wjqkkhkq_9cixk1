import React from "react";
import { motion } from "framer-motion";

function WhoItsFor() {
  const users = [
    "Fitness people",
    "Biohackers",
    "Peptide users",
    "Coaches",
    "TRT and HRT users",
    "Anyone tracking a protocol",
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Who it’s for</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((u, i) => (
            <motion.div
              key={u}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-pep-gray4/50 bg-pep-gray2/70 p-5 text-slate-300 shadow-soft hover:shadow-lg hover:shadow-black/30 transition"
            >
              {u}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoItsFor;
