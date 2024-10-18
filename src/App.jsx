import About from "./Components/about";
import Contact from "./components/contact";
import Footer from "./Components/footer";
import Home from "./components/home";
import Navbar from "./Components/navbar";
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
