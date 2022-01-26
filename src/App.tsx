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
import Covid from './Pages/Covid';
import TopNavbar from './components/Navbar';

function App() {
  return (
    <div>
       <TopNavBar/>
          <BrowserRouter>
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="about" element={<About/>} />
              <Route  path="learning" element={<Learning/>} />
              <Route  path="calendar" element={<Calendar/>} />
              <Route  path="blog" element={<Blog/>} />
              <Route  path="covid" element={<Covid/>} />
              <Route  path="contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
    </div>   
  )
}

export default App
