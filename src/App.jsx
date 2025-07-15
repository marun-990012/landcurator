import {Routes,Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import PropertyDetails from './pages/PropertyDetails';
import BlogDetails from './pages/BlogDetails';
import ScrollToTop from './pages/ScrollToTop';
function App() {
  return (
   <div>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/properties' element={<Properties/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog-detail/:id' element={<BlogDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/property-details/:id' element={<PropertyDetails/>}/> 
      </Route>
    </Routes>
   </div>
  )
}

export default App
