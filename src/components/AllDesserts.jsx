import { useEffect, useState } from "react";
import { Data } from "../db.js";
import CardDessert from "./CardDessert";

const AllDesserts = ({cart, setCart}) => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      const info = await Data();
      setDesserts(info);
    };

    Fetch()
  }, []);

  return (
    <div>

      <h1 className="text-4xl font-bold">Postres</h1>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
        {desserts.map((dessert, index) => (
          <CardDessert key={index} image={dessert.image.desktop} name={dessert.name} category={dessert.category} price={dessert.price} setCart={setCart} cart={cart}/>
        ))}
      </div>
    </div>
  );
};

export default AllDesserts;
