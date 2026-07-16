import { HashRouter as Router, Routes, Route } from "react-router-dom";
import IconGithub  from './assets/icon/github.svg?react';
import IconLinkedIn from './assets/icon/linkedin.svg?react';
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import './styles/main.scss';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}