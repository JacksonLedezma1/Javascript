// SPA con enrutamiento por hash y vistas embebidas en el JS
// Cada ruta es una clave en el objeto routes y su valor es el HTML a mostrar

const routes = {
  home: `<h1>Bienvenido a la página de inicio</h1><p>Esta es la vista principal.</p>`,
  about: `<h1>Acerca de</h1><p>Esta SPA fue hecha con JavaScript puro.</p>`,
  contact: `<h1>Contacto</h1><p>Puedes contactarnos en ejemplo@correo.com</p>`
};

// Renderiza la vista correspondiente al hash actual
function renderRoute() {
  // Obtiene el hash actual (sin #)
  const hash = location.hash.replace('#', '');
  // Busca la vista en routes, si no existe muestra 404
  const content = routes[hash] || `<h1>404</h1><p>Página no encontrada.</p>`;
  document.getElementById('app').innerHTML = content;
}

// Escucha cambios en el hash y carga la vista
window.addEventListener('hashchange', renderRoute);
// Renderiza la vista correcta al cargar la página
window.addEventListener('load', renderRoute);

/*

/*
Explicación:
- El enrutamiento se basa en el hash de la URL (ej: #home, #about).
- Las vistas están embebidas como strings en el JS.
- Cuando cambia el hash, se busca la vista correspondiente y se inserta en el DOM.
- Si la ruta no existe, se muestra un mensaje 404.
*/
