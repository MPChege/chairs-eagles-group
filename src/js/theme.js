export function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  const html = document.documentElement;

  // Get time-based theme (6 AM - 6 PM = light, 6 PM - 6 AM = dark)
  function getTimeBasedTheme() {
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 18) ? 'light' : 'dark';
  }

  // Get system preference
  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  // Determine initial theme
  function getInitialTheme() {
    const savedPreference = localStorage.getItem('theme-preference');
    
    // If user has manually set a preference, use it
    if (savedPreference === 'light' || savedPreference === 'dark') {
      return savedPreference;
    }
    
    // If user wants auto mode, check time-based
    if (savedPreference === 'auto' || !savedPreference) {
      return getTimeBasedTheme();
    }
    
    // Fallback to system preference
    return getSystemTheme();
  }

  // Apply theme with smooth transition
  function applyTheme(theme) {
    html.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    html.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
    
    // Trigger particles redraw
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
      window.dispatchEvent(new Event('resize'));
    }
    
    // Remove transition after animation
    setTimeout(() => {
      html.style.transition = '';
    }, 300);
  }

  // Initialize theme
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  // Check for time-based changes every minute (if in auto mode)
  setInterval(() => {
    const preference = localStorage.getItem('theme-preference');
    if (preference === 'auto' || !preference) {
      const timeBasedTheme = getTimeBasedTheme();
      const currentTheme = html.getAttribute('data-theme');
      if (timeBasedTheme !== currentTheme) {
        applyTheme(timeBasedTheme);
      }
    }
  }, 60000); // Check every minute

  // Manual toggle
  themeToggle?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme-preference', newTheme);
  });

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      const preference = localStorage.getItem('theme-preference');
      if (preference === 'auto' || !preference) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
  }
}

