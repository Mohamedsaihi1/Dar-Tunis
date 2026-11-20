import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <h2>🇹🇳 Dar Tounsi</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dishes">Menu</Link>
        <Link to="/admin/add">Add Foods</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar