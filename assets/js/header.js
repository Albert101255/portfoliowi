// Shared header component
function injectHeader(activePage) {
  const pages = ['projects', 'about', 'contact'];
  const links = {
    projects: { label: 'Projects', href: '/index.html' },
    about: { label: 'About', href: '/about.html' },
    contact: { label: 'Contact', href: '/contact.html' },
  };

  const navItems = pages.map(p => {
    const isActive = p === activePage;
    return `<a href="${links[p].href}" class="nav-link${isActive ? ' active' : ''}" data-page="${p}">
      ${links[p].label.toUpperCase()}
      ${isActive ? `<span class="nav-underline">
        <svg width="60" height="8" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5 Q10 2 18 5 Q26 8 34 5 Q42 2 50 5 Q56 7 58 5" stroke="var(--ink-red)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        </svg>
      </span>` : ''}
    </a>`;
  }).join('');

  const header = `
  <header class="site-header" id="site-header">
    <div class="header-inner">
      <a href="/index.html" class="wordmark mis-reg" data-text="A.ALBERT">A.ALBERT</a>
      <nav class="main-nav" id="main-nav">
        ${navItems}
      </nav>
      <div class="stamp-circle" aria-hidden="true">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="24" fill="none" stroke="var(--ink-teal)" stroke-width="2"/>
          <circle cx="26" cy="26" r="18" fill="none" stroke="var(--ink-teal)" stroke-width="1" stroke-dasharray="2 2"/>
          <path id="circle-text-path" d="M26,26 m-17,0 a17,17 0 1,1 34,0 a17,17 0 1,1 -34,0" fill="none"/>
          <text font-family="IBM Plex Mono" font-size="6" fill="var(--ink-teal)" letter-spacing="1.5" text-transform="uppercase">
            <textPath href="#circle-text-path">PORTFOLIO · 2025 · </textPath>
          </text>
        </svg>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-halftone"></div>
      <nav class="mobile-nav">
        ${navItems}
      </nav>
    </div>
  </header>`;

  document.body.insertAdjacentHTML('afterbegin', header);

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  // Sticky on scroll
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 10);
  });
}
