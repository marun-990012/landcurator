// function HomeBanner(){
//     return(
//          <div
//         style={{
//           backgroundImage:
//             "url('https://i0.wp.com/victorborg.com/wp-content/uploads/featured-image-3.jpg?fit=1200%2C801&ssl=1')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "500px",
//           width: "100%",
//         }}
//       >
//         <div className="flex flex-col items-center justify-center h-full bg-black/60">
//           <div className="w-full px-10 mt-25">
//             <h2 className="text-left w-[40%] text-white text-5xl font-bold text-center px-4 leading-15">
//               Find Your Perfect Land in Texas & New Mexico
//             </h2>
//           </div>

//           <div className="flex flex-wrap justify-center items-center gap-4 mt-10 w-full px-4">
//             {/* Search Input */}
//             <div className="bg-white w-full sm:w-[55%] rounded-full p-2 shadow-md flex items-center">
//               <input
//                 type="text"
//                 placeholder="Search Location"
//                 className="w-full px-4 py-2 rounded-full outline-none text-sm"
//               />
//             </div>

//             {/* City Select */}
//             <div className="bg-white rounded-md shadow-md px-2 py-2">
//               <select className="outline-none text-sm">
//                 <option value="">City</option>
//                 {/* Add more cities */}
//               </select>
//             </div>

//             {/* State Select */}
//             <div className="bg-white rounded-md shadow-md px-2 py-2">
//               <select className="outline-none text-sm">
//                 <option value="">State</option>
//                 {/* Add more states */}
//               </select>
//             </div>

//             {/* Country Select */}
//             <div className="bg-white rounded-md shadow-md px-2 py-2">
//               <select className="outline-none text-sm">
//                 <option value="">Country</option>
//                 {/* Add more countries */}
//               </select>
//             </div>

//             {/* Search Button */}
//             <div className="bg-[#cdff00] rounded-full px-4 py-2 border border-black hover:bg-lime-300 transition text-sm shadow-md">
//               <button>Search</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
// }
// export default HomeBanner;



import { Search } from "lucide-react";

function HomeBanner() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/victorborg.com/wp-content/uploads/featured-image-3.jpg?fit=1200%2C801&ssl=1')",
      }}
    >
      <div className="flex flex-col items-center justify-center h-[500px] bg-black/60 px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug max-w-2xl">
          Find Your Perfect Land in Texas & New Mexico
        </h2>

        {/* Search Area */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-8 w-full max-w-5xl">
          {/* Search Input with Icon */}
          <div className="flex items-center bg-white rounded-full p-2 shadow-md w-full sm:w-[60%]">
            <Search className="text-gray-500 ml-2" size={18} />
            <input
              type="text"
              placeholder="Search Location"
              className="flex-grow px-3 py-2 rounded-full outline-none text-sm"
            />
          </div>

          {/* City Select */}
          <select className="bg-white rounded-md shadow-md px-3 py-2 text-sm outline-none">
            <option value="">City</option>
            {/* Add cities */}
          </select>

          {/* State Select */}
          <select className="bg-white rounded-md shadow-md px-3 py-2 text-sm outline-none">
            <option value="">State</option>
            {/* Add states */}
          </select>

          {/* Country Select */}
          <select className="bg-white rounded-md shadow-md px-3 py-2 text-sm outline-none">
            <option value="">Country</option>
            {/* Add countries */}
          </select>

          {/* Search Button */}
          <button className="bg-[#cdff00] px-6 py-2 rounded-full border border-black hover:bg-lime-300 transition text-sm shadow-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
