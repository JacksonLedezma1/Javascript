document.getElementById('loadComments').addEventListener('click', async () => {
  /*
    Alternativa usando .then() y .catch():
    fetch('http://localhost:3000/comments')
      .then(response => {
        if (!response.ok) throw new Error('No se pudieron cargar los comentarios');
        return response.json();
      })
      .then(comments => {
        const list = document.getElementById('commentsList');
        list.innerHTML = '';
        comments.forEach(comment => {
          const li = document.createElement('li');
          li.textContent = `${comment.body} (postId: ${comment.postId})`;
          list.appendChild(li);
        });
      })
      .catch(error => {
        alert(error.message);
      });

    // La diferencia principal es que .then()/.catch() encadena promesas, mientras que async/await permite escribir el código de forma más secuencial y legible.
    // Ambos métodos son válidos, pero async/await es más moderno y fácil de leer cuando hay varias operaciones asíncronas.
  */
  try {
    // Realiza una petición GET para obtener los comentarios
    const response = await fetch('http://localhost:3000/comments');

    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error('No se pudieron cargar los comentarios');

    // Convierte la respuesta a JSON (arreglo de comentarios)
    const comments = await response.json();

    // Selecciona el elemento <ul> donde se mostrarán los comentarios
    const list = document.getElementById('commentsList');
    // Limpia la lista antes de mostrar los nuevos comentarios
    list.innerHTML = '';

    // Recorre cada comentario y lo agrega como <li> a la lista
    comments.forEach(comment => {
      const li = document.createElement('li');
      li.textContent = `${comment.body} (postId: ${comment.postId})`;
      list.appendChild(li);
    });
  } catch (error) {
    // Si ocurre un error, muestra una alerta con el mensaje
    alert(error.message);
  }
});
