import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js';
import Blog from './pages/Blog/Blog.js';
import Contact from './pages/Contact/contact.js'
import Profile1 from './pages/Profile/profile1.js'
import Profile2 from './pages/Profile/profile2.js'
import Rf1 from './pages/RegisterationForm/Rf1.js'
function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={ <Contact />}/>
          <Route path='/profile1' element={<Profile1/>}></Route>
          <Route path='/profile' element={<Profile2/>}></Route>
          <Route path='/reg' element={<Rf1 />}></Route>

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
