
import location from "../assets/location7.jpg";
import {
  ClipboardList,
  Tags,
  Search,
  Star,
} from "lucide-react";

const features = [
  {
    title: "Best Property Listing",
    description:
      "We provide consumers with a content-rich listing in a handy format.",
    icon: ClipboardList,
  },
  {
    title: "Best market price",
    description:
      "Price estimates and sales histories for property, updating information.",
    icon: Tags,
  },
  {
    title: "Market research",
    description:
      "All our marketing research today have a tough job multitasking.",
    icon: Search,
  },
  {
    title: "Guaranteed service",
    description:
      "Our managers will keep you informed and you can act with certainty.",
    icon: Star,
  },
];

function OurServices() {
  return (
    <div className="bg-green-800 w-full mt-10 px-6 py-10 rounded">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-10 items-center md:items-start">
        {/* Image - shown below content on mobile */}
        <div className="w-full md:w-1/2">
          <img
            src={location}
            alt="location"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text + Features */}
        <div className="w-full md:w-1/2">
          <span className="bg-[#377d4d] text-white px-5 py-1 rounded-full text-sm">
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            What we offer
          </h2>

          <p className="text-white mt-3 text-[16px] leading-relaxed">
            Here are four reasons why Careerleap is your best choice for goal actualization
          </p>

          {/* Features */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <span>
                  <item.icon size={24} className="text-yellow-400" />
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;

