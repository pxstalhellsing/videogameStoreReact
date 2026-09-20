const TarjetaJuegos = ({
    game,
    agregarCarrito,
    toggleFavorite,
    esFavorito,
    verDetalle
  }) => {
  
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm">
  
        <img
          src={game.image}
          alt={game.title}
          className="w-full object-cover"
          style={{
            height: "300px",
            objectFit: "cover"
          }}
        />

        <div className="flex flex-1 flex-col p-4">

          <h5 className="mb-2 text-lg font-bold">
            {game.title}
          </h5>

          <p className="mb-1 text-sm text-gray-700">
            <strong>Género:</strong> {game.genre}
          </p>

          <p className="mb-1 text-sm text-gray-700">
            <strong>Plataforma:</strong> {game.platform}
          </p>

          <p className="mb-1 text-sm text-gray-700">
            <strong>Rating:</strong> {game.rating}
          </p>

          <p className="text-sm text-gray-500">
             Stock: {game.stock}
          </p>

          <h4 className="mt-auto mb-3">
            ${game.price.toLocaleString("es-CL")}
          </h4>

          <div className="grid gap-2">
            <button  
            className="rounded border border-blue-600 px-3 py-2 text-blue-600 hover:bg-blue-50" 
            onClick={() => verDetalle(game)} 
            >
              Ver detalle

            </button>

            <div className="flex gap-2">
              <button 
                className="flex-1 rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700" 
                onClick={() => agregarCarrito(game)}
                disabled={game.stock === 0}
              >
                Agregar
              </button>

              <button
                className={
                  esFavorito
                    ? "rounded bg-red-600 px-3 py-2 text-white"
                    : "rounded border border-red-500 px-3 py-2 text-red-500"
                }
                onClick={() => toggleFavorite(game)}
              >

                {esFavorito ? "Si" : "No" }
              </button>


            </div>


          </div>

          




        </div>
  
       
      </div>
    );
  };
  
  export default TarjetaJuegos;