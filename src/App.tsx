import { useState } from 'react'

import './App.css'

function App() {
  const [vista, setvista] = useState("catalogo");
  const [carro, setcarro] = useState([]);

  return (
    <>
      <Navbar
        setvista={setvista}
        ConteoCarro={carro.leght}
      />
    </>
  );
}

export default App
