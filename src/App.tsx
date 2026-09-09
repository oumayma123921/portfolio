import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FuturisticBackground from "./components/FuturisticBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <FuturisticBackground />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;