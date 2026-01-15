import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skils from "./components/Skils";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
         <Route path="/about" element={<About />} />
         <Route path="/skils" element={<Skils />} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}
