document.getElementById('updateBtn').addEventListener('click', async () => {
  /*
    Alternativa usando .then() y .catch():
    fetch('http://localhost:3000/posts/2', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Post actualizado', author: 'Ana Actualizada' })
    })
      .then(response => {
        if (!response.ok) throw new Error('Error al actualizar el post.');
        return response.json();
      })
      .then(data => {
        document.getElementById('result').textContent = `Post actualizado: ${data.title} (Autor: ${data.author})`;
      })
      .catch(error => {
        document.getElementById('result').textContent = error.message;
      });

    // La diferencia principal es que .then()/.catch() encadena promesas, mientras que async/await permite escribir el código de forma más secuencial y legible.
    // Ambos métodos son válidos, pero async/await es más moderno y fácil de leer cuando hay varias operaciones asíncronas.
  */
  // Realiza una petición PUT para actualizar completamente el post con ID 2
  const response = await fetch('http://localhost:3000/posts/2', {
    method: 'PUT', // Método HTTP PUT para reemplazar el recurso
    headers: { 'Content-Type': 'application/json' }, // Indica que se envía JSON
    body: JSON.stringify({ title: 'Post actualizado', author: 'Ana Actualizada' }) // Nuevo contenido
  });

  // Si la respuesta es exitosa, muestra el post actualizado
  if (response.ok) {
    const data = await response.json();
    document.getElementById('result').textContent = `Post actualizado: ${data.title} (Autor: ${data.author})`;
  } else {
    // Si ocurre un error, muestra mensaje de error
    document.getElementById('result').textContent = 'Error al actualizar el post.';
  }
});
