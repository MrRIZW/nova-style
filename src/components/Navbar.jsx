function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h1 className="text-2xl font-bold tracking-widest">NOVA</h1>

      <ul className="hidden md:flex gap-8 text-sm">
        <li className="hover:text-gray-400 cursor-pointer">NEW ARRIVALS</li>
        <li className="hover:text-gray-400 cursor-pointer">MENS</li>
        <li className="hover:text-gray-400 cursor-pointer">WOMENS</li>
        <li className="hover:text-gray-400 cursor-pointer">ACCESSORIES</li>
        <li className="hover:text-gray-400 cursor-pointer">SALE</li>
      </ul>

      <div className="md:hidden text-xl cursor-pointer">☰</div>
    </nav>
  );
}

export default Navbar;
