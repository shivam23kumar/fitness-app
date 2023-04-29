import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Request from "./components/Request/Request";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import NotFound from "./components/Layout/NotFound/NotFound";
import About from "./components/About/About";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Forgetpassword from "./components/Auth/Forgetpassword";
import Resetpassword from "./components/Auth/Resetpassword";
import Subscribe from "./components/Payments/Subscribe";
import PaymentSuccess from "./components/Payments/PaymentSuccess";
import PaymentFail from "./components/Payments/PaymentFail";

function App() {
  return (
  <Router>
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
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )

  
}

export default App;
