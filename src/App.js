import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Projects from "./components/projects/Projects.jsx";
import Testimonial from "./components/testimonials/Testimonial.jsx";
// import Contact from "./components/contact/Contact.jsx";
import Experience from "./components/experience/Experience.jsx";
// import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Navbar />
      <Experience />
      <Projects />
      <Testimonial />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
