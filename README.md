# Javascript

## Explicación de los archivos JavaScript para SPA

En este repositorio encontrarás tres implementaciones diferentes de una Single Page Application (SPA) usando JavaScript puro. Cada carpeta contiene un enfoque distinto para el enrutamiento y renderizado de vistas:

### 1. `SPA/hash/script.js`
Este archivo implementa un enrutador muy simple basado en el hash de la URL. El objeto `routes` contiene las vistas como propiedades, donde cada clave es el nombre de la ruta y el valor es el HTML a mostrar. Cuando cambia el hash (`#home`, `#about`, etc.), la función `renderRoute` busca la vista correspondiente y la inserta en el elemento con id `app`. Si la ruta no existe, muestra un mensaje 404. El evento `hashchange` y el evento `load` aseguran que la vista correcta se muestre al navegar o recargar la página.

### 2. `SPA/manualRender/script.js`
Esta versión es similar a la anterior, pero añade una mejora: si no hay hash en la URL, muestra la vista `home` por defecto. El objeto `routes` almacena las vistas como plantillas de string multilínea. La función `renderRoute` determina la ruta actual y renderiza el contenido adecuado en el elemento `app`. Si la ruta no existe, muestra una vista 404. También utiliza los eventos `hashchange` y `load` para actualizar la vista.

### 3. `SPA/htmlTemplates/script.js`
Aquí se utiliza el elemento `<template>` de HTML para definir las vistas. El objeto `routes` asocia rutas como `/`, `/about` y `/contact` con los IDs de los templates. La función `loadRoute` obtiene el hash de la URL, busca el template correspondiente, clona su contenido y lo inserta en el elemento `app`. Si la ruta no existe, por defecto carga la vista `home`. El evento `hashchange` y el evento `DOMContentLoaded` aseguran que la vista se actualice correctamente.

Cada enfoque muestra una manera diferente de gestionar el enrutamiento y el renderizado de vistas en una SPA sin frameworks externos.