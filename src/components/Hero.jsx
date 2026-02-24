import heroImage from "../assets/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroImage})`, // ✅ fixed typo
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          ELEVATE <br /> YOUR STYLE
        </h2>

        <p className="text-gray-300 mb-8">
          FUTURE FASHION AWAITS
        </p>

        {/* ✅ Redirect to New Arrivals */}
        <Link to="/new-arrivals">
          <button className="bg-white text-black px-8 py-3 font-semibold rounded hover:bg-gray-300 transition">
            SHOP NOW
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;