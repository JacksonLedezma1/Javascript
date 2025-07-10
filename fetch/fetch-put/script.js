document.getElementById('updateBtn').addEventListener('click', async () => {
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
