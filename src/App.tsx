import { useState, useEffect } from 'react'
import Navbar from './Componentes/Navbar'
import Filtradores from "./Componentes/Filtradores";
import Carrito from "./Componentes/Carrito";
import Favoritos from "./Componentes/Favoritos";
import ListaJuegos from "./Componentes/ListaJuegos";


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

type JuegoCarrito = Juego & {
  quantity: number;
};





function App() {
  const [vista, setvista] = useState("catalogo");
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [carro, setcarro] = useState<JuegoCarrito[]>([]);
  const [genre, setGenre] = useState("");
  const [detalle, setDetalle] = useState<Juego | null>(null);
  const [error, setError] = useState("");
  const [favoritos, setfavoritos] = useState<Juego[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [platform, setPlatform] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    let activo = true;
  
    const obtenerJuegos = async () => {
      try {
        const respuesta = await fetch("/games.json");
  
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el catálogo");
        }
  
        const datos: Juego[] = await respuesta.json();

        const stockGuardado: Record<string, number> =
          JSON.parse(
            localStorage.getItem("gamestore-stock") || "{}"
          );

          const juegosConStock = datos.map((juego) => {

            const stockActual = stockGuardado[juego.id];
          
            return {
              ...juego,
              stock:
                typeof stockActual === "number" &&
                Number.isFinite(stockActual)
                  ? Math.max(0, stockActual)
                  : juego.stock
            };
          
          });
          
  
        if (activo) {
          setJuegos(datos);
        }
  
      } catch (error) {
        console.error(error);
  
        if (activo) {
          setError("No se pudieron cargar los videojuegos.");
        }
  
      } finally {
        if (activo) {
          setLoading(false);
        }
      }
    };
  
    obtenerJuegos();
  
    return () => {
      activo = false;
    };
  }, []);


  const agregarAlCarrito = (juego: Juego) => {

    setcarro((actual) => {
      const existente = actual.find(
        (item) => item.id === juego.id
      );
  
      if (juego.stock <= 0) {
        return actual;
      }
  
      if (existente) {
  
        if (existente.quantity >= juego.stock) {
          return actual;
        }
  
        return actual.map((item) =>
          item.id === juego.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
  
      return [...actual, { ...juego, quantity: 1 }];
    });
  };

  
  const alternarFavorito = (juego: Juego) => {

    setfavoritos((actual) => {
  
      const existe = actual.some(
        (favorito) => favorito.id === juego.id
      );
  
      if (existe) {
        return actual.filter(
          (favorito) => favorito.id !== juego.id
        );
      }
  
      return [...actual, juego];
    });
  };


  const verDetalle = (juego: Juego) => {
    setDetalle(juego);
  };
  
  
  // Filtrar videojuegos
  const juegosFiltrados = juegos.filter((juego) => {
  
    const coincideBusqueda = juego.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  
    const coincidePlataforma =
      platform === "" || juego.platform === platform;
  
    const coincideGenero =
      genre === "" || juego.genre === genre;
  
    return (
      coincideBusqueda &&
      coincidePlataforma &&
      coincideGenero
    );
  });

  const finalizarCompra = () => {

    if (carro.length === 0) {
      return;
    }

    const juegosActualizados = juegos.map((juego) => {

      const productoComprado = carro.find(
        (item) => item.id === juego.id
      );
  
      if (productoComprado) {
        return {
          ...juego,
          stock: Math.max(
            0,
            juego.stock - productoComprado.quantity
          )
        };
      }
  
      return juego;
    });

    setJuegos(juegosActualizados);

  // Guardar el nuevo stock en el navegador
  const stockGuardado = Object.fromEntries(
    juegosActualizados.map((juego) => [
      juego.id,
      juego.stock
    ])
  );

  localStorage.setItem(
    "gamestore-stock",
    JSON.stringify(stockGuardado)
  );
    

    setcarro([]);
  
    window.alert("¡Compra simulada realizada correctamente!");
  };

  return (
    <>
      <Navbar
        setvista={setvista}
        cartCount={carro.length}
        favCount={favoritos.length}
      />
     {vista === "catalogo" && (

<main className="mx-auto max-w-7xl p-6">

  {detalle ? (

    <div className="mx-auto max-w-4xl rounded-xl border border-slate-700 bg-slate-800 p-6 text-white shadow-xl">

      <button
        onClick={() => setDetalle(null)}
        className="mb-6 rounded-lg bg-slate-700 px-4 py-2 font-medium text-white transition hover:bg-slate-600"
      >
        Volver al catálogo
      </button>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

    {/* Carátula del videojuego */}

    <div className="flex items-center justify-center rounded-lg bg-slate-900 p-4">
      <img
        src={detalle.image}
        alt={detalle.title}
        className="h-80 w-full object-contain"
      />
    </div>

    {/* Información del videojuego */}

    <div className="flex flex-col">

  
      <h2 className="mb-4 text-2xl font-bold text-white">
        {detalle.title}
      </h2>

      <p className="mb-3 text-sm text-slate-300">
        <strong>Género:</strong> {detalle.genre}
      </p>

      <p className="mb-3 text-sm text-slate-300">
        <strong>Plataforma:</strong> {detalle.platform}
      </p>

      <p className="mb-3 text-sm text-slate-300">
        <strong>Stock:</strong> {detalle.stock}
      </p>

      <p className="mb-3 text-sm text-slate-300">
        {detalle.description ||
          "Este videojuego todavía no tiene descripción."}
      </p>

      <p className="mt-auto text-3xl font-bold text-green-400">
        ${detalle.price.toLocaleString("es-CL")}
      </p>

      <button
        onClick={() => agregarAlCarrito(detalle)}
        disabled={detalle.stock === 0}
        className="mt-6 rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-600"
      >
        {detalle.stock === 0
          ? "Sin stock"
          : "Agregar al carrito"}
      </button>

      </div>
    </div>
  </div>
  ) : (

    <>

      <h1 className="mb-6 text-3xl font-bold">
        Catálogo de videojuegos
      </h1>

      <Filtradores
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
      />

      {loading ? (

        <p>Cargando videojuegos...</p>

      ) : error ? (

        <p className="text-red-600">{error}</p>

      ) : (

        <ListaJuegos
          juegos={juegosFiltrados}
          agregarAlCarrito={agregarAlCarrito}
          alternarFavorito={alternarFavorito}
          favoritos={favoritos}
          verDetalle={verDetalle}
        />

      )}

    </>

  )}

</main>

)}

    {vista === "favoritos" && (

    <main className="mx-auto max-w-7xl p-6">

      <Favoritos
        favorites={favoritos}
        toggleFavorite={alternarFavorito}
      />

    </main>

    )}

  {vista === "carrito" && (

    <main className="mx-auto max-w-7xl p-6">

    <Carrito
      cart={carro}
      onFinalizarCompra={finalizarCompra}
    />

    </main>

    )}



    </>
  );
}

export default App
