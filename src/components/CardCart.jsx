
const CardCart = ({ name, quantity, price, handleClick}) => {
  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <div>
          <h1 className="text-red-900 font-bold">{name}</h1>
          <div className="flex gap-x-6 mt-2">
            <p className="text-Red font-bold">{quantity}x</p>
            <p className="text-Rose400 font-bold">@ ${formattedPrice}</p>
            <p className="text-Rose500 font-bold">${quantity*formattedPrice}</p>
          </div>
        </div>

        <div className="border p-2 rounded-full border-Rose500 cursor-pointer crossCart hover:border-Rose900" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#CAAFA7"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default CardCart;
