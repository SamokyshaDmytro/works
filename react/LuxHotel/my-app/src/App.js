import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from '../src/pages/Home/Home';
import Facilities from '../src/pages/Facilities/Facilities';
import Rooms from '../src/pages/Rooms/Rooms.js';
import ContactUs from '../src/pages/ContactUs/ContactUs.js';
import Header from './components/header/header';



function App() {
  return (
    <>
    <Router>    

    <Header/>

      <Routes>  {/* <AboutPage /> */}
          <Route path="/"  element={<Home />} />
          <Route path="/Facilities"  element={<Facilities />} />
          <Route path="/Rooms"  element={<Rooms />} />
          <Route path="/ContactUs"  element={<ContactUs />} />
      </Routes>
    </Router>
  </>
  
  )
}

export default App;
