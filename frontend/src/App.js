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
import VisaForStudy from './pages/VisaForStudy/visaforstudy';
import Usa from './pages/VisaForStudy/Usa.js';
import Canada from './pages/VisaForStudy/Canada';
import Germany from './pages/VisaForStudy/Germany';
import England from './pages/VisaForStudy/England';
import Japan from './pages/VisaForStudy/Japan';
import University from './pages/University/University';
import torontoUni from './assets/University/torontoUni.png';
import torontoUniLogo from './assets/University/torontoUniLogo.png';
import About from './pages/About/About';
import MediaQuery from 'react-responsive';
import MobileNav from './components/Navbar/MobileNav';
import torontoUniMob from './assets/University/torontoUni-mobile.png';
import Sidebar from './components/Sidebar/Sidebar';


const torontoUniversity = {
  name: 'Toronto University',
  annualDromitory: '$30,000',
  globalRanking: '1234',
  establishedYear: '1990',
  institution: 'Govermental',
  address: "21 King's College Cir, Toronto, ON M5S, Canada",
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
  paragraph2: {
    heading: 'Paragraph 2',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  paragraph3: {
    heading: 'Paragraph 3',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  paragraph4: {
    heading: 'Paragraph 4',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  paragraph5: {
    heading: 'Paragraph 5',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  paragraph6: {
    heading: 'Paragraph 6',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },

  faculty: [
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
    {
      name: 'Faculty of Science',
      degree1: "Bachelor's Degree",
      degree2: "Master's Degree",
    },
  ],
};

function App() {
  return (
    <BrowserRouter>
      <header>
        <MediaQuery minWidth={375}>
          {(matches) => (matches ? <Navbar></Navbar> : <MobileNav></MobileNav>)}
        </MediaQuery>
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
          {/* <Route path='sidebar' element={<Sidebar/>}></Route> */}
          

          <Route path="/blogpagetest" element={<BlogPage />}></Route>
          <Route path="/country" element={<VisaForStudy />}></Route>
          <Route path="/canada" element={<Canada />}></Route>
          <Route path="/usa" element={<Usa />}></Route>
          <Route path="/germany" element={<Germany />}></Route>
          <Route path="/england" element={<England />}></Route>
          <Route path="/japan" element={<Japan />}></Route>

          <Route
            path="/visaforstudy/canada/torontouniversity"
            element={
              <University
                university={torontoUniversity}
                uniHeaderImage={torontoUni}
                uniLogo={torontoUniLogo}
                uniHeaderMobileImg={torontoUniMob}
              />
            }
          ></Route>

          <Route path="/about" element={<About />}></Route>




        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
