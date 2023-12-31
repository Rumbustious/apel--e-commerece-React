import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import rawData from "../assets/Data.json";

export default function ProductPreview({ addToCart }) {
  const { id } = useParams();
  const productData = rawData[0];

  const isValidId = productData.some((product) => String(product.id) === id);
  if (!isValidId) {
    return <Navigate to="/NotFound" />;
  }
  const [cart, setCart] = useState([]);

  const addToCartHandler = () => {
    addToCart(productData[Number(id) - 1]);
  };
  return (
    <div className="flex--product">
      <img src={productData[Number(id) - 1].thumb} alt="" />
      <div className="full-width">
        <div className="flex space-between mr-in-2rem">
          <h3>product {id}</h3>
          <h3> ${productData[Number(id) - 1].price} </h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          quisquam ad iure cumque architecto consequatur. Aliquid cumque
          voluptatibus consequatur rem autem ab eaque rerum exercitationem
          expedita fugiat, numquam tenetur temporibus.
        </p>
        <button className="btn" onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
