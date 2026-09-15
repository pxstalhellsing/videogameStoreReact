const Navbar = ({ cartCount, favCount }) => {
    return (
      <nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider"> GameStore</h1>
          <div className="flex space-x-6 font-semibold">
            <span className="hover:text-red-400 transition">
                Favoritos: {favCount}
            </span>
            <span className="hover:text-blue-400 transition">
               Carrito: {cartCount}
            </span>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;