// Diccionario de rutas: asocia cada ruta con el ID de su plantilla
const routes = {
  "/": "home",
  "/about": "about",
  "/contact": "contact",
};

// Función para cargar la plantilla correspondiente a la ruta actual
function loadRoute() {
  // Obtiene el hash de la URL, eliminando el símbolo '#'
  const path = location.hash.slice(1) || "/";

  // Busca el ID de la plantilla asociada a la ruta
  const templateId = routes[path] || "home"; // Si no encuentra, carga 'home'

  // Obtiene el elemento <template> correspondiente
  const template = document.getElementById(templateId);

  // Clona el contenido del template
  const view = template.content.cloneNode(true);

  // Reemplaza el contenido del contenedor principal <main id="app">
  const app = document.getElementById("app");
  app.innerHTML = "";       // Limpia contenido anterior
  app.appendChild(view);    // Añade la nueva vista
}

// Escucha cambios en el hash de la URL y carga la ruta correspondiente
window.addEventListener("hashchange", loadRoute);

// Carga la ruta adecuada cuando el DOM esté completamente cargado
window.addEventListener("DOMContentLoaded", loadRoute);
