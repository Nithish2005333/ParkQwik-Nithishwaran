import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Parking from "./pages/Parking";
import Fastag from "./pages/Fastag";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Services from "./pages/Services";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Example Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/parking" element={<Parking/>} />
        <Route path="/fastag" element={<Fastag />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
