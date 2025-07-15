import { CircleArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropertySlider from "./ImageSlider";
import OurServcies from "./OurServices";

function ExploreCities() {
  const navigate = useNavigate();

  return (
    <div className="px-3 mt-8">
      <span className="bg-[#e7f4ec] text-green-700 px-3 py-1 rounded-full text-[12px] font-medium">
        EXPLORE CITIES
      </span>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-6">
        {/* Heading */}
        <div className="sm:w-1/2">
          <p className="w-70 text-4xl font-semibold">
            Recommended locations for you
          </p>
        </div>

        {/* Button */}
        <div className="sm:w-auto">
          <button
            onClick={() => navigate("/properties")}
            className="bg-green-700 px-5 py-2 rounded-full border-2 border-black text-white hover:bg-green-800 transition"
          >
            <span className="flex items-center">
              View All Properties
              <CircleArrowRight size={18} className="ml-2" />
            </span>
          </button>
        </div>
      </div>

      <div className="mt-5">
        <PropertySlider />
      </div>
      <div>
        <OurServcies />
      </div>
    </div>
  );
}
export default ExploreCities;
