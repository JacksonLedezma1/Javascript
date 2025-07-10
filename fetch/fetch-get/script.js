document.getElementById('loadPosts').addEventListener('click', async () => {
  /*
    Alternativa usando .then() y .catch():
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(posts => {
        const list = document.getElementById('postsList');
        list.innerHTML = '';
        posts.forEach(post => {
          const li = document.createElement('li');
          li.textContent = `${post.title} (Autor: ${post.author})`;
          list.appendChild(li);
        });
      })
      .catch(error => {
        // Manejo de errores
        alert('Error al cargar los posts: ' + error.message);
      });

    // La diferencia principal es que .then()/.catch() encadena promesas, mientras que async/await permite escribir el código de forma más secuencial y legible.
    // Ambos métodos son válidos, pero async/await es más moderno y fácil de leer cuando hay varias operaciones asíncronas.
  */
  // Realiza una petición GET a la API local de json-server para obtener los posts
  const response = await fetch('http://localhost:3000/posts'); // fetch hace la petición HTTP

  // Convierte la respuesta a formato JSON (arreglo de posts)
  const posts = await response.json();

  // Selecciona el elemento <ul> donde se mostrarán los posts
  const list = document.getElementById('postsList');
  // Limpia el contenido anterior de la lista
  list.innerHTML = '';

  // Recorre cada post recibido y lo agrega como <li> a la lista
  posts.forEach(post => {
    // Crea un elemento de lista
    const li = document.createElement('li');
    // Muestra el título y autor del post
    li.textContent = `${post.title} (Autor: ${post.author})`;
    // Agrega el <li> al <ul>
    list.appendChild(li);
  });
});
