import axios from 'axios'
import { Link } from 'react-router-dom'

export function Navbar() {

  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <header>
      <nav>
       <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/leaders">Leaders</Link> | <Link to="/users">Users</Link> | <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  )
}
