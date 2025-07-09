// Definimos un objeto llamado "routes" que contiene las vistas disponibles de la SPA.
// Cada propiedad representa una "ruta" (vista) y contiene HTML como valor.
const routes = {
  home: "<h1>Bienvenido a la página de inicio</h1><p>Esta es la vista principal.</p>",
  about: "<h1>Acerca de</h1><p>Esta SPA fue hecha con JavaScript puro.</p>",
  contact: "<h1>Contacto</h1><p>Puedes contactarnos en ejemplo@correo.com</p>",
};

// Función que se encarga de renderizar la vista correspondiente al hash actual de la URL
function renderRoute() {
  // Obtiene el valor actual del hash, eliminando el símbolo "#"
  const hash = location.hash.replace("#", "");

  // Busca el contenido correspondiente en el objeto "routes"
  // Si no existe esa ruta, se muestra un mensaje de "404 Página no encontrada"
  const content = routes[hash] || "<h1>404</h1><p>Página no encontrada.</p>";

  // Inserta el contenido en el div con id="app"
  document.getElementById("app").innerHTML = content;
}

// Escucha el evento "hashchange" (cuando cambia el hash en la URL)
// y vuelve a renderizar la vista correspondiente
window.addEventListener("hashchange", renderRoute);

// También renderiza la vista correcta cuando la página se carga por primera vez
window.addEventListener("load", renderRoute);
