import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home/home";
import Team from "./Component/Team/Team";
import NewsPage from "./Newspage/NewsPage";
import ResourcesHome from "./Component/Home/Resources/Reso";
import Blogs from "./Component/Blogs/Blogs";
import Footer from "./Component/Footer/Footer";
import Desktop from "./Component/Home/desktop";
import Courses from "./Component/Courses/courses";
import Contact from "./Component/Contact/Contact";
import Registration from "./Component/register/registration";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<ResourcesHome />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
