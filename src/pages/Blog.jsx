import BlogList from "./BlogList";
function Blog() {
  return (
    <div className="mt-20 p-6">
  <div
    className="bg-cover bg-center rounded-2xl text-white p-10"
    style={{
      backgroundImage:
        'url("https://slidescorner.com/wp-content/uploads/2022/10/04-Carol-Green-Abstract-Wave-Modern-Shape-by-SlidesCorner.jpg")',
    }}
  >
    <h1 className="text-4xl font-bold mb-4">Blogs and Insights</h1>
    <p className="text-lg mb-6 max-w-xl">
      You publish news, trends, and insights about real estate and investment opportunities.
      Follow our social media for the latest updates and features.
    </p>
    <button className="bg-white hover:text-white hover:bg-green-700 transition-colors duration-300 text-black px-6 py-2 rounded-full">
      Start Exploring ↓
    </button>
  </div>

  <div>
    <BlogList/>
  </div>
</div>

  );
}
export default Blog;
