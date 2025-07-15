import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import blogData from '../assets/Blogs.json';

function BlogList() {
    const navigate = useNavigate();
  return (
    <div className="p-2 max-w-7xl mx-auto mt-5">
        <div className="w-full mb-5">
            <form action="">
                <div className="flex w-full flex justify-center items-center border-2 border-gray-200 rounded-[7px]">
                    <div className="w-full rounded-[7px] flex items-center px-4">
                        <span><Search/></span>
                        <input type="text" placeholder="Search..." className="w-full p-2 focus:outline-none" />
                    </div>
                    <div className='bg-[#c6ff00] hover:bg-[#f7f809] transition-colors duration-300 p-2 border-l-2 border-l-gray-300'>
                        <select name="" id="" className='focus:outline-none'>
                            <option value="">Select Category</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((post) => (
          <div 
            key={post.id}
            onClick={()=>{navigate(`/blog-detail/${post.id}`)}}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <img
              src={post.image}
              alt="Blog thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Published, {post.date}</span>
                <button className="border border-gray-200 hover:bg-gray-200 text-black font-medium px-4 py-2 rounded-[7px]">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
