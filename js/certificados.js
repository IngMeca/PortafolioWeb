const track = document.querySelector('.cert-track');
const count = document.querySelector('.cert-count');
const arrows = [...document.querySelectorAll('.cert-arrow')];
const dialog = document.querySelector('.cert-dialog');
const modalImage = dialog.querySelector('img');
let visibleCertificates = certificates;
let currentIndex = 0;
let returnFocusTo = null;

track.innerHTML = certificates.map((certificate, index) => `
  <button class="cert-card" type="button" data-index="${index}" data-category="${certificate.category}" aria-label="Ampliar certificado: ${certificate.title}">
    <span class="cert-card-image"><img src="${certificate.image}" alt="Vista previa de ${certificate.title}" loading="lazy" decoding="async"></span>
    <span class="cert-card-copy"><small>${categoryNames[certificate.category]}</small><strong>${certificate.title}</strong><span><b>${certificate.issuer}</b><em aria-hidden="true">↗</em></span></span>
  </button>`).join('');

function activeCards() {
  return [...track.querySelectorAll('.cert-card:not([hidden])')];
}

function updateControls() {
  const cards = activeCards();
  if (!cards.length) return;
  const closest = cards.reduce((best, card, index) =>
    Math.abs(card.offsetLeft - track.scrollLeft) < Math.abs(cards[best].offsetLeft - track.scrollLeft) ? index : best, 0);
  currentIndex = closest;
  count.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  arrows[0].disabled = track.scrollLeft <= 2;
  arrows[1].disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
}

function goTo(index) {
  const cards = activeCards();
  if (index < 0 || index >= cards.length) return;
  track.scrollTo({ left: cards[index].offsetLeft - cards[0].offsetLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  currentIndex = index;
  count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  arrows[0].disabled = index === 0;
  arrows[1].disabled = index === cards.length - 1;
}

arrows.forEach((arrow) => arrow.addEventListener('click', () => goTo(currentIndex + (arrow.dataset.direction === 'next' ? 1 : -1))));
track.addEventListener('scroll', () => requestAnimationFrame(updateControls), { passive: true });
window.addEventListener('resize', updateControls);
track.addEventListener('keydown', (event) => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  goTo(currentIndex + (event.key === 'ArrowRight' ? 1 : -1));
});

document.querySelectorAll('.cert-filters button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.cert-filters button').forEach((item) => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  const filter = button.dataset.filter;
  visibleCertificates = certificates.filter((certificate) => filter === 'todos' || certificate.category === filter);
  track.querySelectorAll('.cert-card').forEach((card) => {
    card.hidden = filter !== 'todos' && card.dataset.category !== filter;
  });
  track.scrollLeft = 0;
  currentIndex = 0;
  updateControls();
}));

function showInDialog(index, pageIndex = 0) {
  const certificate = visibleCertificates[index];
  const pages = certificate.images ?? [certificate.image];

  modalImage.src = pages[pageIndex];
  modalImage.alt = `Hoja ${pageIndex + 1} de ${certificate.title}`;
  dialog.querySelector('.cert-dialog-category').textContent = categoryNames[certificate.category];
  dialog.querySelector('.cert-dialog-caption strong').textContent = certificate.title;
  dialog.querySelector('.cert-dialog-caption span').textContent = certificate.issuer;
  dialog.querySelector('.cert-dialog-caption small').textContent =
    pages.length > 1
      ? `Hoja ${pageIndex + 1} / ${pages.length} · Certificado ${index + 1} / ${visibleCertificates.length}`
      : `${index + 1} / ${visibleCertificates.length}`;

  dialog.dataset.index = String(index);
  dialog.dataset.pageIndex = String(pageIndex);
}

function moveDialog(delta) {
  const index = Number(dialog.dataset.index);
  const pageIndex = Number(dialog.dataset.pageIndex);
  const certificate = visibleCertificates[index];
  const pages = certificate.images ?? [certificate.image];
  const nextPage = pageIndex + delta;

  if (nextPage >= 0 && nextPage < pages.length) {
    showInDialog(index, nextPage);
    return;
  }

  const nextIndex =
    (index + delta + visibleCertificates.length) % visibleCertificates.length;
  const nextCertificate = visibleCertificates[nextIndex];
  const nextPages = nextCertificate.images ?? [nextCertificate.image];

  showInDialog(nextIndex, delta > 0 ? 0 : nextPages.length - 1);
  goTo(nextIndex);
}

track.addEventListener('click', (event) => {
  const card = event.target.closest('.cert-card');
  if (!card) return;
  returnFocusTo = card;
  showInDialog(visibleCertificates.indexOf(certificates[Number(card.dataset.index)]));
  dialog.showModal();
});

dialog.querySelector('.cert-dialog-close').addEventListener('click', () => dialog.close());
dialog.querySelectorAll('[data-modal-direction]').forEach((button) => {
  button.addEventListener('click', () => {
    moveDialog(button.dataset.modalDirection === 'next' ? 1 : -1);
  });
});
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => returnFocusTo?.focus());
dialog.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    moveDialog(event.key === 'ArrowRight' ? 1 : -1);
  }
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-header nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
updateControls();
