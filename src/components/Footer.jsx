import { FaInstagram, FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-widest mb-4">
            NOVA
          </h2>
          <p className="text-sm leading-relaxed">
            Elevate your style with premium fashion. Designed for the modern
            generation.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">SHOP</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/new-arrivals" className="hover:text-white transition">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/mens" className="hover:text-white transition">
                Mens
              </Link>
            </li>
            <li>
              <Link to="/womens" className="hover:text-white transition">
                Womens
              </Link>
            </li>
            <li>
              <Link to="/accessories" className="hover:text-white transition">
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/faqs" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-4">
            Subscribe to get special offers and updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-900 text-white text-sm outline-none border border-gray-700"
            />
            <button className="bg-white text-black px-4 text-sm font-semibold hover:bg-gray-200 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} NOVA. All rights reserved.
          </p>

          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-gray-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
