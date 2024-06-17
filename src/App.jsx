import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar"; 
import Footer from "./component/footer/footer";
import Home from "./component/home/home";
import NewsPage from "./newspage/NewsPage";
import Team from "./component/Team/team";
import AboutUs from "./component/About/About";
import Resources from "./component/Resources/Reso";
import Blogs from "./component/Blogs/Blogs";
function App() {
  return (
    <>
    
      <Navbar />  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;