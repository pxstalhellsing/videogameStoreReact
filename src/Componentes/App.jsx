import { useState, useEffect } from 'react';

import Navbar from './Componentes/Navbar';
import Filtrador from './Componentes/Filtrador';
import ListaJuegos from './Componentes/ListaJuegos'; 
import Carrito from './Componentes/Carrito';
import Favoritos from './Componentes/Favoritos';

function App() {
  // 1. Estados Globales
  const [juegos, setJuegos] = useState([]); 
  const [carrito, setCarrito] = useState([]);   
  const [favoritos, setFavoritos] = useState([]); 
  const [cargando, setCargando] = useState(true);

  // 2. Filtros
  const [busqueda, setBusqueda] = useState('');
  const [consola, setConsola] = useState('');

  // 3. Petición Simulada de Datos (Fetch al JSON)
  useEffect(() => {
    const obtenerJuegos = async () => {
      try {
        const respuesta = await fetch('/data/juegos.json');
        const data = await respuesta.json();
        setJuegos(data);
        setCargando(false);
      } catch (error) {
        console.error("Error al cargar los juegos:", error);
        setCargando(false);
      }
    };

    obtenerJuegos();
  }, []);

  // 4. Carrito
  const agregarAlCarrito = (juego) => {
    const itemExistente = carrito.find(item => item.id === juego.id);
    if (itemExistente) {
      // Si ya está en el carrito, aumenta la cantidad
      setCarrito(carrito.map(item => 
        item.id === juego.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      // Si es nuevo, lo agrega con cantidad 1
      setCarrito([...carrito, { ...juego, cantidad: 1 }]);
    }
  };

  // 5. Favoritos
  const alternarFavorito = (juego) => {
    const esFavorito = favoritos.some(fav => fav.id === juego.id);
    if (esFavorito) {
      // Lo quita
      setFavoritos(favoritos.filter(fav => fav.id !== juego.id));
    } else {
      // Lo agrega
      setFavoritos([...favoritos, juego]);
    }
  };

  // 6. Filtrado (Se actualiza al escribir)
  const juegosFiltrados = juegos.filter((juego) => {
    const coincideBusqueda = juego.title.toLowerCase().includes(busqueda.toLowerCase());
    const coincideConsola = consola === '' || juego.platform === consola;
    return coincideBusqueda && coincideConsola;
  });

  // 7. Interfaz
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Pasamos la cantidad de items mediante Props */}
      <Navbar cantidadCarrito={carrito.length} cantidadFavoritos={favoritos.length} />
      
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        
        {/* Columna Izquierda: Filtros y Catálogo */}
        <section className="md:col-span-2">
          
          <Filtrador 
            busqueda={busqueda} 
            setBusqueda={setBusqueda} 
            consola={consola} 
            setConsola={setConsola} 
          />

          {cargando ? (
            <div className="flex justify-center items-center h-48">
              <p className="text-xl text-gray-500 font-semibold animate-pulse">
                Cargando catálogo...
              </p>
            </div>
          ) : (
            // Pasamos el arreglo ya filtrado y las funciones de interacción
            <ListaJuegos 
              juegos={juegosFiltrados} 
              agregarAlCarrito={agregarAlCarrito} 
              alternarFavorito={alternarFavorito} 
              favoritos={favoritos} 
            />
          )}
        </section>

        {/* Columna Derecha: Favoritos y Carrito (Se mantienen fijos con scroll) */}
        <aside className="md:sticky md:top-24 self-start space-y-6">
          <Favoritos 
            favoritos={favoritos} 
            alternarFavorito={alternarFavorito} 
          />
          <Carrito 
            carrito={carrito} 
          />
        </aside>

      </main>
    </div>
  );
}

export default App;