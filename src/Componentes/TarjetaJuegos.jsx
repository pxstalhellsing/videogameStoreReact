const TarjetaJuego = ({
    game,
    agregarCarrito,
    toggleFavorite,
    esFavorito
  }) => {
  
    return (
      <div className="tarjeta-juego">
  
        <img
          src={game.image}
          alt={game.title}
          className="juego-imagen"
        />
  
        <div className="juego-info">
  
          <h2>{game.title}</h2>
  
          <p className="genero">
            {game.genre}
          </p>
  
          <p>
            🎮 {game.platform}
          </p>
  
          <p>
            ⭐ {game.rating}
          </p>
  
          <p>
            Stock: {game.stock}
          </p>
  
          <h3 className="precio">
            ${game.price.toLocaleString("es-CL")}
          </h3>
  
  
          <div className="botones-juego">
  
            <button
              onClick={() => agregarCarrito(game)}
              className="boton-carrito"
            >
              🛒 Agregar
            </button>
  
  
            <button
              onClick={() => toggleFavorite(game)}
              className="boton-favorito"
            >
              {esFavorito ? "❤️" : "🤍"}
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  };
  
  export default TarjetaJuego;