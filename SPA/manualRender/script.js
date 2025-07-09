// SPA con enrutamiento por hash y vista predeterminada
// Similar a hash/script.js pero muestra 'home' si no hay hash

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

function renderRoute() {
  // Si no hay hash, muestra 'home' por defecto
  const hash = location.hash.replace('#', '') || 'home';
  const content = routes[hash] || `
    <h1>404</h1>
    <p>Página no encontrada.</p>
  `;
  document.getElementById('app').innerHTML = content;
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('load', renderRoute);

/*

/*
Explicación:
- El enrutamiento es por hash, igual que en hash/script.js.
- Si la URL no tiene hash, se muestra la vista 'home' por defecto.
- Las vistas están embebidas como strings multilínea.
- Si la ruta no existe, se muestra una vista 404.
*/
