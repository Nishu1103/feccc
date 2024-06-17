import News from "../News/News";
import LandingPage from "./Landingpage";
import Testimonial from "./testimonial/testmonial";
import ResourcesHome from "./Resources/Reso";
export default function  Home() {
    return (
        <>
        <LandingPage />
        <News />
        <ResourcesHome />
        <Testimonial />
        </>
    );
}
