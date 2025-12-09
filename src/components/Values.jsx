import React from 'react';
import { values } from '../data/values.js';
import { useRevealSection } from '../hooks/useRevealSection.js';

function Values() {
  const sectionRef = useRevealSection();
  return (
    <section ref={sectionRef} id="values" className="reveal-section bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-red">Core Values</p>
          <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Principles that anchor every assignment.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-deep-red/5 via-transparent to-royal-blue/5" />
              <div className="relative space-y-3">
                <h3 className="font-heading text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
