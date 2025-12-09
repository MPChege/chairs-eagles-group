import React, { useEffect, useState } from 'react';

function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-deep-red to-royal-blue shadow-soft-lg">
          <div className="h-10 w-10 rounded-full bg-white/10" />
          <div className="absolute inset-0 animate-ping rounded-full border border-deep-red/40" />
        </div>
        <p className="text-[0.75rem] tracking-[0.3em] text-slate-500 uppercase">Charis Eagles Group</p>
      </div>
    </div>
  );
}

export default Preloader;
