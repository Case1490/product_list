import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import addCart from "../../assets/images/icon-add-to-cart.svg";

const CardDessert = ({ image, name, category, price, setCart, cart }) => {
  const [quantity, setQuantity] = useState(0);
  const [showQuantityControls, setShowQuantityControls] = useState(false);

  const updateCartQuantity = (newQuantity) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.name === name);
      if (existingProductIndex !== -1) {
        //Actualiza la cantidad del producto existente en el carrito
        if (newQuantity > 0) {
          const updateCart = [...prevCart];
          updateCart[existingProductIndex].quantity = newQuantity;
          return updateCart;
        } else {
          //Elimina el producto si la cantidad es 0
          return prevCart.filter((item) => item.name !== name);
        }
      } else if (newQuantity > 0) {
        //agrega el producto si no está en el carrito y la cantidad es mayor a 0
        return [...prevCart, { name, image, price, quantity: newQuantity }];
      }

      return prevCart;
    });
  }

  const incrementQuantity = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      updateCartQuantity(newQuantity);
      setShowQuantityControls(true);
      return newQuantity;
    })

  };

  const decrementQuantity = () => {
    setQuantity((prev) => {
      const newQuantity = Math.max(prev - 1, 0);
      updateCartQuantity(newQuantity);
      if (newQuantity === 0) setShowQuantityControls(false);
      return newQuantity;
    });
  };

  const handleAddToCart = () => {
    setShowQuantityControls(true);
    setQuantity(1); // Empieza con una cantidad de 1 cuando se agrega al carrito
    updateCartQuantity(1); // Actualiza el carrito con cantidad inicial de 1

    // Muestra la alerta con SweetAlert
    Swal.fire({
      icon: "success",
      title: "Producto añadido",
      text: `${name} se ha añadido al carrito.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    if (quantity === 0) {
      setShowQuantityControls(false);
    }
  }, [quantity]);

  useEffect(() => {
    const isInCart = cart.some((item) => item.name === name);
    if (!isInCart) {
      setShowQuantityControls(false);
      setQuantity(0); // Reinicia la cantidad a 0
    }
  }, [cart, name]);

  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <div>
      <div className="relative">
        <img src={image} alt={name} className="rounded-lg" />

        {/* Botón "Añadir al carrito" */}
        {!showQuantityControls && (
          <div className="absolute bottom-[-15px] w-full flex justify-center transition-opacity duration-300">
            <button
              onClick={handleAddToCart}
              className="w-[180px] h-[45px] items-center justify-center bg-white px-4 py-2 rounded-full border-Red border-2 flex gap-x-1"
            >
              <img src={addCart} alt="Add to cart" /> Añadir al carrito
            </button>
          </div>
        )}

        {/* Controles de cantidad */}
        {showQuantityControls && (
          <div className="absolute bottom-[-15px] w-full flex justify-center transition-opacity duration-300">
            <button className="w-[180px] h-[45px] items-center justify-between bg-Red px-4 py-2 rounded-full flex gap-x-1">
              <div
                className="px-2 py-3 border-2 border-white rounded-full buttonQuantity"
                onClick={decrementQuantity}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="#fff"
                  viewBox="0 0 10 2"
                >
                  <path d="M0 .375h10v1.25H0V.375Z" />
                </svg>
              </div>

              <h2 className="text-white">{quantity}</h2>

              <div
                className="px-2 py-2 border-2 border-white rounded-full buttonQuantity"
                onClick={incrementQuantity}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="#fff"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>

      <div className="mt-8">
        <p className="text-Rose500">{category}</p>
        <h2 className="text-Rose900 font-bold">{name}</h2>
        <h2 className="text-Red font-bold">${formattedPrice}</h2>
      </div>
    </div>
  );
};

export default CardDessert;
