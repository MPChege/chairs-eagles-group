import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <p>&copy; {new Date().getFullYear()} Charis Eagles Group Ltd. All rights reserved.</p>
        <p className="tracking-[0.22em] uppercase">Security. Precision. Discretion.</p>
      </div>
    </footer>
  );
}

export default Footer;
