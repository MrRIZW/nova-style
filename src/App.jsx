import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Collections />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
