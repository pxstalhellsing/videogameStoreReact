const TarjetaJuegos = ({
    game,
    agregarCarrito,
    toggleFavorite,
    esFavorito,
    verDetalle
  }) => {
  
    return (
      <div className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-500">
  
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-contain"
        />

        <div className="flex flex-1 flex-col p-4">

          <h5 className="mb-2 text-lg font-bold">
            {game.title}
          </h5>

          <p className="mb-1 text-sm text-slate-300">
            <strong>Género:</strong> {game.genre}
          </p>

          <p className="mb-1 text-sm text-slate-300">
            <strong>Plataforma:</strong> {game.platform}
          </p>

          <p className="mb-1 text-sm text-slate-300">
            <strong>Rating:</strong> {game.rating}
          </p>

          <p className="text-sm text-slate-400">
             Stock: {game.stock}
          </p>

          <h4 className="mt-auto mb-4 pt-4 text-2xl font-bold text-green-400">
            ${game.price.toLocaleString("es-CL")}
          </h4>

          <div className="grid gap-2">
            <button  
            className="flex-1 rounded-lg bg-purple-600 px-3 py-2 font-medium text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-600" 
            onClick={() => verDetalle(game)} 
            >
              Ver detalle

            </button>

            <div className="flex flex-col gap-2">
              <button 
                className="w-full rounded-lg bg-blue-600 px-3 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-600" 
                onClick={() => agregarCarrito(game)}
                disabled={game.stock === 0}
              >
                Agregar al Carrito
              </button>

              <button
                className={
                  esFavorito
                    ? "rounded bg-red-600 px-3 py-2 text-white"
                    : "rounded border border-red-500 px-3 py-2 text-red-500"
                }
                onClick={() => toggleFavorite(game)}
              >

                {esFavorito ? "♥ Quitar" : "♡ Favorito" }
              </button>


            </div>


          </div>

          




        </div>
  
       
      </div>
    );
  };
  
  export default TarjetaJuegos;