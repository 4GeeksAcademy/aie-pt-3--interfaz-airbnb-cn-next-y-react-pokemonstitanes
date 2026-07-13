# Contexto del Proyecto: Clon de Interfaz Airbnb

## 1. Descripción del Proyecto y Vistas
Este proyecto consiste en la replicación y validación arquitectónica del frontend de una plataforma de alquiler vacacional inspirada en Airbnb. Se implementa utilizando **Next.js 16**, **React**, **TypeScript** y **Tailwind CSS**, adoptando el paradigma de **App Router** y un enfoque estrictamente **mobile-first**. 

El flujo principal consta de tres vistas completamente funcionales y navegables sin recarga del navegador:

### Página de Inicio (Home - `/`)
Actúa como la puerta de entrada principal para el descubrimiento de alojamientos. 
* **Funcionalidad:** Carga simulada y asíncrona de alojamientos mediante un estado global/local de carga, barra de búsqueda interactiva en tiempo real y filtrado dinámico por categorías tipológicas de hospedaje.
* **Layout:** Estructura limpia y responsiva que transiciona de una columna en móvil (375px) a una cuadrícula multi-columna en resoluciones de escritorio (a partir de 768px).

### Página de Catálogo (Resultados de Búsqueda - `/catalog`)
Vista especializada en la exploración profunda de las propiedades disponibles.
* **Funcionalidad:** Indicación explícita del número de resultados obtenidos y controles para ordenar interactivamente el catálogo (ascendente y descendente por precio). Integra además una sección dedicada para la visualización cartográfica.
* **Layout:** En entornos móviles, el mapa se posiciona debajo del listado; en entornos de escritorio, se transforma en un layout de dos columnas con el mapa fijo a la derecha de la cuadrícula.

### Vista de Detalle de Habitación (`/rooms/[id]`)
Pantalla de destino dinámico basada en parámetros de ruta (`id`) para inspeccionar a fondo una propiedad individual.
* **Funcionalidad:** Consumo de datos local simulando latencia de red, carrusel/galería fotográfica con navegación interna, desglose de servicios, perfil del anfitrión y un panel de cotización dinámico basado en la ocupación.

---

## 2. Usuario Objetivo y Objetivos de Negocio
El usuario final de esta plataforma es un **viajero u huésped moderno** (tanto en movilidad mediante dispositivos smartphones como en escritorio) que busca optimizar su tiempo al encontrar un alojamiento que se adapte a sus criterios específicos de destino, precio, categoría y capacidad. 

El usuario intenta resolver las siguientes necesidades críticas:
1.  **Descubrir y Filtrar:** Visualizar y discriminar rápidamente entre cientos de opciones mediante interacciones instantáneas (búsqueda por texto y tags de categorías).
2.  **Comparar y Evaluar:** Analizar la calidad del alojamiento mediante el rating, las opiniones, la distribución de amenidades y las características del anfitrión.
3.  **Simular Reserva:** Modificar parámetros clave de su estancia (como el volumen de huéspedes) para comprender las condiciones del hospedaje antes de proceder al checkout.

---

## 3. Identificación y Especificación de Componentes de UI
Para asegurar que cada componente mantenga una **responsabilidad única** y no supere el límite estricto de **~80 líneas de código**, se define la siguiente arquitectura modular en `/components`:

### Componentes Globales / Reutilizables
* `Navbar`: Barra superior que contiene el logotipo corporativo (enlazado mediante `<Link>` a `/`), la barra de búsqueda y el menú de usuario.
* `Footer`: Pie de página institucional con rutas de navegación interna del ecosistema.
* `StayCard`: Tarjeta de alojamiento compartida de forma idéntica entre Home y Catalog. 
    * *Props*: `stay: Stay` (Objeto con datos del alojamiento).
    * *Elementos*: Placeholder/Contenedor de imagen, título, precio por noche, rating visual en estrellas.

### Componentes Específicos de la Vista Home y Catálogo
* `SearchBar`: Campo input de texto.
    * *Props*: `searchTerm: string`, `onSearchChange: (val: string) => void`.
* `CategoryNav`: Contenedor horizontal de categorías con scroll lateral en móviles.
    * *Props*: `activeCategory: string`, `onSelectCategory: (id: string) => void`.
* `SortControls` (Exclusivo `/catalog`): Selector de ordenación.
    * *Props*: `currentOrder: 'asc' | 'desc'`, `onOrderChange: (order: 'asc' | 'desc') => void`.
* `MapPlaceholder` (Exclusivo `/catalog`): Recuadro gris estructurado con clases de Tailwind que delimita la zona del mapa (escalable a interactivo).

### Componentes Específicos de Detalle (`/rooms/[id]`)
* `RoomGallery`: Visor de imágenes principal en la parte superior.
    * *Props*: `images: string[]`. Maneja botones de navegación interna Anterior/Siguiente.
* `RoomHeader`: Muestra el título de la propiedad, rating, número de reseñas y localización geográfica exacta.
* `HostInfo`: Fila descriptiva con avatar del anfitrión, nombre y antigüedad en la plataforma.
* `RoomAmenities`: Grid de pares (icono + etiqueta) que renderiza los servicios incluidos.
* `BookingPanel`: Tarjeta de reserva lateral (escritorio) o flotante/inferior (móvil).
    * *Props*: `pricePerNight: number`, `maxGuests: number`. Controla internamente el flujo de capacidad de huéspedes.

---

## 4. Modelado de Datos (TypeScript)
Las estructuras de datos se centralizan en la carpeta `/types` bajo el tipado explícito de interfaces de TypeScript. El modelo principal para representar un alojamiento es:

```typescript
export interface Stay {
  id: string;
  title: string;
  location: string;
  categoryId: string;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  maxGuests: number;
  coverImage: string;
  images: string[];
  description: string;
  hostName: string;
  hostYears: number;
  amenities: string[];
}