function FooterSubscribeSection() {
  return (
    <div
      className="bg-cover bg-center text-white p-10"
      style={{
        backgroundImage:
          'url("https://slidescorner.com/wp-content/uploads/2022/10/04-Carol-Green-Abstract-Wave-Modern-Shape-by-SlidesCorner.jpg")',
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start text-left">
        <h2 className="text-2xl md:text-2xl font-bold mb-6 max-w-120">
          Subscribe to get updates on our latest offers and updates
        </h2>

        
        <form className="flex w-full max-w-120 bg-white rounded-full overflow-hidden border border-black p-1">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="flex-grow px-4 py-1 text-black outline-none text-sm rounded-l-full"
          />
          <button
            type="submit"
            className="bg-[#CDFF00] px-3 sm:px-6 py-1 border border-black text-black font-semibold rounded-full hover:bg-lime-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default FooterSubscribeSection;
