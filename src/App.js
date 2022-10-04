import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Gallary from "./Components/Gallary";
import Land from "./Components/Land sell";
import All from "./Components/All";
import Carrier from "./Components/Carrier";
import Property1 from "./Components/prp1";


export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Gallary" element={<Gallary />} />
          <Route path="All" element={<All />} />
          <Route path="Sell" element={<Land />} />
          <Route path="Carrier" element={<Carrier />} />
          <Route path="Property-1" element={<Property1/>} />
          <Route path="Property-2" element={<Property1/>} />
          <Route path="Property-3" element={<Property1/>} />
          <Route path="Property-4" element={<Property1/>} />
          
        </Routes>
       
        <Footer/>
      </div>
    </>
  );
}
