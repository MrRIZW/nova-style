import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewArrivals from "./pages/NewArrivals";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Mens from "./pages/Mens";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* New Arrivals Page */}
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/mens" element={<Mens />} />

          {/* Product Details Page */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Cart Page */}
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;