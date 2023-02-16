import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
