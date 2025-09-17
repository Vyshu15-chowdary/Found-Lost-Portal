import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/items">Items</Link>
      {user ? (
        <>
          <Link to="/add">Add Item</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
