import React from 'react';
import { useRevealSection } from '../hooks/useRevealSection.js';

function Contact() {
  const sectionRef = useRevealSection();
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="reveal-section relative py-20 text-slate-50"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-deep-red via-slate-900 to-royal-blue" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-red">Contact</p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Let&apos;s design your security brief.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-200 md:text-base">
            Share a short overview of your environment and timelines. Our operations team will
            respond with a focused proposal.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-200">
            <p className="font-semibold text-slate-50">Charis Eagles Group Ltd</p>
            <p>Nairobi, Kenya</p>
            <p>Phone: +254 XXX XXX XXX</p>
            <p>Email: info@chariseaglegroup.com</p>
          </div>
          <form className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-soft-lg backdrop-blur">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Name
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:border-deep-red focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:border-deep-red focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Message / Security context
              </label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:border-deep-red focus:outline-none"
                placeholder="Tell us about the people, locations, and timelines involved."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-deep-red to-royal-blue px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-soft-lg transition hover:translate-y-[1px] hover:shadow-lg"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
