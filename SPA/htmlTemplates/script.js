// SPA que usa plantillas HTML (<template>) para las vistas
// El enrutamiento es por hash, pero el HTML de cada vista está en el propio HTML como <template>

const routes = {
  '/': 'home',
  '/about': 'about',
  '/contact': 'contact'
};

function loadRoute() {
  // Obtiene la ruta del hash (ej: #/about)
  const path = location.hash.slice(1) || '/';
  // Busca el ID del template asociado a la ruta
  const templateId = routes[path] || 'home';
  // Obtiene el elemento <template> correspondiente
  const template = document.getElementById(templateId);
  if (template) {
    // Clona el contenido del template y lo inserta en el DOM
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
  } else {
    // Si no existe el template, muestra 404
    document.getElementById('app').innerHTML = '<h1>404</h1><p>Página no encontrada.</p>';
  }
}

window.addEventListener('hashchange', loadRoute);
window.addEventListener('DOMContentLoaded', loadRoute);

/*

/*
Explicación:
- El enrutamiento es por hash (ej: #/about).
- Cada vista es un <template> en el HTML, identificado por un id.
- Cuando cambia el hash, se clona el contenido del template y se inserta en el DOM.
- Si la ruta o el template no existen, se muestra un mensaje 404.
*/
