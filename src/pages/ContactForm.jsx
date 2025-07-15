// function ContactForm(){
//     return(
//         <div>
//             <div className="bg-[#f1f1f1] p-6 rounded-[8px] shadow w-100 border border-yellow-100">
//                 <form action="">
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="">NAME <span className="text-red-300">*</span></label>
//                         <input type="text" placeholder="John dope" className="bg-white px-3 py-1 rounded-[7px]"/>
//                     </div>

//                     <div className="flex flex-col gap-2 mt-2">
//                         <label htmlFor="">E-MAIL <span className="text-red-300">*</span></label>
//                         <input type="text" placeholder="johndope@gmail.com" className="bg-white px-3 py-1 rounded-[7px]"/>
//                     </div>

//                     <div className="flex flex-col gap-2 mt-2">
//                         <label htmlFor="">MESSAGE <span className="text-red-300">*</span></label>
//                         <textarea name="" id="" placeholder="Your Message here..." className="bg-white px-3 py-1 rounded-[7px] h-40"></textarea>
//                     </div>

//                     <div className="text-center mt-4">
//                         <button className="bg-green-800 text-white rounded-full w-full p-2 hover:bg-green-700 transition-colors duration-300 cursor-pointer">SEND MESSAGE</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default ContactForm;




function ContactForm() {
  return (
    <div className="w-full">
      <div className="bg-[#f1f1f1] p-6 rounded-lg shadow-md border border-yellow-100">
        <form>
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              NAME <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-white px-4 py-2 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-medium">
              E-MAIL <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="bg-white px-4 py-2 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-medium">
              MESSAGE <span className="text-red-400">*</span>
            </label>
            <textarea
              placeholder="Your message here..."
              className="bg-white px-4 py-2 rounded-md text-sm border border-gray-300 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
