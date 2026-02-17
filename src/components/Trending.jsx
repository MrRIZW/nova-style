function Trending() {
  const products = [
    "Urban Tech Jacket",
    "Future Chic Dress",
    "Sneaker Horizon",
    "Neo Vision Sunglasses",
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Trending Now
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded text-center hover:scale-105 transition">
            <div className="h-40 bg-gray-800 mb-4 rounded"></div>
            <h4 className="mb-4">{item}</h4>
            <button className="border px-4 py-2 hover:bg-white hover:text-black transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
