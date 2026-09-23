const certificates = [
  [3, 'Fundamentos de metrología', 'CADISAC', 'electricidad'],
  [4, 'Introducción a Cisco Packet Tracer', 'Cisco Networking Academy', 'tecnologia'],
  [10, 'Instalaciones eléctricas según NOM-001-SEDE', 'CIATSOFTWARE', 'electricidad'],
  [13, 'Auditor líder interno en sistemas integrados', 'ATR / CEAline', 'gestion'],
  [14, 'Estrategias para aprender en línea', 'Platzi', 'tecnologia'],
  [15, 'Computación básica', 'Platzi', 'tecnologia'],
  [16, 'CSS Grid básico', 'Platzi', 'tecnologia'],
  [17, 'Diseño para programadores', 'Platzi', 'tecnologia'],
  [18, 'Técnicas efectivas de estudio', 'Platzi', 'tecnologia'],
  [19, 'Frontend Developer', 'Platzi', 'tecnologia'],
  [20, 'Gestión efectiva del tiempo', 'Platzi', 'gestion'],
  [21, 'Curso definitivo de HTML y CSS', 'Platzi', 'tecnologia'],
  [22, 'Curso práctico de HTML y CSS', 'Platzi', 'tecnologia'],
  [23, 'Pensamiento lógico: algoritmos y diagramas de flujo', 'Platzi', 'tecnologia'],
  [24, 'Pensamiento lógico: datos, estructuras y funciones', 'Platzi', 'tecnologia'],
  [25, 'Maquetación en CSS', 'Platzi', 'tecnologia'],
  [26, 'Introducción a la terminal y línea de comandos', 'Platzi', 'tecnologia'],
  [30, 'Controladores lógicos programables', 'CIATSOFTWARE', 'automatizacion'],
  [33, 'Seguridad, salud en el trabajo y protección ambiental', 'Biosfera', 'seguridad'],
  [36, 'Reglamento federal de seguridad e higiene', 'Biosfera', 'seguridad'],
  [39, 'Reglamento de seguridad e higiene de PEMEX', 'Biosfera', 'seguridad'],
  [42, 'Básico de seguridad', 'Biosfera', 'seguridad'],
  [45, 'Planes de respuesta a emergencias', 'Biosfera', 'seguridad'],
  [48, 'Conceptos básicos sobre protección ambiental', 'Biosfera', 'ambiente'],
  [51, 'Primeros auxilios, hemorragias y RCP', 'Biosfera', 'seguridad'],
  [54, 'Manejo de extintores', 'Biosfera', 'seguridad'],
  [57, 'Manejo a la defensiva', 'Biosfera', 'seguridad'],
  [60, 'Equipo de respiración autónomo', 'Biosfera', 'seguridad'],
  [63, 'Uso de equipos de detección de gases', 'Biosfera', 'seguridad'],
  [66, 'Sobrevivencia en el mar', 'Biosfera', 'seguridad'],
  [69, 'Hojas de datos de seguridad de sustancias', 'Biosfera', 'seguridad'],
  [72, 'Clasificación y manejo de residuos peligrosos', 'Biosfera', 'ambiente'],
  [75, 'Dispositivos de detección y primeros auxilios', 'Biosfera', 'seguridad'],
  [78, 'Ley general del equilibrio ecológico', 'Biosfera', 'ambiente'],
  [81, 'Ley general para la prevención y gestión de residuos', 'Biosfera', 'ambiente'],
  [84, 'Teoría de la combustión', 'Biosfera', 'seguridad'],
  [87, 'Equipos de protección respiratoria', 'Biosfera', 'seguridad'],
  [90, 'Riesgos atmosféricos', 'Biosfera', 'seguridad'],
  [93, 'Riesgos en espacios confinados', 'Biosfera', 'seguridad'],
  [96, 'Identificación de áreas de riesgo en el trabajo', 'Biosfera', 'seguridad'],
  [99, 'Procedimientos críticos', 'Biosfera', 'seguridad'],
  [102, 'Análisis de seguridad en el trabajo (AST)', 'Biosfera', 'seguridad'],
  [105, 'Auditorías efectivas', 'Biosfera', 'gestion'],
  [108, 'Análisis causa raíz', 'Biosfera', 'gestion'],
  [111, 'Sistema de permisos para trabajos con riesgo', 'Biosfera', 'seguridad']
].map(([page, title, issuer, category]) => ({
  title, issuer, category,
  image: `assets/certificados/cert-${String(page).padStart(3, '0')}.webp`
}));

const categoryNames = {
  electricidad: 'Electricidad', automatizacion: 'Automatización',
  tecnologia: 'Tecnología', seguridad: 'Seguridad', ambiente: 'Ambiente', gestion: 'Gestión'
};
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

function showInDialog(index) {
  const certificate = visibleCertificates[index];
  modalImage.src = certificate.image;
  modalImage.alt = `Certificado de ${certificate.title}`;
  dialog.querySelector('.cert-dialog-category').textContent = categoryNames[certificate.category];
  dialog.querySelector('.cert-dialog-caption strong').textContent = certificate.title;
  dialog.querySelector('.cert-dialog-caption span').textContent = certificate.issuer;
  dialog.querySelector('.cert-dialog-caption small').textContent = `${index + 1} / ${visibleCertificates.length}`;
  dialog.dataset.index = String(index);
}

track.addEventListener('click', (event) => {
  const card = event.target.closest('.cert-card');
  if (!card) return;
  returnFocusTo = card;
  showInDialog(visibleCertificates.indexOf(certificates[Number(card.dataset.index)]));
  dialog.showModal();
});

dialog.querySelector('.cert-dialog-close').addEventListener('click', () => dialog.close());
dialog.querySelectorAll('[data-modal-direction]').forEach((button) => button.addEventListener('click', () => {
  const delta = button.dataset.modalDirection === 'next' ? 1 : -1;
  const next = (Number(dialog.dataset.index) + delta + visibleCertificates.length) % visibleCertificates.length;
  showInDialog(next);
  goTo(next);
}));
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => returnFocusTo?.focus());
dialog.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const next = (Number(dialog.dataset.index) + delta + visibleCertificates.length) % visibleCertificates.length;
    showInDialog(next);
    goTo(next);
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
