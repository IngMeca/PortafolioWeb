# Actualización del portafolio

1. Guarda un commit de respaldo en tu rama ventanas-nuevas antes de copiar.
2. Copia los HTML y las carpetas css/, js/ y assets/ de este paquete a la raíz del proyecto, combinando carpetas. Conserva tu carpeta assets/certificados/ completa: no viene incluida en este paquete. No borres archivos auxiliares ni imágenes existentes.
3. Abre index.html con Live Server. Las páginas usan ahora css/ y js/ en todas sus referencias.
4. Revisa Experiencia: filtros por área y detalles desplegables. Las fechas y cargos provienen del CV actualizado; se conservan sus solapamientos de fechas. El empleo SGI indica actualidad y término previsto en noviembre de 2026.
5. En js/perfil-datos.js define el nivel de cada herramienta: null = por definir; 1 = básico; 2 = intermedio; 3 = avanzado. Las barras son una representación de esa escala, no una medición porcentual. SolidWorks se incluye por tu petición; el CV no establece niveles explícitos.
6. El catálogo compartido vive en js/certificados-datos.js. Alimenta los cursos de Inicio y el visor de Certificados. El curso de Python, incluido en el CV pero sin ruta de imagen proporcionada, está en cursosAdicionales de js/perfil-datos.js. Al incorporar su certificado al catálogo compartido, retíralo de cursosAdicionales para evitar duplicarlo.
7. Los archivos contenido.css, contenido.js y contenido-datos.js no estaban en el envío. Se prepararon reemplazos compatibles. Si tus versiones locales contienen publicaciones, respáldalas y traslada su contenido al esquema nuevo antes de reemplazarlas.
8. Blog y Proyectos son independientes. Edita js/contenido-datos.js: id único, title, category, summary, tags, sections e images. Cada id permite compartir una URL como blog.html#nota-rutas. Los textos incluidos son ejemplos señalados como tales; cámbialos por publicaciones propias antes de publicar y establece ejemplo:false. En proyectos, status puede ser En desarrollo, Terminado o En mejora.
9. Para evidencias, agrega images: [{src:'assets/proyectos/foto.jpg',alt:'Descripción de la evidencia'}]. Las miniaturas abren una imagen ampliada. Las imágenes generales de portada son las que enviaste, no evidencias de proyectos.
10. Idiomas se mantiene como información breve (español nativo e inglés básico); se retira la atribución A2, porque el CV solo dice básico.

## Cambios técnicos

- Corrección de [hidden] para que los filtros prevalezcan sobre display:grid.
- JavaScript de Inicio con filtros acotados a Experiencia, pestañas accesibles y paginación de cursos.
- Rutas CSS ajustadas a ../assets/; retirada de importación de Tailwind sin compilador.
- Navegación a Blog y Proyectos en Inicio y Certificados.
- Se conserva el visor de certificados y sus rutas originales. Sus imágenes no pueden verificarse sin la carpeta completa assets/certificados/.
- No se realizó commit, merge ni despliegue en tu repositorio.

## Validación de esta entrega

Comprobadas sintaxis de todos los JavaScript, rutas de hojas de estilo y scripts en los cuatro HTML, filtros de experiencia (7 empleos), cambio de pestañas, búsqueda de Python, paginación y carga de las seis herramientas. También comprobadas carga y búsqueda sin resultados de Blog y Proyectos con un DOM de pruebas. La revisión visual móvil y los diálogos en navegador real quedan pendientes: el navegador no pudo instalarse en este entorno. Revisa con Live Server antes de hacer merge.
