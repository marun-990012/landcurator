import { useParams } from "react-router-dom";
import properties from "../assets/propertyDetails.json";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestion";
import ContactLocation from "./ContactLocation";
import GetInTouch from "./GetInTouch";
import RelatedProperty from "./RelatedProperty";
import {
  MapPin,
  Scan,
  FileDigit,
  Workflow,
  ChartColumnIncreasing,
  SquareChartGantt,
  ChartSpline,
} from "lucide-react";

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((pro) => pro.id == id);

  const iconMap = {
    MapPin,
    Scan,
    FileDigit,
    Workflow,
    ChartColumnIncreasing,
    SquareChartGantt,
    ChartSpline,
  };

  return (
    <div className="mt-15 p-10 md:p-10">
      {/* IMAGE SECTION */}
<div className="bg-gray-200 p-4 rounded-lg">
  {/* Small screens: show single image with overlay */}
  <div className="md:hidden relative">
    <img
      src={property.images[0]}
      alt="Main"
      className="w-full h-[300px] object-cover rounded-lg"
    />
    <button className="absolute bottom-4 right-4 bg-black text-white text-xs px-4 py-2 rounded shadow hover:bg-gray-800 transition">
      View All
    </button>
  </div>

  {/* Medium and up: show full image grid */}
  <div className="hidden md:grid grid-cols-3 gap-4">
    {/* Left Large Image */}
    <div className="col-span-2">
      <img
        src={property.images[0]}
        alt="Main"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    {/* Right Grid of 3 Images */}
    <div className="flex flex-col gap-4">
      <img
        src={property.images[1]}
        alt="Sub 1"
        className="w-full h-60 object-cover rounded-lg"
      />
      <div className="relative flex gap-4">
        <img
          src={property.images[2]}
          alt="Sub 2"
          className="w-1/2 h-32 object-cover rounded-lg"
        />
        <img
          src={property.images[3]}
          alt="Sub 3"
          className="w-1/2 h-32 object-cover rounded-lg"
        />
        <button className="absolute bottom-2 right-2 bg-black text-white text-xs px-3 py-1 rounded shadow">
          View All
        </button>
      </div>
    </div>
  </div>
</div>


      {/* DESCRIPTION */}
      <div className="mt-10">
        <h2 className="text-xl font-medium">Property Description</h2>
        <div className="flex flex-col gap-5 mt-4">
          {property.description.map((detail, index) => (
            <p key={index} className="text-gray-600">
              {detail}
            </p>
          ))}
        </div>
      </div>

      {/* SPECIFICATIONS */}
      <div className="mt-10 border-b  border-t border-gray-200 py-10">
        <h3 className="text-xl font-medium">Property Specifications</h3>
        <div className="mt-6 flex flex-wrap gap-4">
          {property.propertySpecifications.map((specification, index) => {
            const Icon = iconMap[specification.icon];
            return (
              <div
                key={index}
                className="bg-[#f2eff0] flex items-start gap-3 p-3 w-full md:w-[35%] rounded-[7px] border border-gray-300"
              >
                <div className="text-gray-700 mt-1">
                  {Icon && <Icon size={21} />}
                </div>
                <div>
                  <p className="text-gray-500 text-[13px] ">
                    {specification.label}
                  </p>
                  <p className="text-[14px]">{specification.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        <FrequentlyAskedQuestions/>
      </div>

      <div className="mt-10 w-[500px] sm:w-[700px]">
         <ContactLocation/>
      </div>

      {/* <div className="mt-10 w-[400px] max-w-[700px] mx-auto">
  <ContactLocation />
</div> */}

      {/* <div className="mt-8 flex w-140">
        <GetInTouch/>
      </div> */}

      <div className="mt-10 w-[500px] sm:w-[700px]">
  <GetInTouch />
</div>

      <div>
        <RelatedProperty/>
      </div>
    </div>
  );
}

export default PropertyDetails;
