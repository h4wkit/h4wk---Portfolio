import Home from "@/app/components/Home/home";
import AboutMe from "@/app/components/AboutMe/about-me";
import Projects from "@/app/components/Projects/projects";
import ContactMe from "@/app/components/ContactMe/contact-me";

function HomePage() {
  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}
export default HomePage;
