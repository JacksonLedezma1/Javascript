document.getElementById('deleteBtn').addEventListener('click', async () => {
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
