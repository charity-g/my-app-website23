import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Projects from './Components/pages/Projects';
import About from './Components/pages/About';

function App() {
  return (
    <>
    <HashRouter basename="/my-app-website23 >
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Projects' element={<Projects/>}/>
       <Route path='/About' element={<About/>}/>
     </Routes>
    </HashRouter>
    </>
  );
}

export default App;
