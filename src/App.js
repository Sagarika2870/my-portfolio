import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Routes>
          <Route path='/' exact component={Home}/>
      </Routes>
      <Skills />
      <Contact />
      {/* {this.props.children} */}
    </main>
  );
}

