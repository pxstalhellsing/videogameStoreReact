import { useState } from 'react'
import Navbar from './Componentes/Navbar'
import Filtradores from "./Componentes/Filtradores";
import TarjetaJuegos from "./Componentes/TarjetaJuegos";
import Carrito from "./Componentes/Carrito";
import Favoritos from "./Componentes/Favoritos";

import './App.css'

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
  const [carro, setcarro] = useState([]);
  const [favoritos, setfavoritos] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [platform, setPlatform] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Navbar
        setvista={setvista}
        cartCount={carro.length}
        favCount={favoritos.length}
      />
      {vista === "catalogo" && (

      <div>
        <h1>Catálogo de videojuegos</h1>
      </div>

      )}

      {vista === "favoritos" && (

      <div>
        <h1>Mis favoritos</h1>
      </div>





      )}

      {vista === "carrito" && (

      <div>
        <h1>Mi carrito</h1>
      </div>

      )}

    </>
  );
}

export default App
