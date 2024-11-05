import emptyCart from "../../assets/images/illustration-empty-cart.svg";
import CardCart from "./CardCart";

const CartShop = ({ cart, setCart }) => {
  // Recibe el carrito desde App

  // Calcular el total de la orden sumando el precio de cada elemento multiplicado por su cantidad
  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  // Calcular el total de unidades en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleClick = (name) => {
    // Actualizar el carrito estableciendo la cantidad del producto a 0
    const updatedCart = cart
      .map((item) => (item.name === name ? { ...item, quantity: 0 } : item))
      .filter((item) => item.quantity > 0); // Filtrar productos con cantidad mayor a 0
    setCart(updatedCart);
  };

  return (
    <div className="bg-white p-4 rounded-lg w-full lg:w-[400px] ">
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <h1 className="text-Red font-bold text-xl w-full">
          Mi carrito ({totalItems})
        </h1>

        {cart.length === 0 ? (
          <>
            <img src={emptyCart} alt="Carrito vacío" />
            <h1 className="text-Rose500 text-center">
              Tus elementos agregados aparecerán aquí
            </h1>
          </>
        ) : (
          <div className="w-full">
            {cart.map((item, index) => (
              <CardCart
                key={index}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                handleClick={() => handleClick(item.name)}
              /> // Muestra los elementos del carrito
            ))}

            <div className="my-4 flex justify-between items-center">
              <h1 className="text-Rose400 font-bold">Orden total:</h1>
              <h1 className="text-2xl font-bold text-Rose900">$ {total}</h1>
            </div>

            <div className="flex p-4 gap-x-2 bg-Rose100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#1EA575"
                  d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
                />
                <path
                  fill="#1EA575"
                  d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
                />
              </svg>

              <p className="text-sm">Esta es una entrega neutra en carbono</p>
            </div>

            <button className=" w-full mt-4 rounded-full bg-Red text-white py-3 hover:bg-Rose900">
              Confirmar Orden
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartShop;
