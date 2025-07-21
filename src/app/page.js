import Hero from "./components/Hero/Hero";
import MarqueeText from "./components/common/marquee/MarqueeText";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeText />
      <About />
      <Projects />
      <Services />
      <Testimonials hasMounted={true} />
    </>
  );
}
