export type Juego = {
    id: number;
    title: string;
    price: number;
    genre: string;
    platform: string;
    image: string;
    description?: string;
    stock: number;
    rating: number;
  };
  
  export type JuegoCarrito = Juego & {
    quantity: number;
  };
  
  export type Vista = "catalogo" | "favoritos" | "carrito";