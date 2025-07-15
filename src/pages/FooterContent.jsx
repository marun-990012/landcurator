import logo from "../assets/logo2.png";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  X,
} from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    items: ["Home", "Properties", "About", "Blogs"],
  },
  {
    title: "Support",
    items: ["Contact", "Terms & policy", "Testimonial"],
  },
  {
    title: "County",
    items: ["Delocaso", "Pendul", "Captain Height", "Hollywood"],
  },
  {
    title: "State",
    items: ["Belarose", "Talantum", "Belmount", "Calgary"],
  },
  {
    title: "Zip Code",
    items: ["100001", "100002", "100004", "100006"],
  },
];

const social = [
  { media: "Instagram", icon: Instagram },
  { media: "Facebook", icon: Facebook },
  { media: "LinkedIn", icon: Linkedin },
  { media: "Youtube", icon: Youtube },
  { media: "X (Twitter)", icon: X },
];

function FooterContent() {
  return (
    <div className="bg-gray-100 p-6 sm:p-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        
        <div className="flex-1">
          <img src={logo} alt="logo" className="w-28 mb-4" />
          <p className="text-gray-700 max-w-sm">
            We are the leading real estate and marketplace dedicated to affordable land deals.
          </p>
        </div>

        
        <div className="flex flex-wrap gap-6 flex-[2]">
          {footerColumns.map((col, index) => (
            <div key={index} className="min-w-[130px]">
              <h3 className="font-semibold mb-2 text-gray-800">{col.title}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {col.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {social.map((info, index) => {
          const Icon = info.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-800 text-sm shadow-sm"
            >
              <span>{info.media}</span>
              <Icon className="w-5 h-5" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FooterContent;
