import React from 'react';
import { useRevealSection } from '../hooks/useRevealSection.js';

function Teamwork() {
  const sectionRef = useRevealSection();
  return (
    <section ref={sectionRef} id="teamwork" className="reveal-section bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-red">Strategy</p>
          <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Built around teamwork, growth, and clear leadership.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-slate-900">Research</h3>
            <p className="mt-2 text-sm text-slate-600">
              We constantly review incident patterns, client feedback, and regional security reports
              to refine our procedures.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-slate-900">People &amp; Training</h3>
            <p className="mt-2 text-sm text-slate-600">
              Teams are trained to operate as a cohesive unit, rehearsing scenarios so that real
              deployments feel calm and controlled.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-slate-900">Growth Mindset</h3>
            <p className="mt-2 text-sm text-slate-600">
              Every operation is reviewed so we can adapt, improve, and scale our capabilities with
              our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teamwork;
