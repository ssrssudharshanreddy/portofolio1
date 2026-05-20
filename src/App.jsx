import { Navbar } from "./components/layout/Navbar/Navbar";
import { Footer } from "./components/layout/Footer/Footer";
import { Hero } from "./components/sections/Hero/Hero";
import { About } from "./components/sections/About/About";
import { Skills } from "./components/sections/Skills/Skills";
import { Projects } from "./components/sections/Projects/Projects";
import { Education } from "./components/sections/Education/Education";
import { Contact } from "./components/sections/Contact/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
