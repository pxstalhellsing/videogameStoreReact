import TarjetaJuegos from './TarjetaJuegos';

const ListaJuegos = ({ 
  juegos, 
  agregarAlCarrito, 
  alternarFavorito, 
  favoritos,
  verDetalle 
}) => {

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {juegos.map((game) => (

       <div 
        className="min-w-0"
        key={game.id}
      > 

        <TarjetaJuegos
          game={game}
          agregarCarrito={agregarAlCarrito}
          toggleFavorite={alternarFavorito}
          esFavorito={favoritos.some(
            (favorito) => favorito.id === game.id
          )}
          verDetalle={verDetalle}
        />
        </div>
      ))}
    </div>
  );
};
export default ListaJuegos;