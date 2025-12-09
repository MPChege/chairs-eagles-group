import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;

    const getTimeBasedTheme = () => {
      const hour = new Date().getHours();
      return hour >= 6 && hour < 18 ? 'light' : 'dark';
    };

    const getSystemTheme = () => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
      return 'dark';
    };

    const savedPreference = localStorage.getItem('theme-preference');
    let initial = savedPreference || getTimeBasedTheme() || getSystemTheme();

    setTheme(initial);
    root.setAttribute('data-theme', initial);

    const listener = (e) => {
      const pref = localStorage.getItem('theme-preference');
      if (!pref || pref === 'auto') {
        const sys = e.matches ? 'light' : 'dark';
        setTheme(sys);
        root.setAttribute('data-theme', sys);
      }
    };

    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      mq.addEventListener('change', listener);
      return () => mq.removeEventListener('change', listener);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme-preference', next);
  };

  return { theme, toggleTheme };
}
