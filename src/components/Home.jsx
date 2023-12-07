import Navbar from "./Navbar";
import Product from "./Product";
import rawData from "../assets/Data.json";
export default function Home() {
  const productData = rawData[0];
  console.log(productData);
  const products = productData.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      image={product.thumb}
      title={product.title}
      price={product.price}
    />
  ));
  return (
    <>
      <h1>All products</h1>
      <div className="flex center">
        <div className="product--container">{products}</div>
      </div>
    </>
  );
}
