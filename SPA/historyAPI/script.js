// SPA usando History API (pushState y popstate)
// Permite URLs limpias y navegación sin recargar la página.

// Definimos las rutas y su contenido HTML
const routes = {
  '/': '<h1>Inicio</h1><p>Bienvenido a la página principal.</p>',
  '/about': '<h1>Acerca de</h1><p>SPA usando History API.</p>',
  '/contact': '<h1>Contacto</h1><p>Contáctanos en ejemplo@correo.com</p>'
};

// Función para renderizar la vista según la ruta actual
function renderRoute(path) {
  // Busca el contenido de la ruta, o muestra 404 si no existe
  const content = routes[path] || '<h1>404</h1><p>Página no encontrada.</p>';
  document.getElementById('app').innerHTML = content;
}

// Maneja los clicks en los enlaces del menú para evitar recarga y usar pushState
function onNavClick(e) {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    history.pushState({}, '', path); // Cambia la URL sin recargar
    renderRoute(path);
  }
}

// Escucha el evento popstate (cuando el usuario navega con el navegador)
window.addEventListener('popstate', () => {
  renderRoute(location.pathname);
});

// Escucha clicks en el menú
window.addEventListener('click', onNavClick);

// Renderiza la ruta actual al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  renderRoute(location.pathname);
});

/*
Explicación:
- Usamos history.pushState para cambiar la URL sin recargar.
- El evento popstate permite detectar navegación hacia atrás/adelante.
- Los enlaces usan data-link para evitar la recarga y manejar la navegación manualmente.
*/
