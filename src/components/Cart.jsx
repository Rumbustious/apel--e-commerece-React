import Product from "./Product";
export default function Cart({ cart, resetCart }) {
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

  const checkoutHandler = () => {
    resetCart();
  }
  return (
    <>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <h1 className="err-msg">Cart is empty</h1>
      ) : (
        <div>
          <div className="flex center">
            <div className="product--container">{products}</div>
          </div>
          <h3>Summary</h3>
          <div className="summary-container">
            <div className="flex space-between">
              <p>total items</p>
              <p>{cart.length}</p>
            </div>
            <div className="flex space-between">
              <p>total cost</p>
              <p>$ {price}</p>
            </div>
            <button className="btn" onClick={checkoutHandler}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
