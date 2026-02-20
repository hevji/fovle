document.addEventListener('DOMContentLoaded', () => {
  const normalizedPath = window.location.pathname.replace(/\.html$/, '');

  if (normalizedPath !== window.location.pathname) {
    window.history.replaceState({}, '', normalizedPath || '/');
  }

  const links = document.querySelectorAll('a[href$=".html"]');
  links.forEach((link) => {
    link.setAttribute('href', link.getAttribute('href').replace(/\.html$/, ''));
  });
});
