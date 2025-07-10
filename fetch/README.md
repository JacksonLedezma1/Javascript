# Ejemplos de uso de fetch con json-server

Esta carpeta contiene ejemplos prácticos de cómo utilizar la API `fetch` en JavaScript para interactuar con un servidor simulado usando [json-server](https://github.com/typicode/json-server). Cada subcarpeta muestra un caso de uso diferente, con archivos HTML, CSS y JavaScript comentados y explicados.

## Estructura de la carpeta

- **fetch-get/**: Ejemplo de petición GET para obtener datos (posts) y mostrarlos en una lista.
- **fetch-post/**: Ejemplo de petición POST para crear un nuevo post mediante un formulario.
- **fetch-delete/**: Ejemplo de petición DELETE para eliminar un post existente.
- **fetch-put/**: Ejemplo de petición PUT para actualizar completamente un post.
- **fetch-patch/**: Ejemplo de petición PATCH para actualizar parcialmente un post (solo el título).
- **fetch-error/**: Ejemplo de manejo de errores al intentar acceder a un recurso inexistente.
- **fetch-async-await/**: Ejemplo de uso de async/await con fetch para obtener comentarios.
- **db.json**: Archivo de base de datos para json-server, simula los recursos de una API REST.

## Explicación de cada ejemplo

### fetch-get
- Realiza una petición GET a `/posts`.
- Muestra los posts obtenidos en una lista.
- Código comentado para entender cada paso.

### fetch-post
- Envía un formulario para crear un nuevo post usando POST a `/posts`.
- Muestra el ID del post creado.

### fetch-delete
- Elimina el post con ID 1 usando DELETE a `/posts/1`.
- Muestra un mensaje de éxito o error.

### fetch-put
- Actualiza completamente el post con ID 2 usando PUT a `/posts/2`.
- Reemplaza el post por un nuevo objeto.

### fetch-patch
- Actualiza solo el título del post con ID 2 usando PATCH a `/posts/2`.
- Solo se modifica el campo `title`.

### fetch-error
- Intenta acceder a un recurso inexistente (`/noexiste`).
- Muestra el mensaje de error recibido.

### fetch-async-await
- Obtiene comentarios de `/comments` usando async/await.
- Muestra los comentarios en una lista.

## Estructura de db.json

```json
{
  "posts": [
    { "id": 1, "title": "Primer post", "author": "Juan" },
    { "id": 2, "title": "Segundo post", "author": "Ana" }
  ],
  "comments": [
    { "id": 1, "body": "Comentario 1", "postId": 1 },
    { "id": 2, "body": "Comentario 2", "postId": 1 }
  ]
}
```
- **posts**: Lista de publicaciones, cada una con `id`, `title` y `author`.
- **comments**: Lista de comentarios, cada uno con `id`, `body` y `postId` (relacionado con un post).

## Cómo usar estos ejemplos

1. Instala json-server si no lo tienes:
   ```bash
   npm install -g json-server
   ```
2. Inicia el servidor en la carpeta `fetch`:
   ```bash
   npx json-server --watch db.json --port 3000
   ```
3. Abre cada ejemplo en tu navegador y sigue las instrucciones de la interfaz.

---
Todos los archivos JavaScript, HTML y CSS están comentados para facilitar el aprendizaje.
