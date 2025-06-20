import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Certificates/>
      <Projects/>
      <Contact/>
    </>
    
  );
}
