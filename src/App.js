import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Request from "./components/Request/Request";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import About from "./components/About/About";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Forgetpassword from "./components/Auth/Forgetpassword";
import Resetpassword from "./components/Auth/Resetpassword";
function App() {
  return <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/resetpassword/:token" element={<Resetpassword />} />
      </Routes>
      <Footer />
    </Router>

  
}

export default App;
