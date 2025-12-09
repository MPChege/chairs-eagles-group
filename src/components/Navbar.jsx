import React, { useState } from 'react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#event-designer', label: 'Security Brief' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center">
        <div className="pointer-events-auto flex w-full max-w-[720px] items-center justify-between gap-4 rounded-full border border-slate-200/70 bg-white/85 px-4 py-2 shadow-soft-lg backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-deep-red to-royal-blue text-[0.65rem] font-bold text-white">
              CE
            </div>
            <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-slate-600 uppercase whitespace-nowrap">
              Charis Eagles Group
            </span>
          </div>

          {/* Desktop links */}
          <nav className="hidden items-center gap-5 text-[0.75rem] font-medium tracking-[0.18em] text-slate-500 uppercase md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative pb-1 transition-colors hover:text-slate-900"
              >
                <span>{link.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-[1.5px] scale-x-0 bg-gradient-to-r from-deep-red to-royal-blue transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-9 w-9 flex-col items-center justify-center rounded-full border border-deep-red/40 bg-white text-deep-red shadow-sm md:hidden"
            aria-label="Open navigation"
          >
            <span className="block h-[2px] w-4 rounded-full bg-current" />
            <span className="mt-1 block h-[2px] w-4 rounded-full bg-current" />
            <span className="mt-1 block h-[2px] w-4 rounded-full bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            onClick={close}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            aria-label="Close navigation overlay"
          />
          <nav className="absolute inset-y-0 right-0 w-64 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-600">
                Menu
              </span>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600"
                aria-label="Close navigation"
              >
                ×
              </button>
            </div>
            <ul className="flex flex-col gap-2 px-4 py-4 text-[0.85rem] font-medium uppercase tracking-[0.18em] text-slate-700">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block rounded-xl px-3 py-2 hover:bg-slate-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
