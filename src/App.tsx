import { useState } from 'react'
import Navbar from './Componentes/Navbar'

import './App.css'

function App() {
  const [vista, setvista] = useState("catalogo");
  const [carro, setcarro] = useState([]);
  const [favoritos, setfavoritos] = useState([])

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
