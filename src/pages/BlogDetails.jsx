import { useParams } from "react-router-dom";
import blogData from "../assets/blogs.json";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="mt-25 text-center text-red-500 font-semibold">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="mt-25 px-4 md:px-20 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{blog.date}</p>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[300px] md:h-[400px] object-cover rounded-lg mb-6"
      />

      <p className="text-lg leading-7 text-gray-700">{blog.description}</p>
    </div>
  );
}

export default BlogDetails;
