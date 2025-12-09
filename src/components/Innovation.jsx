import React from 'react';
import { useRevealSection } from '../hooks/useRevealSection.js';

function Innovation() {
  const sectionRef = useRevealSection();
  return (
    <section ref={sectionRef} id="innovation" className="reveal-section bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-red">Innovation</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
              Intelligence‑led security, powered by modern tools.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Our operations centre blends live CCTV feeds, access control data, incident logs, and
              field reports into a single picture of risk. This allows us to allocate teams
              intelligently and respond before minor issues become major events.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Whether we are protecting an executive convoy or monitoring a corporate campus, we rely
              on structured procedures, rehearsed playbooks, and clear communication channels.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-50 shadow-soft-lg">
            <div className="pointer-events-none absolute inset-0 opacity-50" style={{
              backgroundImage:
                'radial-gradient(circle at 0 0, rgba(192,0,0,0.5), transparent 55%), radial-gradient(circle at 100% 100%, rgba(0,51,170,0.5), transparent 55%)',
            }} />
            <div className="relative space-y-4">
              <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-medium tracking-[0.24em] uppercase">
                Live Monitoring Stack
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span>CCTV &amp; sensor fusion</span>
                  <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[0.65rem] font-semibold">Online</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Encrypted field comms</span>
                  <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[0.65rem] font-semibold">Secure</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Threat intelligence feeds</span>
                  <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[0.65rem] font-semibold">Live</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>After‑action reporting &amp; analytics</span>
                  <span className="rounded-full bg-sky-500 px-2 py-0.5 text-[0.65rem] font-semibold">Ready</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
