import TarjetaJuegos from './TarjetaJuegos';

const ListaJuegos = ({ 
  juegos, 
  agregarAlCarrito, 
  alternarFavorito, 
  favoritos,
  verDetalle 
}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {juegos.map((game) => (

       <div 
        className="col-12 col-sm-6 col-md-4 col-lg-3"
        key={game.id}
      > 

         <TarjetaJuegos
            game={game}
            agregarAlCarrito={agregarCarrito}
            toggleFavorite={toggleFavorite}
            esFavorito={
              favoritos.some(
                (favoritos) => 
                  favorito.id === game.id
                  
                )
              }
            verDetalle={verDetalle}
         />
        </div>
      ))}
    </div>
  );
};
export default ListaJuegos;