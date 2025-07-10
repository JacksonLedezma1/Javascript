document.getElementById('deleteBtn').addEventListener('click', async () => {
  /*
    Alternativa usando .then() y .catch():
    fetch('http://localhost:3000/posts/1', { method: 'DELETE' })
      .then(response => {
        if (!response.ok) throw new Error('Error al eliminar el post.');
        document.getElementById('result').textContent = 'Post eliminado correctamente.';
      })
      .catch(error => {
        document.getElementById('result').textContent = error.message;
      });

    // La diferencia principal es que .then()/.catch() encadena promesas, mientras que async/await permite escribir el código de forma más secuencial y legible.
    // Ambos métodos son válidos, pero async/await es más moderno y fácil de leer cuando hay varias operaciones asíncronas.
  */
  // Realiza una petición DELETE para eliminar el post con ID 1
  const response = await fetch('http://localhost:3000/posts/1', { method: 'DELETE' });

  // Si la respuesta es exitosa, muestra mensaje de éxito
  if (response.ok) {
    document.getElementById('result').textContent = 'Post eliminado correctamente.';
  } else {
    // Si ocurre un error, muestra mensaje de error
    document.getElementById('result').textContent = 'Error al eliminar el post.';
  }
});
