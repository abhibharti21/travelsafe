import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.scss";
import "./MediaQuery.scss";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Wishlist from "./Components/Wishlist";
import Booking from "./Components/Booking";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/wishList" element={<Wishlist />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </>
  );
};

export default App;
