import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GithubInfo from "./pages/GithubInfo";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div id="root">
        <NavbarComponent />
        <main>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/github" element={<GithubInfo />} />
            </Routes>
          </Container>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
