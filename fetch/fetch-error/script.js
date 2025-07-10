document.getElementById('loadData').addEventListener('click', async () => {
  /*
    Alternativa usando .then() y .catch():
    fetch('http://localhost:3000/noexiste')
      .then(response => {
        if (!response.ok) throw new Error('Recurso no encontrado');
        return response.json();
      })
      .then(data => {
        document.getElementById('errorMsg').textContent = JSON.stringify(data);
      })
      .catch(error => {
        document.getElementById('errorMsg').textContent = 'Error: ' + error.message;
      });

    // La diferencia principal es que .then()/.catch() encadena promesas, mientras que async/await permite escribir el código de forma más secuencial y legible.
    // Ambos métodos son válidos, pero async/await es más moderno y fácil de leer cuando hay varias operaciones asíncronas.
  */
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
