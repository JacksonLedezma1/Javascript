document.getElementById('patchBtn').addEventListener('click', async () => {
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
