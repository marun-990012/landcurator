
function GetInTouch() {
  return (
    <div className="md:px-0">
      <h3 className="text-xl font-medium mb-4">Get In Touch</h3>

      <div className="bg-gray-100 p-6 md:p-8 border border-gray-200 rounded-[8px]">
        <form>
          <div className="flex flex-wrap gap-4">
            {/* First Name */}
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label htmlFor="first-name">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="John"
                required
                className="bg-white px-3 py-2 rounded-[7px] border border-gray-300"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label htmlFor="last-name">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Doe"
                required
                className="bg-white px-3 py-2 rounded-[7px] border border-gray-300"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                required
                className="bg-white px-3 py-2 rounded-[7px] border border-gray-300"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1234567890"
                required
                className="bg-white px-3 py-2 rounded-[7px] border border-gray-300"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Your message here..."
                required
                className="bg-white px-3 py-2 rounded-[7px] h-40 border border-gray-300 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-green-700 text-white px-10 py-2 rounded-full hover:bg-green-800 transition w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
