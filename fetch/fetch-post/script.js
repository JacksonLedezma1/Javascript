document.getElementById('postForm').addEventListener('submit', async (e) => {
  // Previene el comportamiento por defecto del formulario (recargar la página)
  e.preventDefault();

  // Obtiene los valores de los campos de entrada
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  // Realiza una petición POST a la API local para crear un nuevo post
  const response = await fetch('http://localhost:3000/posts', {
    method: 'POST', // Especifica el método HTTP
    headers: { 'Content-Type': 'application/json' }, // Indica que se envía JSON
    body: JSON.stringify({ title, author }) // Convierte los datos a JSON
  });

  // Convierte la respuesta a JSON (el nuevo post creado)
  const data = await response.json();

  // Muestra el resultado en pantalla
  document.getElementById('result').textContent = `Post creado con ID: ${data.id}`;
});
