import axios from 'axios'

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
        <a href="#">Home</a> | <a href="#">Link</a> | <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  )
}
