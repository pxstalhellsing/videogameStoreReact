import TarjetaJuegos from './TarjetaJuegos';

const ListaJuegos = ({ juegos, agregarAlCarrito, alternarFavorito, favoritos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {juegos.map((juego) => (
         <TarjetaJuegos 
            key={juego.id}
            juego={juego}
            agregarAlCarrito={agregarAlCarrito}
            alternarFavorito={alternarFavorito}
            esFavorito={favoritos.some(fav => fav.id === juego.id)}
         />
      ))}
    </div>
  );
};
export default ListaJuegos;