import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home/home";
import Team from "./Component/Team/Team";
import NewsPage from "./Newspage/NewsPage";
import AboutUs from "./Component/About/AboutUs";
import ResourcesHome from "./Component/Home/Resources/Reso";
import Blogs from "./Component/Blogs/Blogs";
import Footer from "./Component/Footer/Footer";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
      
      <Route index path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/resources" element={<ResourcesHome />} />
        <Route path="/blogs" element={<Blogs />} />
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
