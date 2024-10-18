import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/Projects/projects";
import Skill from "./components/skill";

function App() {
  return (
    <div className="bg-[#2a0034] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
