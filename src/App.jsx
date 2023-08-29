import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
// import Footer from "./components/Footer";
// import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-turq bg-dark body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer />  */}
    </main>
  );
}
