import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import AddtoCart from "./components/AddToCart";
import Cart from "./components/Cart";
export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  console.log(cart);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart cart={cart} />} />
        <Route path="Product" element={<AddtoCart addToCart={addToCart} />}>
          <Route
            path="/Product/:id"
            component={<AddtoCart addToCart={addToCart} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
