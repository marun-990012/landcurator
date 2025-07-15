// function ContactLocation(){
//     return(
//         <div className="flex flex-col gap-3">
//             <div className="flex flex-col gap-2">
//                 <h2>ADDRESS</h2>
//                 <p className="text-gray-500">Freedom way 10001 Zone APU, United Kingdom</p>
//                 <h2>CONTACT</h2>
//                 <p className="text-gray-500">+23490-8888-9999</p>
//             </div>
//             <div className="w-150 bg-white p-6 rounded-[8px] shadow w-100 border border-yellow-100">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.926706504904!2d-73.98715528459326!3d40.75889567932679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854a9b5f9e5%3A0xa74caa3e1f9b4f2!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1629223420123!5m2!1sen!2sus"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="rounded-xl w-full"
//           ></iframe>
//         </div>
//         </div>
//     )
// }
// export default ContactLocation;


function ContactLocation() {
  return (
    <div className="flex flex-col md:flex-col gap-8 px- py-1 max-w-6xl mx-auto">
      {/* Address & Contact Info */}
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">ADDRESS</h2>
          <p className="text-gray-600 mt-1">
            Freedom Way 10001 Zone APU, United Kingdom
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">CONTACT</h2>
          <p className="text-gray-600 mt-1">+23490-8888-9999</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="flex-1 bg-white p-4 sm:[80px] rounded-xl shadow border border-yellow-100">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.926706504904!2d-73.98715528459326!3d40.75889567932679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854a9b5f9e5%3A0xa74caa3e1f9b4f2!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1629223420123!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl w-full"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactLocation;
