// import { useRef } from 'react';
// import { MapPin } from 'lucide-react';
// import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import properties from '../assets/propertyDetails.json';

// function RelatedProperty() {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       current.scrollBy({
//         left: direction === 'left' ? -300 : 300,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-3xl font-bold">Related Properties</h2>
//         <div className="flex gap-2">
//           <button
//             onClick={() => scroll('left')}
//             className="rounded-full p-2 hover:bg-gray-100"
//           >
//             <ArrowLeftCircle size={28} />
//           </button>
//           <button
//             onClick={() => scroll('right')}
//             className="rounded-full p-2 hover:bg-gray-100"
//           >
//             <ArrowRightCircle size={28} />
//           </button>
//         </div>
//       </div>

//       <div
//         ref={scrollRef}
//         className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
//       >
//         {properties.map((property) => (
//           <div
//             key={property.id}
//             className="min-w-[300px] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer"
//             onClick={() => navigate(`/property-details/${property.id}`)}
//           >
//             <div className="relative">
//               <img
//                 src={property.image}
//                 alt="Land"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute bottom-3 right-3 bg-green-600 text-white text-sm px-3 py-1 rounded font-semibold shadow-md">
//                 {property.price}
//               </div>
//             </div>
//             <div className="p-4">
//               <div className="flex items-start gap-2 text-gray-700 text-sm mb-1">
//                 <span className="text-lg"><MapPin /></span>
//                 <p className="font-medium">{property.location}</p>
//               </div>
//               <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
//                 <span className="text-lg">📐</span>
//                 <p className="uppercase font-semibold">{property.size}</p>
//               </div>
//               <div className="bg-gray-100 text-gray-700 text-sm p-2 rounded">
//                 {property.description[0].slice(0, 42) + '...'}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RelatedProperty;


import { useRef } from 'react';
import { MapPin, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import properties from '../assets/propertyDetails.json';

function RelatedProperty() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="px-4 md:px-10 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Related Properties</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ArrowLeftCircle size={28} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ArrowRightCircle size={28} />
          </button>
        </div>
      </div>

      {/* Scrollable Property Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4"
      >
        {properties.map((property) => (
          <div
            key={property.id}
            className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer transition hover:shadow-md flex-shrink-0"
            onClick={() => navigate(`/property-details/${property.id}`)}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={property.images[1]}
                alt="Land"
                className="w-full h-44 sm:h-48 object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-green-600 text-white text-sm px-3 py-1 rounded shadow-md font-semibold">
                {property.price}
              </div>
            </div>

            {/* Property Info */}
            <div className="p-4">
              <div className="flex items-start gap-2 text-gray-700 text-sm mb-1">
                <MapPin className="text-lg" />
                <p className="font-medium">{property.location}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <span className="text-lg">📐</span>
                <p className="uppercase font-semibold">{property.size}</p>
              </div>
              <div className="bg-gray-100 text-gray-700 text-sm p-2 rounded">
                {property.description[0].slice(0, 50)}...
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProperty;
