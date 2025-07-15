
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

export default function MenuBar() {
  const location = useLocation().pathname.slice(1); // remove leading slash
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomeOrAbout = ['home', 'about', ''].includes(location); // '' covers homepage as root "/"
  const isTransparent = isHomeOrAbout && !scrolled;

  return (
    <nav
      className={`
        fixed w-full z-50 p-4 transition-colors duration-300
        ${isTransparent ? 'bg-transparent' : 'bg-white border-b border-gray-200'}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className={`w-10 transition-filter duration-300 ${isTransparent ? "invert" : ""}`}
          />
          <div className={`ml-2 font-bold transition-colors duration-300 ${isTransparent ? "text-white" : "text-gray-800"}`}>
            <p>LAND</p>
            <p className="mt-[-4px]">CURATOR</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden sm:flex space-x-6 transition-colors duration-300 ${isTransparent ? "text-white hover:" : "text-gray-600"}`}>
          <Link to="/properties"  className={`${isTransparent ? "text-white hover:bg-gray-600 hover:text-white px-3 py-1 rounded" : "text-gray-600 hover:text-black  hover:bg-gray-100 px-3 py-1 rounded"}`}>Properties</Link>
          <Link to="/blog" className={`${isTransparent ? "text-white hover:bg-gray-600 hover:text-white px-3 py-1 rounded" : "text-gray-600 hover:text-black  hover:bg-gray-100 px-3 py-1 rounded"}`}>Blog</Link>
          <Link to="/about" className={`${isTransparent ? "text-white hover:bg-gray-600 hover:text-white px-3 py-1 rounded" : "text-gray-600 hover:text-black  hover:bg-gray-100 px-3 py-1 rounded"}`}>About</Link>
          <Link to="/contact" className={`${isTransparent ? "text-white hover:bg-gray-600 hover:text-white px-3 py-1 rounded" : "text-gray-600 hover:text-black  hover:bg-gray-100 px-3 py-1 rounded "}`}>Contact</Link>
        </div>

        {/* Get in Touch Button (Desktop) */}
        <div className="hidden sm:block">
          <Link to='/contact'>
            <button className="bg-[#cdff00] px-4 py-1 rounded-tl-full rounded-br-full rounded-bl-full border border-black hover:bg-lime-300 transition">
            Get In Touch
          </button>
          </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`sm:hidden p-2 rounded-md transition-colors duration-300 ${isTransparent ? "text-white hover:bg-white/20" : "text-gray-600 hover:bg-gray-100"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className={`bg-white p-5 sm:hidden mt-4 space-y-4 px-4 transition-colors duration-300 text-gray-700`}>
          {["Properties", "Blog", "About", "Contact"].map((t) => (
            <Link onClick={() => setMenuOpen(false)} key={t} to={`/${t.toLowerCase()}`} className="block px-4 py-2 rounded hover:bg-gray-100">
              {t}
            </Link>
          ))}
          <button onClick={() => navigate('/contact')} className="w-full bg-[#cdff00] px-4 py-2 rounded-full border border-black hover:bg-lime-300 transition">
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}

