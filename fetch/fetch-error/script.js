document.getElementById('loadData').addEventListener('click', async () => {
  try {
    // Intenta hacer una petición GET a un recurso que no existe
    const response = await fetch('http://localhost:3000/noexiste');

    // Si la respuesta no es exitosa (404, 500, etc.), lanza un error
    if (!response.ok) throw new Error('Recurso no encontrado');

    // Si por alguna razón la petición tiene éxito, muestra los datos
    const data = await response.json();
    document.getElementById('errorMsg').textContent = JSON.stringify(data);
  } catch (error) {
    // Si ocurre un error, muestra el mensaje de error en pantalla
    document.getElementById('errorMsg').textContent = 'Error: ' + error.message;
  }
});
