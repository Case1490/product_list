import { useState } from "react"
import AllDesserts from "./components/AllDesserts"
import CartShop from "./components/CartShop"

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="w-[80%] m-auto">
      <div className="my-10 flex lg:gap-x-10 flex-col lg:flex-row">
        <div>
          <AllDesserts cart={cart} setCart={setCart} />
        </div>

        <div>
          <CartShop cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}

export default App
