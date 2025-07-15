
function ContactForm() {
  return (
    <div className="w-full">
      <div className="bg-[#f1f1f1] p-6 rounded-lg shadow-md border border-yellow-100">
        <form>
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              NAME <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-white px-4 py-2 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-medium">
              E-MAIL <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="bg-white px-4 py-2 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-medium">
              MESSAGE <span className="text-red-400">*</span>
            </label>
            <textarea
              placeholder="Your message here..."
              className="bg-white px-4 py-2 rounded-md text-sm border border-gray-300 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
