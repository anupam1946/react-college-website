

// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Departments from './components/Departments';
import Faculty from './components/Faculty/Faculty.js';
import FacultyDetail from './components/Faculty/FacultyDetail.js';
import Admissions from './components/Admissions/Admissions.js';
import Contact from './components/Contact/Contact.js';
import Gallery from './components/Gallery/Gallery.js';
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import OurCourses from './components/OurCourses/OurCourses.js';
import LoginSignup from './components/LogInSignUp/LoginSignup.js'
import { CharacterCursor } from './components/Charater/CharaterCursor.js';



const App = () => {
  return (
    <Router>
      <Header/>
      <CharacterCursor characters={["A", "n", "u", "p","A","M"]} />
      <main>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/courses" element={<OurCourses/>} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/:name" element={<FacultyDetail/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/admissions" element={<Admissions />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="/loginsignup" element={<LoginSignup/>}/>
          
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;




