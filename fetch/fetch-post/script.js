document.getElementById('postForm').addEventListener('submit', async (e) => {
  /*
    Alternativa usando .then() y .catch():
    document.getElementById('postForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author })
      })
        .then(response => response.json())
        .then(data => {
          document.getElementById('result').textContent = `Post creado con ID: ${data.id}`;
        })
        .catch(error => {
          document.getElementById('result').textContent = 'Error: ' + error.message;
        });
    });

    // La diferencia principal es que .then()/.catch() encadena promesas, mientras que async/await permite escribir el código de forma más secuencial y legible.
    // Ambos métodos son válidos, pero async/await es más moderno y fácil de leer cuando hay varias operaciones asíncronas.
  */
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
