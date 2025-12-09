import React from 'react';
import { stats } from '../data/stats.js';
import { useRevealSection } from '../hooks/useRevealSection.js';

function Stats() {
  const sectionRef = useRevealSection();
  return (
    <section ref={sectionRef} id="stats" className="reveal-section bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-soft-lg sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl font-bold text-slate-900 md:text-3xl">
                {stat.value.toLocaleString()}
                {stat.label.includes('Assignments') || stat.label.includes('Professionals') ? '+' : ''}
              </div>
              <div className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
