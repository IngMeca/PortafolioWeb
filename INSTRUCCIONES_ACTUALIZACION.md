# Actualización de certificados

El inventario registra 111 JPG originales con nombre descriptivo, curso y etiqueta. El carrusel muestra 47 cursos distintos. Se añadieron las vistas optimizadas de «Instalaciones eléctricas en baja tensión» e «Introducción a los sistemas de gestión integral».

1. Descarga o clona la rama `main` de `IngMeca/PortafolioWeb` en tu computadora.
2. Extrae el contenido del ZIP en la raíz de ese repositorio, aceptando reemplazar `certificados.js` y `certificados.html`.
3. En la terminal, dentro del repositorio, ejecuta `py aplicar_actualizacion.py` (Windows) o `python3 aplicar_actualizacion.py` (Linux/macOS).
4. Revisa `git status`, después ejecuta `git add -A`, `git commit -m "Organiza certificados y actualiza carrusel"` y `git push origin main`.

La reorganización deja los JPG originales en `assets/certificados/originales/` y conserva las vistas WebP que ya utiliza el carrusel. Algunos JPG contienen CURP o RFC y siguen siendo públicos en GitHub al aplicar este paquete; los nombres y etiquetas no ocultan esos datos. Las dos vistas nuevas del carrusel no muestran esos identificadores.
