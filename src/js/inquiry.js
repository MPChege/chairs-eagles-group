export function initInquiry() {
  const form = document.getElementById('inquiry-form');
  const typeSelect = document.getElementById('inquiry-type');
  const locationsRange = document.getElementById('inquiry-locations');
  const locationsValue = document.getElementById('inquiry-locations-value');
  const urgencySelect = document.getElementById('inquiry-urgency');
  const coverageGroup = document.getElementById('inquiry-coverage');
  const prioritiesGroup = document.getElementById('inquiry-priorities');
  const summaryList = document.getElementById('inquiry-summary-list');
  const sendButton = document.getElementById('inquiry-to-contact');

  if (!form || !typeSelect || !locationsRange || !locationsValue || !urgencySelect || !coverageGroup || !prioritiesGroup || !summaryList || !sendButton) {
    return;
  }

  let coverageValue = '24-7';
  let priorities = new Set(['discreet']);

  function getTypeLabel(value) {
    switch (value) {
      case 'executive':
        return 'Executive / VIP Protection';
      case 'corporate':
        return 'Corporate Premises';
      case 'residential':
        return 'Residential Property';
      case 'event':
        return 'Event or Activation';
      case 'transport':
        return 'Secure Transport & Logistics';
      default:
        return 'Custom Requirement';
    }
  }

  function getCoverageLabel(value) {
    if (value === 'day') return 'Daytime coverage';
    if (value === 'night') return 'Night coverage';
    return '24/7 continuous coverage';
  }

  function getUrgencyLabel(value) {
    if (value === 'priority') return 'Priority (48–72 hours)';
    if (value === 'critical') return 'Critical (same day)';
    return 'Standard (within 7 days)';
  }

  function getPrioritiesLabel(set) {
    if (!set.size) return 'Balanced presence and response.';

    const labels = [];
    set.forEach(value => {
      switch (value) {
        case 'discreet':
          labels.push('discreet, low-visibility presence');
          break;
        case 'visible':
          labels.push('visible deterrence and perimeter control');
          break;
        case 'technology':
          labels.push('advanced surveillance and monitoring technology');
          break;
        case 'response':
          labels.push('rapid incident response capability');
          break;
      }
    });

    if (!labels.length) return 'Balanced presence and response.';

    return labels.join(', ') + '.';
  }

  function updateSummary() {
    const type = typeSelect.value;
    const typeLabel = getTypeLabel(type);
    const locations = parseInt(locationsRange.value, 10);
    const urgency = urgencySelect.value;

    const coverageLabel = getCoverageLabel(coverageValue);
    const urgencyLabel = getUrgencyLabel(urgency);
    const prioritiesLabel = getPrioritiesLabel(priorities);

    locationsValue.textContent = locations.toString();

    summaryList.innerHTML = `
      <li>Protection focus: ${typeLabel}</li>
      <li>Coverage: ${locations} ${locations === 1 ? 'site' : 'sites'}, ${coverageLabel}</li>
      <li>Urgency: ${urgencyLabel}</li>
      <li>Operational priorities: ${prioritiesLabel}</li>
    `;
  }

  locationsRange.addEventListener('input', updateSummary);
  typeSelect.addEventListener('change', updateSummary);
  urgencySelect.addEventListener('change', updateSummary);

  coverageGroup.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      coverageGroup.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      coverageValue = button.dataset.value || '24-7';
      updateSummary();
    });
  });

  prioritiesGroup.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.value;
      if (!value) return;

      if (priorities.has(value)) {
        priorities.delete(value);
        button.classList.remove('active');
      } else {
        priorities.add(value);
        button.classList.add('active');
      }

      updateSummary();
    });
  });

  // Initialize default state
  priorities = new Set();
  prioritiesGroup.querySelectorAll('button[data-value="discreet"]').forEach(btn => {
    priorities.add('discreet');
    btn.classList.add('active');
  });
  updateSummary();

  // Attach brief to contact form and scroll
  sendButton.addEventListener('click', () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const messageField = contactForm.querySelector('textarea');
    if (!messageField) return;

    const items = Array.from(summaryList.querySelectorAll('li')).map(li => `- ${li.textContent.trim()}`);
    const brief = `Security Brief Request:\\n${items.join('\\n')}\\n\\nAdditional details:`;

    messageField.value = brief;

    const contactSection = document.getElementById('contact');
    if (contactSection && contactSection.scrollIntoView) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}


