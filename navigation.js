(() => {
  const header = document.querySelector('header');
  const menu = document.getElementById('main-nav');
  const toggle = document.querySelector('.nav-toggle');
  if (!header || !menu || !toggle) return;

  const mobile = window.matchMedia('(max-width: 680px)');
  const links = Array.from(menu.querySelectorAll('a'));
  const isHome = document.body.classList.contains('home');
  const sections = isHome
    ? links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean)
    : [];

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = mobile.matches;
  }

  function syncLayout() {
    toggle.hidden = !mobile.matches;
    closeMenu();
  }

  toggle.addEventListener('click', () => {
    const opening = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(opening));
    menu.hidden = !opening;
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && !menu.hidden) {
      closeMenu();
      toggle.focus();
    }
  });

  links.forEach(link => link.addEventListener('click', () => {
    if (mobile.matches) closeMenu();
  }));

  function highlightSection() {
    let active = 'projects';
    if (isHome) {
      active = 'about';
      const threshold = header.getBoundingClientRect().height + 120;
      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= threshold) active = section.id;
      });
    }
    links.forEach(link => {
      if (link.hash === '#' + active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      highlightSection();
      scheduled = false;
    });
  }, {passive: true});

  mobile.addEventListener('change', () => {
    syncLayout();
    highlightSection();
  });
  window.addEventListener('hashchange', highlightSection);
  syncLayout();
  highlightSection();
})();
