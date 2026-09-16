const Filtradores = ({ 
  searchTerm, 
  setSearchTerm, 
  platform, 
  setPlatform,
  genre,
  setGenre
 }) => {
  return (
    

    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row gap-4">

      <div className="row g-3">

        <div className="col-12 col-md-5">  
          <input 
            type="text" 
            placeholder="Buscar por nombre de juego..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500"
          />

        </div>

      <div className="col-12 col-md-3">

          <select 
            value={platform} 
            onChange={(e) => setPlatform(e.target.value)}
            className="border border-gray-300 p-2 rounded sm:w-1/3 bg-white focus:outline-none focus:border-blue-500"
          >
            <option value="">Todas las consolas</option>
            <option value="PC">PC</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="Xbox Series X">Xbox Series X</option>
          </select>
      </div>

      <div className="col-12 col-md-3">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="form-select"  
          
        >
        <option value="">
          Todos los generos
        </option>

        <option value="Terror">
          Terror
        </option>

        <option value="Hack and Slash">
          Hack and Slash
        </option>

        <option value="RPG / Sci-FI">
          RPG
        </option>

        <option value="Accion / Aventure">
          Accion / Aventure
        </option>

        <option value="Plataformas">
          Plataformas
        </option>

        <option value="Mundo Abierto">
          Mundo Abierto
        </option>

        <option value="Metroidvania">
          Metroidvania
        </option>

        <option value="Shooter">
          Shooter
        </option>



        </select>


      </div>

      
  );
};

export default Filtradores;