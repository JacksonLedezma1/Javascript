// SPA que carga vistas HTML externas usando fetch
// Cada ruta corresponde a un archivo HTML que se carga dinámicamente

// Definimos las rutas y el archivo HTML asociado
const routes = {
  '/': 'home.html',
  '/about': 'about.html',
  '/contact': 'contact.html'
};

// Función para cargar y mostrar la vista
async function loadRoute() {
  // Obtiene la ruta del hash (ej: #/about)
  const path = location.hash.slice(1) || '/';
  const file = routes[path] || '404.html';
  try {
    // Carga el archivo HTML correspondiente
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById('app').innerHTML = html;
  } catch (e) {
    document.getElementById('app').innerHTML = '<h1>Error cargando la vista</h1>';
  }
}

// Escucha cambios en el hash y carga la vista
window.addEventListener('hashchange', loadRoute);
window.addEventListener('DOMContentLoaded', loadRoute);

/*
Explicación:
- Cada vista es un archivo HTML separado (home.html, about.html, contact.html, 404.html).
- Cuando cambia el hash, se busca el archivo correspondiente y se inserta su contenido en el DOM.
- Permite separar el HTML de cada vista y cargarlo solo cuando se necesita.
*/
