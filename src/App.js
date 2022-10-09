import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Gellary from "./Components/Gallary";
import Land from "./Components/Land sell";
import All from "./Components/All";
import Carrier from "./Components/Carrier";
import Property1 from "./Components/prp1";
import Property2 from './Components/Prp2';
import Property3 from './Components/prp3';
import Property4 from './Components/prp4';
import Property5 from './Components/prp5';
import Property6 from './Components/prp6';

import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Gallary" element={<Gellary />} />
          <Route path="All" element={<All />} />
          <Route path="Sell" element={<Land />} />
          <Route path="Carrier" element={<Carrier />} />
          <Route path="all/property-1" element={<Property1/>} />
          <Route path="all/property-2" element={<Property2/>} />
          <Route path="all/property-3" element={<Property3/>} />
          <Route path="all/property-4" element={<Property4/>} />
          <Route path="all/property-5" element={<Property5/>} />
          <Route path="all/property-6" element={<Property6/>} />
        </Routes>
       
        <Footer/>
      </div>
    </>
  );
}
