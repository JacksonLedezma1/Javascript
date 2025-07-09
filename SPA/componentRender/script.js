// SPA basada en componentes JS simples
// Cada "componente" es una función que retorna HTML

// Definimos los componentes como funciones
function Home() {
  return `<h1>Inicio</h1><p>Bienvenido a la página principal.</p>`;
}
function About() {
  return `<h1>Acerca de</h1><p>SPA con componentes JS.</p>`;
}
function Contact() {
  return `<h1>Contacto</h1><p>Contáctanos en ejemplo@correo.com</p>`;
}
function NotFound() {
  return `<h1>404</h1><p>Página no encontrada.</p>`;
}

// Mapeo de rutas a componentes
const routes = {
  home: Home,
  about: About,
  contact: Contact
};

// Renderiza el componente según el hash
function renderRoute() {
  const hash = location.hash.replace('#', '') || 'home';
  const component = routes[hash] || NotFound;
  document.getElementById('app').innerHTML = component();
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('DOMContentLoaded', renderRoute);

/*
Explicación:
- Cada vista es una función (componente) que retorna HTML.
- El enrutador elige el componente según el hash y lo renderiza.
- Permite organizar el código en funciones reutilizables y separar la lógica de cada vista.
*/
