import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Forgetpassword from "./components/Auth/Forgetpassword";
function App() {
  return <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Routes>
      <Footer />
    </Router>

  
}

export default App;
