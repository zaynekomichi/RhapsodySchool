import React, { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import logo from './logo.svg'
import TopNavBar from './components/Navbar'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Home from './Pages/Home';
import About from './Pages/About';
import Learning from './Pages/Learning';
import Calendar from './Pages/Calendar';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import TopNavbar from './components/Navbar';
import Gallery from './Pages/Gallery';
import Careers from './Pages/Careers';

function App() {
  return (
    <div>
          <BrowserRouter>
          <TopNavBar/>
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="about" element={<About/>} />
              <Route  path="learning" element={<Learning/>} />
              <Route  path="gallery" element={<Gallery/>} />
              <Route  path="calendar" element={<Calendar/>} />
              <Route  path="blog" element={<Blog/>} />
              <Route  path="contact" element={<Contact/>} />
              <Route  path="careers" element={<Careers/>} />
          </Routes>
          
          <Footer/>
        </BrowserRouter>
    </div>   
  )
}

export default App
