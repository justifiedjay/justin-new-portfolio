import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Porfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <About />
    <Porfolio />
    <Experience />
    <Contact /> 

    <SocialLinks />
   </div>
    
  );
}

export default App;
