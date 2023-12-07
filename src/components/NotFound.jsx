import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col center">
      <h1 className="err-msg">Product Not Found</h1>
      <div className="go-home--btn">
          <button className="go-home--btn">
            <Link to="/">Go Home</Link>
          </button>
      </div>
    </div>
  );
}
