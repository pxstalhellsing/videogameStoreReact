# GameStore — Tienda de Videojuegos

Front-End de una tienda de videojuegos desarrollado en **React** para la
Evaluación 1 de **Desarrollo de Aplicaciones Web** - Universidad Autonoma.

**Integrantes:** Pía Fuentes, Javier Vergara

## Descripción

GameStore permite explorar un catálogo de videojuegos, buscarlo y filtrarlo,
ver el detalle de cada título, agregarlo al carrito de compras y marcarlo
como favorito. Los datos del catálogo se obtienen mediante una **petición
simulada** con `fetch` a un archivo JSON local, replicando el comportamiento
de una API real (incluyendo sus estados de carga y error).

## Tecnologías

- **React** (Vite)
- **TypeScript** (`App.tsx`, `main.tsx`, `types.ts`)
- **Tailwind CSS** para los estilos de los componentes
- **useState** / **useEffect** para el estado y las peticiones simuladas

## Funcionalidades

- Listado dinámico de videojuegos, obtenido vía `fetch` simulado.
- Búsqueda por nombre.
- Filtros por plataforma y por género.
- Vista de detalle de cada juego.
- Carrito de compras: agregar productos, respetar el stock disponible,
  calcular el total y simular el pago (`Finalizar compra`).
- Favoritos: agregar y quitar juegos, con vista propia.
- Control de stock: el botón "Agregar al carrito" se deshabilita si no
  quedan unidades, y no permite superar el stock disponible.

## Estructura del proyecto

```
src/
├── main.tsx                # Punto de entrada
├── App.tsx                 # Componente raíz: estado global y vistas
├── App.css                 # Estilos heredados de la plantilla de Vite
├── index.css                # Import de Tailwind + variables de tema (claro/oscuro)
├── types.ts                 # Tipos: Juego, JuegoCarrito, Vista
└── Componentes/
    ├── Navbar.jsx            # Encabezado y navegación entre vistas
    ├── Filtradores.jsx       # Buscador + filtros de plataforma y género
    ├── ListaJuegos.jsx       # Listado dinámico (renderiza TarjetaJuegos)
    ├── TarjetaJuegos.jsx     # Tarjeta individual de un juego
    ├── Carrito.jsx           # Vista del carrito de compras
    └── Favoritos.jsx         # Vista de juegos favoritos

public/
└── games.json                # Catálogo de videojuegos (ver "Datos" abajo)
```

## Datos

El catálogo se carga desde `public/games.json`, con objetos que cumplen el
tipo `Juego` definido en `types.ts`:

```ts
type Juego = {
  id: number;
  title: string;
  price: number;
  genre: string;
  platform: string;
  image: string;
  description?: string;
  stock: number;
  rating: number;
};
```

> Si el archivo `games.json` todavía no existe en `public/`, la app va a
> mostrar el mensaje de error definido en `App.tsx` ("No se pudieron cargar
> los videojuegos.").

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Abre la URL que indica la terminal (por defecto `http://localhost:5173`).

Para la versión de producción:

```bash
npm run build
npm run preview
```

> Como `index.css` usa `@import "tailwindcss";` (sintaxis de Tailwind v4),
> confirmen que `tailwindcss` y el plugin `@tailwindcss/vite` estén
> instalados y agregados en `vite.config.ts`.
