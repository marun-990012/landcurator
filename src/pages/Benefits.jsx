// import trusted from "../assets/trustedseller.webp";
// import ownership from "../assets/simplifyingownershiplandpurchase.jpg";
// import easybuy from "../assets/easybuy.webp";

// const benefits = [
//   {
//     title: "Trusted land seller",
//     description:
//       "We make land ownership accessible, offering vacant properties with transparency, backed by our BBB accreditation and happy customers.",
//     image: trusted, // Replace with real image URL
//   },
//   {
//     title: "Simplifying ownership",
//     description:
//       "We cut out agents, saving you money with fast, direct transactions and unbeatable prices passed on to our satisfied customers.",
//     image: ownership, // Replace with real image URL
//   },
//   {
//     title: "Easy land buying",
//     description:
//       "For over 10 years, LandXperte has helped people own peaceful, rural land with no hidden fees, making ownership fast and simple.",
//     image: easybuy, // Replace with real image URL
//   },
// ];

// function Benefits() {
//   return (
//     <div className="mt-10">
//       <div className="text-center">
//         <span className="bg-[#e7f4ec] text-green-700 px-3 py-1 rounded-full text-[12px] font-medium">
//           BENEFITS
//         </span>
//         <h1 className="text-4xl font-semibold mt-2">Why choose Landcurator?</h1>
//         <p className="w-full max-w-2xl mx-auto text-center text-gray-700 px-4 mt-4">
//           We make land ownership simple, accessible, and stress-free with prime
//           locations, quick transactions, and a seamless process tailored to meet
//           your needs.
//         </p>

//         <div className="py-10 px-4 max-w-6xl mx-auto">
//           <p className="w-full max-w-2xl mx-auto text-center text-gray-700 mb-10">
//             We make land ownership simple, accessible, and stress-free with
//             prime locations, quick transactions, and a seamless process tailored
//             to meet your needs.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition duration-300"
//               >
//                 <img
//                   src={benefit.image}
//                   alt={benefit.title}
//                   className="h-48 w-full object-cover"
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="text-lg font-semibold mb-2">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Benefits;



import trusted from "../assets/trustedseller.webp";
import ownership from "../assets/simplifyingownershiplandpurchase.jpg";
import easybuy from "../assets/easybuy.webp";

const benefits = [
  {
    title: "Trusted land seller",
    description:
      "We make land ownership accessible, offering vacant properties with transparency, backed by our BBB accreditation and happy customers.",
    image: trusted,
  },
  {
    title: "Simplifying ownership",
    description:
      "We cut out agents, saving you money with fast, direct transactions and unbeatable prices passed on to our satisfied customers.",
    image: ownership,
  },
  {
    title: "Easy land buying",
    description:
      "For over 10 years, LandXperte has helped people own peaceful, rural land with no hidden fees, making ownership fast and simple.",
    image: easybuy,
  },
];

function Benefits() {
  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="bg-[#e7f4ec] text-green-700 px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
          BENEFITS
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold mt-3">
          Why choose Landcurator?
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-2">
          We make land ownership simple, accessible, and stress-free with prime
          locations, quick transactions, and a seamless process tailored to meet
          your needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;

