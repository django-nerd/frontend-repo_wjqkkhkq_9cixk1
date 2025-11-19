import React from "react";
import Hero from "./components/Hero";
import WhatItDoes from "./components/WhatItDoes";
import WhyItHelps from "./components/WhyItHelps";
import WhoItsFor from "./components/WhoItsFor";
import HowItWorks from "./components/HowItWorks";
import FeatureBlocks from "./components/FeatureBlocks";
import SmartInsights from "./components/SmartInsights";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pep-gray1 via-pep-gray0 to-pep-gray1 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-pep-radial" />

      <header className="relative z-10 border-b border-pep-gray4/50 backdrop-blur supports-[backdrop-filter]:bg-pep-gray0/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-pep-primary" />
            <span className="font-heading font-semibold tracking-tight">Pepstack</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#pricing" className="rounded-2xl bg-pep-primary px-4 py-2 text-sm font-medium text-white hover:bg-pep-primaryDark active:scale-[0.98] focus:outline-none focus:shadow-ring">Start trial</a>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <WhatItDoes />
        <WhyItHelps />
        <WhoItsFor />
        <HowItWorks />
        <FeatureBlocks />
        <SmartInsights />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <footer className="relative z-10 border-t border-pep-gray4/50">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Pepstack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
