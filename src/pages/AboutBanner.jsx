import banner from '../assets/banner.jpg'
function AboutBanner() {
  return (
    <div
      style={{
        backgroundImage:
          `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "500px",
        width: "100%",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black/70">
        <div>
          <span className="bg-black/50 text-white text-xs font-semibold uppercase px-4 py-1 rounded-full tracking-wide shadow-md">
            Who we are
          </span>
        </div>

        <div>
            <h1 className="text-4xl font-semibold text-white mt-3">About Landcurator</h1>
        </div>

        <div className="text-center mt-4 w-[45%]">
            <p className="text-white">Our mission is to make land ownership accessible and affordable. With decades of expertise in the industry, we are the most trusted source for land deals in the country. Our licensed agents are here to help answer all your questions.</p>
        </div>
        <div className="mt-5">
            <span className="bg-white text-black px-5 py-2 font-medium rounded-full">Learn More</span>
        </div>
      </div>
    </div>
  );
}
export default AboutBanner;
