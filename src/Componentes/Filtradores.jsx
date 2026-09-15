const Filtradores = ({ searchTerm, setSearchTerm, platform, setPlatform }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row gap-4">
      <input 
        type="text" 
        placeholder="Buscar por nombre de juego..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500"
      />
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
  );
};

export default Filtradores;