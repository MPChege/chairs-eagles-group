import React from 'react';
import { services } from '../data/services.js';
import { useRevealSection } from '../hooks/useRevealSection.js';

function Services() {
  const sectionRef = useRevealSection();
  return (
    <section ref={sectionRef} id="services" className="reveal-section bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-red">Services</p>
          <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Tailored protection for every environment.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 md:text-base">
            From executive movements to large‑scale events, each assignment is planned around your
            specific risk, culture, and brand.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-deep-red/40 hover:shadow-soft-lg"
            >
              <div className="space-y-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[0.7rem] font-semibold text-white">
                  {service.id.toUpperCase().slice(0, 2)}
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900">{service.label}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
              </div>
              <div className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-slate-500">
                Designed &amp; Delivered by Charis Eagles Group
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
