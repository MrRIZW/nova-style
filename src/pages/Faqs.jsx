function Faqs() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">Frequently Asked Questions</h1>

        <div className="space-y-8 text-gray-300">

          <div>
            <h3 className="text-white font-semibold mb-2">
              How long does shipping take?
            </h3>
            <p>
              Orders are processed within 1-2 business days and typically delivered within 5-7 business days.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              Can I return my order?
            </h3>
            <p>
              Yes, we offer a 7-day return policy for unused items in original condition.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              How can I track my order?
            </h3>
            <p>
              Once your order is shipped, you will receive a tracking link via email.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Faqs;