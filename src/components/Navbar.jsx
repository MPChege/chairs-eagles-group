import React from 'react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#event-designer', label: 'Security Brief' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center">
      <div className="pointer-events-auto flex items-center gap-5 rounded-full border border-slate-200/70 bg-white/85 px-5 py-2 shadow-soft-lg backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-deep-red to-royal-blue text-[0.65rem] font-bold text-white">
            CE
          </div>
          <span className="text-[0.7rem] font-semibold tracking-[0.22em] text-slate-600 uppercase">
            Charis Eagle
          </span>
        </div>
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
      </div>
    </header>
  );
}

export default Navbar;
