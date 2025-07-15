import { MapPin  } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import properties from '../assets/propertyDetails.json'

const PropertyList = () => {
    const navigate = useNavigate();
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Available Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
            onClick={()=>{
                navigate(`/property-details/${property.id}`)
            }}
          >
            <div className="relative">
              <img
                src={property.images[1]}
                alt="Land"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-green-600 text-white text-sm px-3 py-1 rounded font-semibold shadow-md">
                {property.price}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start gap-2 text-gray-700 text-sm mb-1">
                <span className="text-lg"><MapPin/></span>
                <p className="font-medium">{property.location}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <span className="text-lg">📐</span>
                <p className="uppercase font-semibold">{property.size}</p>
              </div>
              <div className="bg-gray-100 text-gray-700 text-sm p-2 rounded">
                {property.description[0].slice(0,42)+'...'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
