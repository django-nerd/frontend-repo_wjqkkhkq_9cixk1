import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Pricing</h2>
        <p className="mt-2 text-slate-300">One plan. Simple pricing.</p>

        <div className="mt-8 grid place-items-center">
          <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-800/60 p-6 text-left">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold text-white">Pepstack</h3>
              <div className="text-3xl font-extrabold text-white">
                $12 <span className="text-base font-medium text-slate-400">per month</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>All features</li>
              <li>Unlimited protocols</li>
              <li>Unlimited logs</li>
              <li>Private, secure storage</li>
              <li>Cancel anytime</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-white font-medium shadow hover:bg-blue-400 transition">
              Start your trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
