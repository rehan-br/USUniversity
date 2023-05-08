import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js';
import Blog from './pages/Blog/Blog.js';
import Profile1 from './pages/Profile/profile1.js';
import Profile2 from './pages/Profile/profile2.js';
import Rf1 from './pages/RegisterationForm/Rf1.js';
import Contact from './pages/Contact/contact';
import Footer from './components/Footer/Footer.js';
import Rf2 from './pages/RegisterationForm/Rf2.js';
import Rf3 from './pages/RegisterationForm/Rf3.js';
import Rf4 from './pages/RegisterationForm/Rf4.js';
import Service from './pages/Service/Service.js';
import BlogPage from './pages/Individual Blog/blogpage.js';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail.js';
import VisaForStudy from './pages/VisaForStudy/VisaForStudy';
import Usa from './pages/VisaForStudy/Usa.js';
import Canada from './pages/VisaForStudy/Canada';
import Germany from './pages/VisaForStudy/Germany';
import  England from './pages/VisaForStudy/England';
import  Japan from './pages/VisaForStudy/Japan';
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

          <Route path="/profile1" element={<Profile1 />}></Route>
          <Route path="/profile" element={<Profile2 />}></Route>
          <Route path="/reg" element={<Rf1 />}></Route>
          <Route path="/reg2" element={<Rf2 />}></Route>
          <Route path="/reg3" element={<Rf3 />}></Route>
          <Route path="/reg4" element={<Rf4 />}></Route>

          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />}></Route>
          <Route path="/service/details" element={<ServiceDetail />}></Route>

          <Route path="/blogpagetest" element={<BlogPage />}></Route>
          <Route path="/country" element={<VisaForStudy />}></Route>
          <Route path="/canada" element={<Canada />}></Route>
          <Route path="/usa" element={<Usa />}></Route>
          <Route path="/germany" element={<Germany />}></Route>
          <Route path="/england" element={<England />}></Route>
          <Route path="/japan" element={<Japan />}></Route>
         
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
