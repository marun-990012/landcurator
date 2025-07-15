
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  Tag,
} from "lucide-react";
import PropertyList from "./PropertyList";

function Properties() {
  return (
    <div className="mt-25 px-4 md:px-10 lg:px-14">
      {/* Search & Filter Form */}
      <form className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
        <div className="flex flex-col gap-4">
          {/* Search Input */}
          <div className="flex items-center w-full border border-gray-300 rounded-md px-3">
            <Search className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 outline-none text-sm"
            />
          </div>

          
          <div className="flex flex-wrap gap-3">
            {["Country", "City", "State"].map((label, idx) => (
              <select
                key={idx}
                className="border border-gray-300 rounded-md p-2 text-sm"
              >
                <option value="">{label}</option>
              </select>
            ))}

            {/* Price Filter */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
              <Tag className="text-gray-500" size={18} />
              <select className="outline-none text-sm w-full bg-transparent">
                <option value="">Price</option>
              </select>
            </div>

            {/* Filter Button */}
            <button
              type="button"
              className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50"
            >
              <SlidersHorizontal size={17} />
              Filter
            </button>
          </div>

          {/* Search Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md flex items-center gap-2 border border-green-400"
            >
              Search <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </form>

      {/* Available Locations */}
      <div className="mt-6 bg-[#f4f0f1] p-4 rounded-md">
        <h2 className="text-lg font-medium mb-3">Available Locations</h2>
        <div className="flex flex-wrap gap-3">
          {["Bexar", "Elpaso", "Imperial", "Murray", "Soccoro"].map((loc, i) => (
            <span
              key={i}
              className="bg-white px-4 py-1 text-sm rounded shadow-sm"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>

      {/* Property List */}
      <div className="mt-6">
        <PropertyList />
      </div>
    </div>
  );
}

export default Properties;


