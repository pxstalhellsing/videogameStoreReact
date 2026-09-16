const TarjetaJuegos = ({
    game,
    agregarCarrito,
    toggleFavorite,
    esFavorito,
    verDetalle
  }) => {
  
    return (
      <div className="card h-100 shadow-sm">
  
        <img
          src={game.image}
          alt={game.title}
          className="card-img-top"
          style={{
            height: "300px",
            objectFit: "cover"
          }}
        />

        <div className="card-body d-flex flex-column">

          <h5 className="card-title">
            {game.title}
          </h5>

          <p className="card-text mb-1">
            <strong>Género:</strong> {game.genre}
          </p>

          <p className="card-text mb-1">
            <strong>Plataforma:</strong> {game.platform}
          </p>

          <p className="card-text mb-1">
            <strong>Rating:</strong> {game.rating}
          </p>

          <p className="card-text text-muted">
             Stock: {game.stock}
          </p>

          <h4 className="mt-auto mb-3">
            ${game.price.toLocaleString("es-CL")}
          </h4>

          <div className="d-grid gap-2">
            <button  
            className="btn btn-outline-primary" 
            onClick={() => verDetalle(game)} 
            >
              Ver detalle

            </button>

            <div className="d-flex gap-2">
              <button 
                className="btn btn-primary flex-grow-1" 
                onClick={() => agregarCarrito(game)}
                disabled={game.stock === 0}
              >
                Agregar
              </button>

              <button
                className={
                  esFavorito
                  ? "btn btn-danger"
                  : "btn btn-outline-danger"
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