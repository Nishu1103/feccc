import LandingPage from "./Landingpage";
import Testimonial from "./testimonial/testmonial";
import MyPreviousWork from "../MyPreviousWork/MyPreviousWork";
import About from "../About/About";

import InvestopediaArticles from "../InvestopediaArticles/InvestopediaArticles";
export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <MyPreviousWork />
      <InvestopediaArticles />
      <Testimonial />
    </>
  );
}
