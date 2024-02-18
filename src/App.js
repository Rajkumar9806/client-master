import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navBar';
import Home from './home';
import Contact from './contactUs';
import Hotels from './hotels';
import About from './aboutUs';
const App = () => {
  return (
 
      <div>
        
               <Navbar />
         
      
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/hotel" element={<Hotels />} />
          <Route path="/about-us" element={<About />} />
        </Routes>

        <Contact />
       
      </div>
     
  );
}

export default App;
