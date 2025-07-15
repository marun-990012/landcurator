// import HomeBanner from "./HomeBanner";
// import ExploreCities from "./ExploreCities";
// import Benefits from "./Benefits";
// import TestimonialSlider from "./Testimonial";
// import BlogSection from "./LatestBlog";
// function Home() {
//   return (
//     <div className="h-800">
//       <HomeBanner />

//       <ExploreCities />

//       <Benefits />

//       <TestimonialSlider />

//       <BlogSection />
//     </div>
//   );
// }
// export default Home;



import HomeBanner from "./HomeBanner";
import ExploreCities from "./ExploreCities";
import Benefits from "./Benefits";
import TestimonialSlider from "./Testimonial";
import BlogSection from "./LatestBlog";

function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <HomeBanner />
      <ExploreCities />
      <Benefits />
      <TestimonialSlider />
      <BlogSection />
    </div>
  );
}

export default Home;
