const testimonials = Array(12).fill({
  quote:
    "Quick and easy doing business with LandXperte! Made a deal online via email over a few minutes. The deed was in my hands two weeks later!",
  name: "Charles Klinton",
  role: "Retired",
  rating: 5,
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
});

export default function TestimonialSlider() {
  return (
    <div className="mt-8">
      <div className="text-center">
        <span className="bg-[#e7f4ec] text-green-700 px-3 py-1 rounded-full text-[12px] font-medium">
          TESTIMONIALS
        </span>

        <h1 className="text-4xl font-semibold mt-2 w-full max-w-2xl mx-auto text-center">
          We know testimonials drive trust — here’s why people trust us
        </h1>

        <div className="mx-7">
          <div className="py-10">
            
            <div className="flex gap-4 overflow-x-auto no-scrollbar scrollbar-hide pb-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[150px] sm:min-w-[150px] max-w-[250px] bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex-shrink-0"
                >
                  <p className="text-gray-700 text-sm mb-3">
                    {testimonial.quote}
                  </p>

                  {/* Quote marks */}
                  <div className="text-4xl text-gray-200 font-serif leading-none mb-3">
                    “”
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-9 h-9 rounded-full"
                    />
                    <div className="text-left">
                      <p className="text-sm font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                      <span className="text-yellow-500 text-[14px]">
                        {"★".repeat(testimonial.rating)}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
