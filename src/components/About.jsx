import React from 'react';
import { useRevealSection } from '../hooks/useRevealSection.js';

function About() {
  const sectionRef = useRevealSection();
  const image1 =
    'https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0';
  const image2 =
    'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.1.0';

  return (
    <section ref={sectionRef} id="about" className="reveal-section bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-red">About Us</p>
          <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Precision security, delivered with quiet confidence.
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            Charis Eagle Group Ltd provides premium private security solutions for executives,
            enterprises, and high‑value events across Kenya. Our teams blend field experience,
            intelligence‑led planning, and modern technology to maintain a calm, controlled
            environment wherever our clients operate.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            From executive details and residential protection to large‑scale event security, we
            operate with absolute discretion, disciplined readiness, and an unwavering commitment to
            your safety.
          </p>
        </div>
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-soft-lg">
              <img
                src={image1}
                alt="Security officer monitoring surveillance"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-soft-lg">
              <img
                src={image2}
                alt="Executive protection detail"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
