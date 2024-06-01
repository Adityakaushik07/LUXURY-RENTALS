import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Villas from "./Components/Villas/Villas.jsx";
import SingleVilla from "./Components/Villas/SingleVilla.jsx";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/villa/:id" element={<SingleVilla />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
