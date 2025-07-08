// Definimos un objeto que contiene las "vistas" de nuestra SPA.
// Cada clave representa una ruta (ej: "home") y su valor es contenido HTML.
const routes = {
  home: `
    <h1>Bienvenido a la página de inicio</h1>
    <p>Esta es la vista principal.</p>
  `,
  about: `
    <h1>Acerca de</h1>
    <p>Esta SPA fue hecha con JavaScript puro.</p>
  `,
  contact: `
    <h1>Contacto</h1>
    <p>Puedes contactarnos en ejemplo@correo.com</p>
  `
};

// Esta función se encarga de renderizar el contenido correcto
// según el "hash" actual en la URL (ej: #home, #about).
function renderRoute() {
  // Obtiene el valor del hash sin el símbolo "#"
  // Si no hay hash, se usa "home" como ruta predeterminada
  const hash = location.hash.replace('#', '') || 'home';

  // Busca la ruta correspondiente en el objeto "routes"
  // Si no existe, se muestra una vista 404
  const content = routes[hash] || `
    <h1>404</h1>
    <p>Página no encontrada.</p>
  `;

  // Inserta el contenido en el contenedor principal
  document.getElementById('app').innerHTML = content;
}

// Escucha el evento "hashchange", que se dispara cuando cambia el fragmento de la URL
window.addEventListener('hashchange', renderRoute);

// También ejecuta la función cuando se carga la página por primera vez
window.addEventListener('load', renderRoute);
