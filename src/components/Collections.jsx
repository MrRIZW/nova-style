import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import shoes from "../assets/shoes.jpg";

function Collections() {
  const items = [
    { title: "MEN'S COLLECTION", image: men },
    { title: "WOMEN'S COLLECTION", image: women },
    { title: "NEW ARRIVALS", image: shoes },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative h-80 rounded overflow-hidden group"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <button className="bg-white text-black px-4 py-2 font-semibold rounded">
              SHOP NOW
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Collections;
