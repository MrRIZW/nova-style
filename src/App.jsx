import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import NewArrivals from "./pages/NewArrivals";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
