import React from "react";

function FAQ() {
  const faqs = [
    {
      q: "Is Pepstack safe?",
      a: "Yes. Your data is stored securely. You control your account.",
    },
    {
      q: "Will it work with my current protocol?",
      a: "Yes. You can use templates or create a custom plan that matches what you do now.",
    },
    { q: "Do I own my data?", a: "Yes. Your logs and notes belong to you." },
    {
      q: "What platforms does it run on?",
      a: "It runs in the browser on desktop and mobile.",
    },
    { q: "How do I get started?", a: "Start a trial, set a protocol, and log your first dose." },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-white">FAQ</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
              <h3 className="font-semibold text-white">{f.q}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
