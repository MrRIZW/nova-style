import heroImage from "../assets/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide mb-6">
          Elevate <br className="hidden md:block" />
          Your Style
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Discover timeless designs crafted for the modern generation.
        </p>

        <Link to="/new-arrivals">
          <button className="bg-white text-black px-10 py-3 text-sm md:text-base font-semibold rounded-full hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg">
            Shop Now
          </button>
        </Link>

      </div>
    </section>
  );
}

export default Hero;