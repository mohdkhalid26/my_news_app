import React from "react";
import "./App.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Business from "./pages/business/Business";
import Entertainment from "./pages/entertainment/Entertainment";
import Health from "./pages/health/Health";
import Science from "./pages/science/Science";
import Sport from "./pages/sport/Sport";
import Technology from "./pages/technology/Technology";
import Navbar from "./component/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import SignUp from "./pages/signup/SignUp";
import LogIn from "./pages/login/LogIn";

function App() {
  return (
    <div className="app">
      <div className="pages">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/Business" element={<Business />} />

            <Route exact path="/Entertainment" element={<Entertainment />} />

            <Route exact path="/Health" element={<Health />} />

            <Route exact path="/Science" element={<Science />} />

            <Route exact path="/Sports" element={<Sport />} />

            <Route exact path="/Technology" element={<Technology />} />
            <Route exact path="/about" element={<About />} />

            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<LogIn />} />

            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
