import React from 'react';
import { useRevealSection } from '../hooks/useRevealSection.js';
import guardPortrait from '../assets/images/portrait-male-security-guard-with-uniform.jpg';
import driverImage from '../assets/images/elegant-uber-driver-giving-taxi-ride.jpg';
import workspaceImage from '../assets/images/security-guards-workspace.jpg';

function Hero() {
  const sectionRef = useRevealSection();

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="reveal-section relative overflow-hidden bg-slate-50 pt-24 pb-20 text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(192,0,0,0.06),transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,51,170,0.06),transparent_55%)]" />

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
            <p className="max-w-xl text-sm font-medium text-slate-700 md:text-sm">
              <span className="font-semibold text-deep-red">Now viewing:</span> {activeFrame.detail}
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

        {/* Right: static image collage */}
        <div className="order-1 flex-1 md:order-2">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 shadow-soft-lg">
                <img
                  src={guardPortrait}
                  alt="Executive security guard"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 shadow-soft-lg">
                <img
                  src={driverImage}
                  alt="Secure transport driver"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 shadow-soft-lg">
              <div className="aspect-[5/3]">
                <img
                  src={workspaceImage}
                  alt="Security operations workspace"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
