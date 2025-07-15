// const blogs = Array(3).fill({
//   title: "Building Gains Into Housing Stocks & How To Trade The Sector",
//   description:
//     "Collaborate with us to expand opportunities for others, becoming an integral part of our mission to connect African students.",
//   date: "Nov 16, 2024",
//   image:
//     "https://www.westend61.de/images/0000864614pw/realtor-giving-man-house-keys-CAIF18560.jpg",
// });

// export default function BlogSection() {
//   return (
//     <div className="mx-7">
//       <div className="py-10 px-4 max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
//           Latest blogs & insights
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl overflow-hidden border shadow-sm flex flex-col"
//             >
//               <img
//                 src={blog.image}
//                 alt="Blog"
//                 className="h-48 w-full object-cover"
//               />

//               <div className="p-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-semibold leading-snug mb-2">
//                   {blog.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-4 flex-1">
//                   {blog.description}
//                 </p>

//                 <div className="flex items-center justify-between text-sm text-gray-500">
//                   <span>Published, {blog.date}</span>
//                   <button className="px-4 py-1 border border-gray-300 rounded-md text-black hover:bg-gray-100 transition text-sm">
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



const blogs = Array(3).fill({
  title: "Building Gains Into Housing Stocks & How To Trade The Sector",
  description:
    "Collaborate with us to expand opportunities for others, becoming an integral part of our mission to connect African students.",
  date: "Nov 16, 2024",
  image:
    "https://www.westend61.de/images/0000864614pw/realtor-giving-man-house-keys-CAIF18560.jpg",
});

export default function BlogSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Latest blogs & insights
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border shadow-sm flex flex-col transition hover:shadow-md"
            >
              <img
                src={blog.image}
                alt="Blog"
                className="h-48 w-full object-cover"
              />

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                  <span>Published: {blog.date}</span>
                  <button className="px-4 py-1 border border-gray-300 rounded-md text-black hover:bg-gray-100 transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

