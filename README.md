# CRUD de Series de TV (Taller 2)

Un proyecto desarrollado con Next.js (App Router), TypeScript y Tailwind CSS para gestionar un catálogo de series de televisión.

## Instalación y Ejecución

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver la aplicación.

## Funcionalidades Implementadas

- **Lista de Series:** Visualización de todas las series guardadas en forma de tarjetas.
- **Búsqueda:** Buscador en tiempo real para filtrar series por título.
- **Crear Serie:** Formulario para agregar nuevas series con validaciones (título, género, temporadas, plataforma, calificación).
- **Detalle de Serie:** Vista dedicada para ver la información completa de una serie.
- **Editar Serie:** Capacidad para modificar los datos de una serie existente.
- **Eliminar con Confirmación:** Opción para borrar una serie, previa confirmación por parte del usuario.
- **Favoritos:** Posibilidad de marcar o desmarcar una serie como favorita.
- **Persistencia de Datos:** Todos los datos se guardan y recuperan de manera persistente utilizando `localStorage`.
- **Estados de Carga y Errores:** Manejo adecuado de estados mientras se recupera la información de `localStorage`.
- **Diseño Responsive:** Interfaz adaptada tanto para dispositivos móviles como para pantallas de escritorio (desktop).

## Decisiones de Arquitectura

1. **Context API y `useLocalStorage`:**
   Se eligió Context API (`SerieContext`) para proveer un estado global simple y directo, evitando la necesidad de instalar librerías externas de manejo de estado más pesadas como Redux o Zustand. Esto mantiene la arquitectura ligera. 
   Para la persistencia, se creó un hook personalizado (`useLocalStorage`) que sincroniza el estado de la aplicación con la API `localStorage` del navegador. De este modo, los datos persisten entre recargas de página simulando una base de datos local de manera transparente y desacoplada del Contexto.

2. **Server Components delgados y Client Components:**
   Los archivos de las rutas dinámicas, como `page.tsx`, actúan principalmente como Server Components delgados. Su función es recibir los parámetros de la URL (por ejemplo, el `id` de la serie) y delegar el renderizado y la lógica interactiva a Client Components (como `DetalleSerieClient.tsx` o `EditarSerieClient.tsx`).
   Esto asegura que los componentes que necesitan interactuar fuertemente con los hooks de React (como `useRouter`, Context API o el manejo de eventos de UI) estén declarados con `"use client"`, manteniendo el enrutamiento y la estructura inicial optimizada del lado del servidor.

3. **Tipado del Modelo de Datos (Serie / SerieInput):**
   Se separó el modelo de datos en dos interfaces para reflejar el ciclo de vida de una entidad. 
   - `SerieInput`: Se utiliza para la creación y edición, contiene solo los campos de negocio que el usuario puede proporcionar (título, género, etc.).
   - `Serie`: Extiende de forma lógica a `SerieInput` añadiendo propiedades que el sistema genera y gestiona internamente, como el `id` (identificador único) y `esFavorita` (estado inicial). 
   Este enfoque garantiza un tipado fuerte de TypeScript (sin uso de `any`) y hace que los formularios solo dependan de la estructura base que necesitan mutar.
