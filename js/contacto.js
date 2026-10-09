// Pega aquí la URL completa de tu perfil de GitHub.
const githubPerfil = "";
if (githubPerfil) {
  try {
    const url = new URL(githubPerfil);
    if (url.protocol === "https:" && url.hostname === "github.com" && url.pathname !== "/") {
      const enlace = document.createElement("a");
      enlace.className = "button ghost";
      enlace.href = url.href;
      enlace.target = "_blank";
      enlace.rel = "noopener noreferrer";
      enlace.textContent = "GitHub ↗";
      document.getElementById("github-contact")?.replaceWith(enlace);
    }
  } catch { console.warn("Revisa la URL de GitHub en js/contacto.js"); }
}
