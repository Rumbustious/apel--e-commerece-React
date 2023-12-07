import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" flex space-between pd-2rem align-center nav--container">
      <div className="logo">Logo</div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
