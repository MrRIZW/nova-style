    function Contact() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="text-gray-400 mb-10">
          We'd love to hear from you. Fill out the form below and our team will get back to you soon.
        </p>

        <form className="space-y-6">
          
          <div>
            <label className="block mb-2 text-sm">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-white outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-white outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-white outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition">
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;