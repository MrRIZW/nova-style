function Collections() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {["Men's Collection", "Women's Collection", "New Arrivals"].map((item, index) => (
        <div key={index} className="bg-gray-900 p-10 rounded text-center hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-6">{item}</h3>
          <button className="border px-6 py-2 hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>
      ))}
    </section>
  );
}

export default Collections;
