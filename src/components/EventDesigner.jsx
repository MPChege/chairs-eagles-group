import React, { useState } from 'react';
import { useRevealSection } from '../hooks/useRevealSection.js';

const eventTypes = ['Gala / Dinner', 'Conference', 'Concert / Festival', 'Board Meeting', 'Private Residence'];

function EventDesigner() {
  const sectionRef = useRevealSection();
  const [type, setType] = useState(eventTypes[0]);
  const [guests, setGuests] = useState(150);
  const [vip, setVip] = useState(true);
  const [guards, setGuards] = useState(8);
  const [tech, setTech] = useState({ cctv: true, drones: false, medical: true });

  const riskLevel = guests > 400 || vip ? 'Elevated' : 'Standard';
  const packageName = vip ? 'Executive Event Shield' : 'Signature Event Cover';

  return (
    <section ref={sectionRef} id="event-designer" className="reveal-section bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-red">Security Brief</p>
          <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Design your event security in seconds.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 md:text-base">
            Adjust the controls to preview a recommended security posture. Share this brief with our
            team for a tailored proposal.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Event type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-deep-red focus:outline-none"
              >
                {eventTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                <span>Expected guests</span>
                <span className="text-[0.7rem] text-slate-700">{guests}</span>
              </label>
              <input
                type="range"
                min={50}
                max={1000}
                step={10}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full accent-deep-red"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  VIP / executive attendees
                </label>
                <button
                  type="button"
                  onClick={() => setVip(!vip)}
                  className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-sm shadow-sm transition ${
                    vip
                      ? 'border-deep-red bg-deep-red/5 text-deep-red'
                      : 'border-slate-200 bg-white text-slate-800'
                  }`}
                >
                  <span>{vip ? 'Yes – VIPs present' : 'No VIPs expected'}</span>
                  <span className="text-xs uppercase tracking-[0.2em]">Toggle</span>
                </button>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  On‑site guards
                </label>
                <input
                  type="number"
                  min={2}
                  max={60}
                  value={guards}
                  onChange={(e) => setGuards(Number(e.target.value) || 0)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-deep-red focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Technology package
              </label>
              <div className="grid gap-2 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setTech((t) => ({ ...t, cctv: !t.cctv }))}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                    tech.cctv
                      ? 'border-royal-blue bg-royal-blue/5 text-royal-blue'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  CCTV &amp; perimeter
                </button>
                <button
                  type="button"
                  onClick={() => setTech((t) => ({ ...t, drones: !t.drones }))}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                    tech.drones
                      ? 'border-royal-blue bg-royal-blue/5 text-royal-blue'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  Aerial / drone support
                </button>
                <button
                  type="button"
                  onClick={() => setTech((t) => ({ ...t, medical: !t.medical }))}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                    tech.medical
                      ? 'border-royal-blue bg-royal-blue/5 text-royal-blue'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  Medical standby
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-slate-200/80 bg-slate-900 px-6 py-7 text-slate-50 shadow-soft-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              Recommended package
            </p>
            <h3 className="font-heading text-2xl font-bold md:text-3xl">{packageName}</h3>
            <p className="text-sm text-slate-200">
              Based on your inputs, we recommend a structured perimeter, clearly defined inner zone,
              and an executive‑ready response team.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">Event type:</span> {type}
              </li>
              <li>
                <span className="font-semibold">Guests:</span> {guests.toLocaleString()}
              </li>
              <li>
                <span className="font-semibold">On‑site guards:</span> {guards}
              </li>
              <li>
                <span className="font-semibold">Risk level:</span> {riskLevel}
              </li>
              <li>
                <span className="font-semibold">Tech stack:</span>{' '}
                {[
                  tech.cctv && 'CCTV',
                  tech.drones && 'Drones',
                  tech.medical && 'Medical standby',
                ]
                  .filter(Boolean)
                  .join(' • ') || 'Core communications & patrols'}
              </li>
            </ul>
            <p className="text-xs text-slate-300">
              Share this configuration in your message and our team will respond with a detailed
              deployment outline and commercial proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDesigner;
