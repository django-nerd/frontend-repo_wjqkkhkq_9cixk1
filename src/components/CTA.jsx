import React from "react";

function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-8">
          <h2 className="text-3xl font-bold text-white">Ready to get clear?</h2>
          <p className="mt-2 text-slate-300">Start your trial. Set your plan. Track what matters.</p>
          <a href="#pricing" className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-400 transition">
            Start your trial
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
