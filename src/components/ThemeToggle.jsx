import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  const icon = theme === 'dark' ? '🌙' : '☀️';

  return (
    <button
      id="theme-toggle"
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <span className="theme-icon">{icon}</span>
    </button>
  );
}

export default ThemeToggle;
