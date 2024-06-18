import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./componant/Navbar"
import Home from "./componant/Home"
import Service from './componant/Service';
import Notepad from './componant/Notepad';
import Signup from './componant/Signup';
import Contact from "./componant/Contact";
import Login from "./componant/Login";
import Error from "./componant/Error";
import Logout from "./componant/Logout";
import Fotter from './componant/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/service" element={<Service />} />
    <Route path="/notepad" element={<Notepad />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="*" element={<Error />} />
    </Routes>
    <Fotter/>
    </BrowserRouter>
    </>
  )
}

export default App