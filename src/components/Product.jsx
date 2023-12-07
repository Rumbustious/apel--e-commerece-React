import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <Link to={`/Product/${props.id}`} className="product">
      <img src={props.image} width={230} height={150} alt="" />
      <div className="flex space-between mr-in-2rem">
        <span>{props.title}</span>
        <span>${props.price}</span>
      </div>
    </Link>
  );
}
