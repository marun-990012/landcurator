// import ContactForm from "./ContactForm";
// import ContactLocation from "./ContactLocation";
// function Contact(){
//     return(
//         <div className="mt-10 p-20 ">
//             <div>
//                 <h1 className="text-4xl font-semibold">Get In Touch</h1>
//                 <p className="mt-5"><span className="text-gray-500">You can reach via mail</span> {`>>>`} support@arkbridgeintegrated.com</p>
//             </div>
//              <div className="mt-5">
//                 <div className="flex justify-between w-full">
//                 <div >
//                     <ContactForm/>
//                 </div>

//                 <div>
//                     <ContactLocation/>
//                 </div>
//             </div>
//              </div>
//         </div>
//     )
// }
// export default Contact;



import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";

function Contact() {
  return (
    <div className="px-6 py-12 sm:px-10 md:px-20 max-w-7xl mx-auto mt-13">
      {/* Heading Section */}
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold">Get In Touch</h1>
        <p className="mt-4 text-base md:text-lg">
          <span className="text-gray-500">You can reach us via mail</span> <span className="font-medium">{`>>>`} support@arkbridgeintegrated.com</span>
        </p>
      </div>

      {/* Form + Map Section */}
      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>

        {/* Location Map */}
        <div className="w-full lg:w-1/2">
          <ContactLocation />
        </div>
      </div>
    </div>
  );
}

export default Contact;
