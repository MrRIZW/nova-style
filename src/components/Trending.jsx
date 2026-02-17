import jacket from "../assets/jacket.jpg";
import dress from "../assets/dress.jpg";
import sneaker from "../assets/sneaker.jpg";
import sunglasses from "../assets/sunglasses.jpg";

function Trending() {
  const products = [
    { name: "Urban Tech Jacket", image: jacket },
    { name: "Future Chic Dress", image: dress },
    { name: "Sneaker Horizon", image: sneaker },
    { name: "Neo Vision Sunglasses", image: sunglasses },
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        TRENDING NOW
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div key={index} className="bg-gray-900 rounded overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover hover:scale-105 transition duration-500"
            />
            <div className="p-4 text-center">
              <h4 className="mb-4">{item.name}</h4>
              <button className="bg-white text-black px-4 py-2 rounded font-semibold">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
