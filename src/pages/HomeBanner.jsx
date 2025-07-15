
import { Search } from "lucide-react";

function HomeBanner() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/victorborg.com/wp-content/uploads/featured-image-3.jpg?fit=1200%2C801&ssl=1')",
      }}
    >
      <div className="flex flex-col items-center justify-center h-[500px] bg-black/60 px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug max-w-2xl">
          Find Your Perfect Land in Texas & New Mexico
        </h2>

        {/* Search Area */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-8 w-full max-w-5xl">
          
          <div className="flex items-center bg-white rounded-full p-2 shadow-md w-full sm:w-[60%]">
            <Search className="text-gray-500 ml-2" size={18} />
            <input
              type="text"
              placeholder="Search Location"
              className="flex-grow px-3 py-2 rounded-full outline-none text-sm"
            />
          </div>

          {/* City Select */}
          <select className="bg-white rounded-md shadow-md px-3 py-2 text-sm outline-none">
            <option value="">City</option>
            
          </select>

          {/* State Select */}
          <select className="bg-white rounded-md shadow-md px-3 py-2 text-sm outline-none">
            <option value="">State</option>
            
          </select>

          {/* Country Select */}
          <select className="bg-white rounded-md shadow-md px-3 py-2 text-sm outline-none">
            <option value="">Country</option>
            
          </select>

          {/* Search Button */}
          <button className="bg-[#cdff00] px-6 py-2 rounded-full border border-black hover:bg-lime-300 transition text-sm shadow-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
