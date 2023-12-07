import Product from "./Product";
export default function Cart({ cart }) {
  let price = 0;
  const products = cart.map((product) => {
    price += product.price;
    return (
      <Product
        key={product.id}
        id={product.id}
        image={product.thumb}
        title={product.title}
        price={product.price}
      />
    );
  });
  return (
    <>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p className="flex center">Cart is empty</p>
      ) : (
        <div>
          <div className="flex center">
            <div className="product--container">{products}</div>
          </div>
          <h3>Summary</h3>
          <div className="summary-container">
            <p>total items</p>
            <p>{cart.length}</p>
            <p>total cost</p>
            <p>$ {price}</p>
            <button className="add-to-cart--btn">Checkout</button>
          </div>
        </div>
      )}
    </>
  );
}
