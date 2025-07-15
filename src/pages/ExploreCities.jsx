import { CircleArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropertySlider from "./ImageSlider";
import OurServcies from "./OurServices";

function ExploreCities(){
  const navigate = useNavigate();

    return(
        <div className="mx-10 mt-8">
        <span className="bg-[#e7f4ec] text-green-700 px-3 py-1 rounded-full text-[12px] font-medium">
          EXPLORE CITIES
        </span>

        <div className="flex justify-between items-end mt-6">
          <div className="">
            <p className="w-70 text-4xl font-semibold">
              Recommended locations for you
            </p>
          </div>

          <div>
            <button onClick={()=>{navigate('/properties')}} className="bg-green-700 px-5 py-1 rounded-full border-2 border-black text-white">
              <span className="flex items-center justify-evenly">
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
            <OurServcies/>
        </div>
      </div>
    )
}
export default ExploreCities;