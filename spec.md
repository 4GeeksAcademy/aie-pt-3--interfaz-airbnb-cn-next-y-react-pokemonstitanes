# Especificación de implementación

## Página de inicio (`/`)

- Implementa la barra de navegación superior: logo, campo de búsqueda e iconos del menú de usuario.

- El campo de búsqueda debe usar `useState` para guardar el texto escrito y filtrar las tarjetas visibles en tiempo real mientras el usuario escribe. La lista de tarjetas es tu estado local — actualízala en cada pulsación.

- Implementa la fila horizontal de filtros por categoría debajo de la navbar (icono + etiqueta: Playa, Mansiones, Tendencias, etc.). Usa `useState` para guardar la categoría activa y resaltarla visualmente.

- Implementa una cuadrícula responsiva de tarjetas de alojamiento. Cada tarjeta debe mostrar: placeholder de foto, título, precio por noche y valoración con estrellas.

- Usa `useEffect` para simular la carga de los datos cuando la página se monta: empieza con una lista vacía, pon un estado de carga a `true` y, tras un breve `setTimeout` (p.ej. 1 segundo), asigna los datos y marca la carga como `false`. Muestra un indicador de carga mientras los datos no estén disponibles.

- La cuadrícula debe mostrarse en una sola columna en móvil y expandirse a varias columnas en escritorio.

## Página de catálogo (`/catalog`)

- Implementa la cabecera de resultados: número de resultados y un control de ordenación (Ascendente/Descendente por precio). Usa `useState` para guardar el orden seleccionado y reordenar las tarjetas mostradas en consecuencia.

- Reutiliza el componente de tarjeta de alojamiento de la página de inicio.

- Añade un área de mapa a la derecha de la lista de tarjetas (escritorio) o debajo de las tarjetas (móvil). Por defecto, muestra un placeholder con estilo: un recuadro gris con el texto "Mapa" es suficiente.

- Reto opcional (solo si has completado todos los demás requisitos): sustituye el placeholder por un mapa interactivo real usando una librería como `react-leaflet` o la API de Google Maps. Muestra cada alojamiento como un pin en el mapa usando sus coordenadas.

## Página de detalle de habitación (`/rooms/[id]`)

- Usa `useEffect` para cargar los datos de la habitación cuando el componente se monta, usando el id de la URL. Simula la carga con un `setTimeout` y muestra un estado de carga mientras los datos no estén disponibles.

- Implementa la galería de fotos en la parte superior. Usa `useState` para guardar el índice de la foto actualmente visible y añade botones Anterior / Siguiente para navegar por un array de placeholders de fotos.

- Implementa la cabecera del alojamiento: título, valoración con estrellas, número de reseñas y ubicación.

- Implementa la fila de información del anfitrión: placeholder de avatar, nombre del anfitrión y años como anfitrión.

- Implementa la sección de servicios (amenities) como una cuadrícula de pares icono + etiqueta.

- Implementa la tarjeta de reserva: precio por noche, un contador de huéspedes (usa `useState` para aumentar o reducir el número de huéspedes dentro de un rango mín/máx) y un botón CTA.

- Reto opcional (solo si has completado todos los demás requisitos): añade campos funcionales de fecha de entrada / salida con una librería de date picker y calcula el precio total en función del número de noches seleccionadas.

## Navegación

- Al hacer clic en una tarjeta de alojamiento en la Home o en el Catálogo, debe navegar a la página de detalle.

- Usa el componente `<Link>` de Next.js para toda la navegación entre páginas.

- Incluye un botón de volver o un breadcrumb en la página de detalle que regrese al Catálogo.
