import Hero from "./components/Hero/Hero";
import MarqueeText from "./components/common/marquee/MarqueeText";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import ProjectProcess from "./(pages)/about/components/ProjectProcess/ProjectProcess";
import FAQS from "./components/Faqs/FAQS";
export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeText />
      <About />
      <Projects />
      <Services />
      <ProjectProcess />
      <FAQS />
      {/* <Testimonials hasMounted={true} /> */}
    </>
  );
}
