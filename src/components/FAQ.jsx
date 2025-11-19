import React from "react";
import { motion } from "framer-motion";

function FAQ() {
  const faqs = [
    { q: "Is Pepstack safe?", a: "Yes. Your data is stored securely. You control your account." },
    { q: "Will it work with my current protocol?", a: "Yes. You can use templates or create a custom plan that matches what you do now." },
    { q: "Do I own my data?", a: "Yes. Your logs and notes belong to you." },
    { q: "What platforms does it run on?", a: "It runs in the browser on desktop and mobile." },
    { q: "How do I get started?", a: "Start a trial, set a protocol, and log your first dose." },
  ];

  return (
    <section id="faq" className="py-24 bg-pep-gray0">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">FAQ</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="rounded-2xl border border-pep-gray4/50 bg-gradient-to-br from-pep-gray2/80 to-pep-gray1/80 p-6"
            >
              <h3 className="font-semibold text-white">{f.q}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
