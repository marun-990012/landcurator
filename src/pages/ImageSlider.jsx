
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { ArrowRight } from "lucide-react";

import location1 from '../assets/location1.jpg';
import location2 from '../assets/location2.jpg';
import location3 from '../assets/location3.jpg';
import location4 from '../assets/location4.jpg';
import location5 from '../assets/location5.jpg';
import location6 from '../assets/location6.jpg';

const properties = [
  {
    title: "14 Vernamont Drive",
    count: "100 properties",
    image: location1,
  },
  {
    title: "14 Vernamont Drive",
    count: "100 properties",
    image: location2,
  },
  {
    title: "14 Vernamont Drive",
    count: "100 properties",
    image: location3,
  },
  {
    title: "14 Vernamont Drive",
    count: "100 properties",
    image: location4,
  },
  {
    title: "14 Vernamont Drive",
    count: "100 properties",
    image: location5,
  },
  {
    title: "14 Vernamont Drive",
    count: "100 properties",
    image: location6,
  },
];

export default function PropertySlider() {
  return (
    <div className=" py-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
      >
        {properties.map((property, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">{property.title}</p>
                  <p className="text-xs">{property.count}</p>
                </div>
                <button className="bg-white text-black rounded-full p-2">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

