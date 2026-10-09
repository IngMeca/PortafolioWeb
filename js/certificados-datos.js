const certificates = [
  [3, 'Fundamentos de metrología', 'CADISAC', 'industrial'],
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
})).concat([
  {
    title: 'Instalaciones eléctricas en baja tensión',
    issuer: 'I.T.E. Capacitaciones',
    category: 'electricidad',
    image: 'assets/certificados/instalaciones-electricas-baja-tension.webp'
  },
  {
    title: 'Introducción a los sistemas de gestión integral',
    issuer: 'MRE Consultores',
    category: 'gestion',
    image: 'assets/certificados/introduccion-sistemas-gestion-integral.webp'
  }
]);

const documentosPorCurso = [
  ['Seguridad, salud en el trabajo y protección ambiental', 'seguridad/01-seguridad-salud-trabajo-proteccion-ambiental'],
  ['Reglamento federal de seguridad e higiene', 'seguridad/02-reglamento-federal-seguridad-higiene-medio-ambiente-trabajo'],
  ['Reglamento de seguridad e higiene de PEMEX', 'seguridad/03-reglamento-seguridad-higiene-pemex'],
  ['Básico de seguridad', 'seguridad/04-basico-seguridad'],
  ['Planes de respuesta a emergencias', 'seguridad/05-conceptos-basicos-planes-respuesta-emergencias'],
  ['Conceptos básicos sobre protección ambiental', 'ambiente/06-conceptos-basicos-proteccion-ambiental'],
  ['Primeros auxilios, hemorragias y RCP', 'seguridad/07-primeros-auxilios-hemorragias-rcp'],
  ['Manejo de extintores', 'seguridad/08-manejo-extintores'],
  ['Manejo a la defensiva', 'seguridad/09-manejo-defensiva'],
  ['Equipo de respiración autónomo', 'seguridad/10-equipo-respiracion-autonomo'],
  ['Uso de equipos de detección de gases', 'seguridad/11-deteccion-gases-explosimetro-oxigeno-toxicidad'],
  ['Sobrevivencia en el mar', 'seguridad/12-sobrevivencia-mar'],
  ['Hojas de datos de seguridad de sustancias', 'seguridad/13-hojas-datos-seguridad-sustancias'],
  ['Clasificación y manejo de residuos peligrosos', 'ambiente/14-clasificacion-manejo-residuos-peligrosos'],
  ['Dispositivos de detección y primeros auxilios', 'seguridad/15-dispositivos-deteccion-primeros-auxilios'],
  ['Ley general del equilibrio ecológico', 'ambiente/16-ley-equilibrio-ecologico-proteccion-ambiente'],
  ['Ley general para la prevención y gestión de residuos', 'ambiente/17-ley-prevencion-gestion-integral-residuos'],
  ['Teoría de la combustión', 'seguridad/18-teoria-combustion'],
  ['Equipos de protección respiratoria', 'seguridad/19-clasificacion-uso-proteccion-respiratoria'],
  ['Riesgos atmosféricos', 'seguridad/20-riesgos-atmosfericos'],
  ['Riesgos en espacios confinados', 'seguridad/21-riesgos-espacios-confinados'],
  ['Identificación de áreas de riesgo en el trabajo', 'seguridad/22-identificacion-areas-riesgo-trabajo'],
  ['Procedimientos críticos', 'seguridad/23-procedimientos-criticos'],
  ['Análisis de seguridad en el trabajo (AST)', 'seguridad/24-analisis-seguridad-trabajo-ast'],
  ['Auditorías efectivas', 'gestion/25-auditorias-efectivas'],
  ['Análisis causa raíz', 'gestion/26-analisis-causa-raiz'],

];

for (const [title, folder] of documentosPorCurso) {
  const certificate = certificates.find(item => item.title === title);

  if (!certificate) {
    console.warn(`No se encontró el curso: ${title}`);
    continue;
  }

  const filename = folder.split('/').pop();
  const base = `assets/certificados/${folder}/${folder.split('/').pop()}`;

  certificate.image = `${base}-constancia.jpg`;
  certificate.images = [
    certificate.image,
    `${base}-dc3-anverso.jpg`,
    `${base}-dc3-reverso.jpg`
  ];
}

// 27: Credencial (anverso y reverso)
const credencialAnverso =
  'assets/certificados/seguridad/27-credencial-sistema-permisos-trabajos-riesgo/27-credencial-sistema-permisos-trabajos-riesgo-anverso.jpg';
const credencialReverso =
  'assets/certificados/seguridad/27-credencial-sistema-permisos-trabajos-riesgo/27-credencial-sistema-permisos-trabajos-riesgo-reverso.jpg';

certificates.push({
  title: 'Credencial del sistema de permisos para trabajos con riesgo',
  issuer: '',
  category: 'seguridad',
  image: credencialAnverso,
  images: [credencialAnverso, credencialReverso]
});

// 28: Constancia y acreditación (estos archivos empiezan por "27-")
const permisos = certificates.find(
  certificate => certificate.title === 'Sistema de permisos para trabajos con riesgo'
);

if (permisos) {
  const constancia =
    'assets/certificados/seguridad/27-sistema-permisos-trabajos-riesgo/27-sistema-permisos-trabajos-riesgo-constancia.jpg';
  const acreditacion =
    'assets/certificados/seguridad/27-sistema-permisos-trabajos-riesgo/27-sistema-permisos-trabajos-riesgo-acreditacion.jpg';

  permisos.image = constancia;
  permisos.images = [constancia, acreditacion];
}

const auditorLider = certificates.find(
  certificate => certificate.title === 'Auditor líder interno en sistemas integrados'
);

if (auditorLider) {
  auditorLider.image =
    'assets/certificados/normas/atr-auditor-lider-interno-certificado.jpg';
  auditorLider.images = [auditorLider.image];
}

const gestionTiempo = certificates.find(
  certificate => certificate.title === 'Gestión efectiva del tiempo'
);

if (gestionTiempo) {
  gestionTiempo.image =
    'assets/certificados/tecnologia/platzi-gestion-efectiva-tiempo.jpg';
  gestionTiempo.images = [gestionTiempo.image];
}

const imagenesRestantes = [
  ['Fundamentos de metrología',
    'industriales/cadisac_fundamentos_metrologia_dc3_frontal.jpg',
    'industriales/cadisac_fundamentos_metrologia_dc3_reverso.jpg'],

  ['Introducción a Cisco Packet Tracer',
    'tecnologia/cisco-introduccion-packet-tracer.jpg'],

  ['Instalaciones eléctricas según NOM-001-SEDE',
    'electricidad/cs_instalacion_electrica_certificado.jpg',
    'electricidad/cs_instalacion_electrica_constancia.jpg',
    'electricidad/cs_instalacion_electrica_dc3_frontal.jpg',
    'electricidad/cs_instalacion_electrica_dc3_reverso.jpg'],

  ['Controladores lógicos programables',
    'automatizacion/cs_automatizacion_plc_certificado.jpg',
    'automatizacion/cs_automatizacion_plc_constancia.jpg',
    'automatizacion/cs_automatizacion_plc_dc3_frontal.jpg',
    'automatizacion/cs_automatizacion_plc_dc3_reverso.jpg'],

  ['Instalaciones eléctricas en baja tensión',
    'electricidad/ite_instalacion_electrica_constancia.jpg',
    'electricidad/ite_instalacion_electrica_dc3.jpg'],

  ['Introducción a los sistemas de gestión integral',
    'normas/mre-introduccion-sistemas-gestion-integral-diploma.jpg',
    'normas/mre-introduccion-sistemas-gestion-integral-dc3.jpg'],

  ['Estrategias para aprender en línea',
    'tecnologia/platzi-estrategias-aprender-en-linea.jpg'],

  ['Computación básica',
    'tecnologia/platzi-computacion-basica.jpg'],

  ['CSS Grid básico',
    'tecnologia/platzi-css-grid-basico.jpg'],

  ['Diseño para programadores',
    'tecnologia/platzi-diseno-programadores.jpg'],

  ['Técnicas efectivas de estudio',
    'tecnologia/platzi-tecnicas-efectivas-estudio.jpg'],

  ['Frontend Developer',
    'tecnologia/platzi-frontend-developer.jpg'],

  ['Curso definitivo de HTML y CSS',
    'tecnologia/platzi-html-css.jpg'],

  ['Curso práctico de HTML y CSS',
    'tecnologia/platzi-html-css-practico.jpg'],

  ['Pensamiento lógico: algoritmos y diagramas de flujo',
    'tecnologia/platzi-algoritmos-diagramas-flujo.jpg'],

  ['Pensamiento lógico: datos, estructuras y funciones',
    'tecnologia/platzi-pensamiento-logico-datos-estructuras-funciones.jpg'],

  ['Maquetación en CSS',
    'tecnologia/platzi-maquetacion-css.jpg'],

  ['Introducción a la terminal y línea de comandos',
    'tecnologia/platzi-terminal-linea-comandos.jpg']
];

for (const [title, ...files] of imagenesRestantes) {
  const certificate = certificates.find(item => item.title === title);

  if (!certificate) {
    console.warn(`No se encontró el curso: ${title}`);
    continue;
  }

  certificate.images = files.map(file => `assets/certificados/${file}`);
  certificate.image = certificate.images[0];
}

const categoryNames = {
  electricidad: 'Electricidad', automatizacion: 'Automatización',
  tecnologia: 'Tecnología', seguridad: 'Seguridad', ambiente: 'Ambiente', gestion: 'Gestión'
};
