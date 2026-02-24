import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-widest cursor-pointer">
            NOVA
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm items-center">

          <li>
            <Link to="/" className="hover:text-gray-400 transition">
              HOME
            </Link>
          </li>

          <li>
            <Link to="/new-arrivals" className="hover:text-gray-400 transition">
              NEW ARRIVALS
            </Link>
          </li>

          <li>
            <Link to="/mens" className="hover:text-gray-400 transition">
              MENS
            </Link>
          </li>

          <li>
            <Link to="/womens" className="hover:text-gray-400 transition">
              WOMENS
            </Link>
          </li>

          <li>
            <Link to="/accessories" className="hover:text-gray-400 transition">
              ACCESSORIES
            </Link>
          </li>

          <li>
            <Link to="/cart" className="relative hover:text-gray-400 transition">
              CART
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-white text-black text-xs px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>

          <Link to="/new-arrivals" onClick={() => setMenuOpen(false)}>
            NEW ARRIVALS
          </Link>

          <Link to="/mens" onClick={() => setMenuOpen(false)}>
            MENS
          </Link>

          <Link to="/womens" onClick={() => setMenuOpen(false)}>
            WOMENS
          </Link>

          <Link to="/accessories" onClick={() => setMenuOpen(false)}>
            ACCESSORIES
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            CART ({totalItems})
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;