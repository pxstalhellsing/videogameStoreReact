const Carrito = ({ cart, onFinalizarCompra, onQuitar }) => {
  const total = cart.reduce(
    (sum, item) => 
      sum + (item.price * item.quantity),
     0
  );

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        Carrito
      </h2>
      
      {cart.length === 0 ? (
        <p className="text-sm text-gray-500 italic">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">
            {cart.map(item => (

              <li 
                key={item.id} 
                className="flex justify-between items-center border-b pb-2"
              >
              <div className="d-flex align-items-center">


                <img src={item.image}
                    alt={item.title}
                    className="rounded me-3"
                    style={{
                      width: "55px",
                      height: "70px",
                      objectFit: "cover"
                    }} 
                
                />

                <div className="w-2/3">
                    <p className="font-semibold text-sm line-clamp-1">{item.title}</p>
                    <p className="text-xs text-gray-500">Cantidad: {item.quantity}</p>
                </div>
              </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold text-sm">
                    ${(item.price * item.quantity).toLocaleString('es-CL')}
                  </p>
                  <button
                    onClick={() => onQuitar(item.id)}
                    className="rounded border border-red-500 px-2 py-1 text-xs text-red-500 transition hover:bg-red-50"
                    aria-label={`Quitar ${item.title} del carrito`}
                  >
                    Quitar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="border-t pt-4 flex justify-between items-center">
            <span className="font-bold text-gray-700">Total:</span>
            <span className="text-xl font-bold text-green-600">
              ${total.toLocaleString('es-CL')}
            </span>
          </div>
          <button onClick={onFinalizarCompra} className="w-full bg-green-500 text-white mt-4 py-2 rounded font-bold hover:bg-green-600 transition">
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
};

export default Carrito;