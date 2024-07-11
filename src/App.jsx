import "./App.css";
import Navigation from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Changed Router import to BrowserRouter
import Home from "./components/home/Home";
import NotFound from "./components/errors/NotFound";
import About from "./components/about/About";
import Service from "./components/services/Service";
import Footer from "./components/footer/Footer";
import Projects from "./components/project/Projects";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import ScrollToTopButton from "./components/scrollup/ScrollToTopButton";
function App() {
  return (
    <Router>
      <Navigation /> {/* Removed semicolon here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/* Catch-all route for 404 */}
      </Routes>
      <Footer />
      <ScrollToTopButton /> {/* Include ScrollToTopButton component */}
    </Router>
  );
}

export default App;
