// import { ArrowBigRight, ArrowRight, Search, SlidersHorizontal, Tag } from "lucide-react";
// import PropertyList from "./PropertyList";
// function Properties() {
//   return (
//     <div className="mt-10 p-14">
//       <div>
//         <form action="">
//           <div className="flex justify-evenly items-center gap-2 border-b p-2 border-gray-200">
//             <div className="flex w-full flex justify-center items-center border-2 border-gray-200 rounded-[7px]">
//               <div className="w-full rounded-[7px] flex items-center px-4">
//                 <span>
//                   <Search />
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full p-2 focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="border-2 border-gray-200 rounded-[7px] px-2">
//                 <select name="" id="" className="p-2 focus:outline-none">
//                     <option value="">Country</option>
//                 </select>
//             </div>

//             <div className="border-2 border-gray-200 rounded-[7px] px-2">
//                 <select name="" id="" className="p-2 focus:outline-none">
//                     <option value="">City</option>
//                 </select>
//             </div>

//             <div className="border-2 border-gray-200 rounded-[7px] px-2">
//                 <select name="" id="" className="p-2 focus:outline-none">
//                     <option value="">State</option>
//                 </select>
//             </div>

//             <div className="border-2 border-gray-200 rounded-[7px] px-2 flex items-center">
//                  <Tag size={18} className="text-gray-500" />
//                 <select name="" id="" className="p-2 focus:outline-none">
//                     <option value="">Price</option>
//                 </select>
//             </div>

//             <div className="border-2 border-gray-200 rounded-[7px] px-2">
//                 <p className="p-2"><span className="flex items-center gap-2"><SlidersHorizontal size={17}/>Filter</span></p>
//             </div>

//             <div className="">
//                 <button className="border-2 border-green-300 rounded-[7px] px-5 p-2 flex gap-3 items-center bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white">Search <ArrowRight/></button>
//             </div>

//           </div>
//         </form>
//       </div>

//       <div className="mt-5 bg-[#f4f0f1] p-5 rounded-[8px]">
//         <div className="">
//             <h1 className="text-xl font-medium">Available Locations</h1>
//         </div>

//         <div className="flex gap-4 mt-5">
//             <span className="bg-white text-black p-1 px-4 rounded">Bexar</span>
//             <span className="bg-white text-black p-1 px-4 rounded">Elpaso</span>
//             <span className="bg-white text-black p-1 px-4 rounded">Imperial</span>
//             <span className="bg-white text-black p-1 px-4 rounded">Murray</span>
//             <span className="bg-white text-black p-1 px-4 rounded">Soccoro</span>
//         </div>
//       </div>

//       <div className="">
//         <PropertyList/>
//       </div>
//     </div>
//   );
// }
// export default Properties;


// import {
//   ArrowRight,
//   Search,
//   SlidersHorizontal,
//   Tag,
// } from "lucide-react";
// import PropertyList from "./PropertyList";

// function Properties() {
//   return (
//     <div className="mt-25 px-4 md:px-10 lg:px-14">
//       {/* Search & Filter Form */}
//       <form className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
//         <div className="flex flex-col md:flex-wrap lg:flex-row gap-4 items-center">
//           {/* Search Box */}
//           <div className="flex items-center w-full md:flex-1 border border-gray-300 rounded-md px-3">
//             <Search className="text-gray-400 mr-2" size={18} />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full p-2 outline-none text-sm"
//             />
//           </div>

//           {/* Select Dropdowns */}
//           {["Country", "City", "State"].map((label, idx) => (
//             <select
//               key={idx}
//               className="w-full md:w-auto border border-gray-300 rounded-md p-2 text-sm"
//             >
//               <option value="">{label}</option>
//             </select>
//           ))}

//           {/* Price Filter */}
//           <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 w-full md:w-auto">
//             <Tag className="text-gray-500" size={18} />
//             <select className="outline-none text-sm w-full">
//               <option value="">Price</option>
//             </select>
//           </div>

//           {/* Filter Icon (non-functional UI) */}
//           <button
//             type="button"
//             className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50"
//           >
//             <SlidersHorizontal size={17} />
//             Filter
//           </button>

//           {/* Search Button */}
//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md flex items-center gap-2 border border-green-400"
//           >
//             Search <ArrowRight size={18} />
//           </button>
//         </div>
//       </form>

//       {/* Available Locations */}
//       <div className="mt-6 bg-[#f4f0f1] p-4 rounded-md">
//         <h2 className="text-lg font-medium mb-3">Available Locations</h2>
//         <div className="flex flex-wrap gap-3">
//           {["Bexar", "Elpaso", "Imperial", "Murray", "Soccoro"].map((loc, i) => (
//             <span
//               key={i}
//               className="bg-white px-4 py-1 text-sm rounded shadow-sm"
//             >
//               {loc}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Property List */}
//       <div className="mt-6">
//         <PropertyList />
//       </div>
//     </div>
//   );
// }

// export default Properties;



// import {
//   ArrowRight,
//   Search,
//   SlidersHorizontal,
//   Tag,
// } from "lucide-react";
// import PropertyList from "./PropertyList";

// function Properties() {
//   return (
//     <div className="mt-25 px-4 md:px-10 lg:px-14">
//       {/* Search & Filter Form */}
//       <form className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
//         <div className="flex flex-col gap-4">
//           {/* Search Input */}
//           <div className="flex items-center w-full border border-gray-300 rounded-md px-3">
//             <Search className="text-gray-400 mr-2" size={18} />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full p-2 outline-none text-sm"
//             />
//           </div>

//           {/* Scrollable Row for Dropdowns on Small Devices */}
//           <div className="flex gap-3 overflow-x-auto md:overflow-visible md:flex-wrap">
//             {["Country", "City", "State"].map((label, idx) => (
//               <select
//                 key={idx}
//                 className="min-w-[140px] border border-gray-300 rounded-md p-2 text-sm flex-shrink-0"
//               >
//                 <option value="">{label}</option>
//               </select>
//             ))}

//             {/* Price Filter */}
//             <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 min-w-[140px] flex-shrink-0">
//               <Tag className="text-gray-500" size={18} />
//               <select className="outline-none text-sm w-full bg-transparent">
//                 <option value="">Price</option>
//               </select>
//             </div>

//             {/* Filter Button */}
//             <button
//               type="button"
//               className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 min-w-[120px] flex-shrink-0"
//             >
//               <SlidersHorizontal size={17} />
//               Filter
//             </button>
//           </div>

//           {/* Search Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md flex items-center gap-2 border border-green-400"
//             >
//               Search <ArrowRight size={18} />
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Available Locations */}
//       <div className="mt-6 bg-[#f4f0f1] p-4 rounded-md">
//         <h2 className="text-lg font-medium mb-3">Available Locations</h2>
//         <div className="flex flex-wrap gap-3">
//           {["Bexar", "Elpaso", "Imperial", "Murray", "Soccoro"].map((loc, i) => (
//             <span
//               key={i}
//               className="bg-white px-4 py-1 text-sm rounded shadow-sm"
//             >
//               {loc}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Property List */}
//       <div className="mt-6">
//         <PropertyList />
//       </div>
//     </div>
//   );
// }

// export default Properties;



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

          {/* Responsive Row for Dropdowns */}
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


