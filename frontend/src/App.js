import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js';
import Blog from './pages/Blog/Blog.js';
import Contact from './pages/Contact/contact.js';
import Service from './pages/Service/Service.js';
import BlogPage from './pages/Individual Blog/blogpage.js';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />}></Route>
          <Route path="/blogpagetest" element={<BlogPage />}></Route>
          {/*Above Test Route Delete Later*/} 
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
