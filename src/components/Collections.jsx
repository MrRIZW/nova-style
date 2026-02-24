import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import shoes from "../assets/shoes.jpg";
import { Link } from "react-router-dom";

function Collections() {
  const items = [
    { title: "Men's Collection", image: men, path: "/mens" },
    { title: "Women's Collection", image: women, path: "/womens" },
    { title: "New Arrivals", image: shoes, path: "/new-arrivals" },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-wide">
            Explore Our Collections
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Discover premium styles curated just for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end items-center text-center p-8">
                <h3 className="text-2xl font-semibold mb-4 tracking-wide">
                  {item.title}
                </h3>

                <Link to={item.path}>
                  <button className="bg-white text-black px-6 py-2 font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Collections;