# Javascript

## Métodos de SPA incluidos en la carpeta `SPA`

En este repositorio encontrarás diferentes formas de crear una Single Page Application (SPA) usando JavaScript puro. Cada carpeta dentro de `SPA` implementa un método distinto para el enrutamiento y renderizado de vistas. A continuación, una breve explicación de cada uno, resaltando los más fáciles de implementar:

### 1. `hash` (**Muy fácil**)
Enrutamiento por hash en la URL. El contenido de cada vista está embebido como string en el JS. Cuando cambia el hash (`#home`, `#about`, etc.), se muestra la vista correspondiente. Es el método más simple y directo para empezar con SPAs.

### 2. `manualRender` (**Muy fácil**)
Similar a `hash`, pero si no hay hash en la URL, muestra la vista `home` por defecto. También usa strings en el JS para las vistas. Es igual de sencillo y agrega una pequeña mejora de usabilidad.

### 3. `htmlTemplates`
Usa elementos `<template>` en el HTML para definir las vistas. El JS selecciona y clona el template correspondiente según el hash. Permite separar el HTML de cada vista, pero sigue usando el hash para el enrutamiento.

### 4. `historyAPI`
Utiliza la History API (`pushState` y `popstate`) para cambiar la URL y navegar entre vistas sin recargar la página y sin usar hash. Permite URLs limpias y una experiencia más profesional, pero requiere un poco más de lógica y configuración (por ejemplo, en el servidor).

### 5. `fetchTemplates`
Carga archivos HTML externos usando `fetch` según el hash de la URL. Cada vista es un archivo HTML independiente que se inserta dinámicamente en el DOM. Es útil para proyectos donde se quiere separar completamente el HTML de cada vista.

### 6. `componentRender`
Cada vista es una función JS (componente) que retorna HTML. El enrutador elige el componente según el hash y lo renderiza. Permite organizar el código en funciones reutilizables y separar la lógica de cada vista.

---

**Recomendación:** Si buscas aprender o prototipar rápidamente, comienza por los métodos `hash` o `manualRender`. Son los más fáciles de entender y modificar.

Cada enfoque muestra una manera diferente de gestionar el enrutamiento y el renderizado de vistas en una SPA sin frameworks externos. Estas técnicas pueden combinarse o adaptarse según las necesidades del proyecto.