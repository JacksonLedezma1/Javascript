document.getElementById('patchBtn').addEventListener('click', async () => {
  /*
    Alternativa usando .then() y .catch():
    fetch('http://localhost:3000/posts/2', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Título modificado con PATCH' })
    })
      .then(response => {
        if (!response.ok) throw new Error('Error al actualizar el título.');
        return response.json();
      })
      .then(data => {
        document.getElementById('result').textContent = `Título actualizado: ${data.title}`;
      })
      .catch(error => {
        document.getElementById('result').textContent = error.message;
      });

    // La diferencia principal es que .then()/.catch() encadena promesas, mientras que async/await permite escribir el código de forma más secuencial y legible.
    // Ambos métodos son válidos, pero async/await es más moderno y fácil de leer cuando hay varias operaciones asíncronas.
  */
  // Realiza una petición PATCH para actualizar parcialmente el post con ID 2
  const response = await fetch('http://localhost:3000/posts/2', {
    method: 'PATCH', // Método HTTP PATCH para modificar parcialmente
    headers: { 'Content-Type': 'application/json' }, // Indica que se envía JSON
    body: JSON.stringify({ title: 'Título modificado con PATCH' }) // Solo se actualiza el título
  });

  // Si la respuesta es exitosa, muestra el título actualizado
  if (response.ok) {
    const data = await response.json();
    document.getElementById('result').textContent = `Título actualizado: ${data.title}`;
  } else {
    // Si ocurre un error, muestra mensaje de error
    document.getElementById('result').textContent = 'Error al actualizar el título.';
  }
});
