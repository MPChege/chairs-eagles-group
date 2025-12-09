import React, { useEffect, useState } from 'react';
import { useRevealSection } from '../hooks/useRevealSection.js';
import guardPortrait from '../assets/images/portrait-male-security-guard-with-uniform.jpg';
import driverImage from '../assets/images/elegant-uber-driver-giving-taxi-ride.jpg';
import workspaceImage from '../assets/images/security-guards-workspace.jpg';

const frames = [
  {
    id: 'executive',
    image: guardPortrait,
    label: 'Executive & VIP Protection',
    detail: 'Discreet close‑protection details for high‑profile leaders and guests.',
  },
  {
    id: 'transport',
    image: driverImage,
    label: 'Secure Transport & Arrivals',
    detail: 'Planned routes, secure transfers, and controlled arrival zones.',
  },
  {
    id: 'operations',
    image: workspaceImage,
    label: 'Operations & Monitoring',
    detail: 'Quiet, always‑on monitoring backing every assignment in the field.',
  },
];

function Hero() {
  const sectionRef = useRevealSection();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % frames.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="reveal-section relative overflow-hidden bg-slate-50 pt-24 pb-20 text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,27,57,0.06),transparent_55%),radial-gradient(circle_at_bottom,_rgba(27,183,255,0.08),transparent_55%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
        {/* Left: copy */}
        <div className="order-2 flex-1 space-y-6 md:order-1 md:pr-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-[0.72rem] font-medium uppercase tracking-[0.3em] text-slate-500 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-br from-deep-red to-royal-blue" />
            Elite Private Security
          </div>
          <div className="space-y-3">
            <h1 className="font-heading text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Security that moves with you.
            </h1>
            <p className="max-w-xl text-sm text-slate-600 md:text-base">
              Executive protection, corporate guarding, and high‑fidelity event security designed
              for leaders, brands, and critical assets across Kenya.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#event-designer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-deep-red to-royal-blue px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-soft-lg transition hover:translate-y-[1px] hover:shadow-lg"
            >
              <span>Design My Security Plan</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                →
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold tracking-wide text-slate-900 shadow-sm transition hover:border-deep-red/60 hover:text-deep-red"
            >
              View Services
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            <span>24/7 Coverage</span>
            <span>500+ Assignments</span>
            <span>Discreet &amp; Trusted</span>
          </div>
        </div>

        {/* Right: rotating image panel */}
        <div className="order-1 flex-1 md:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-900 shadow-soft-lg">
            {frames.map((frame, index) => (
              <img
                key={frame.id}
                src={frame.image}
                alt={frame.label}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-slate-900/0" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-slate-200">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
                  Charis Eagles Group
                </p>
                <p className="text-sm font-medium">{frames[activeIndex].label}</p>
              </div>
              <div className="flex gap-1.5">
                {frames.map((frame, index) => (
                  <button
                    key={frame.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'
                    }`}
                    aria-label={frame.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
