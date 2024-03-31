import { HashRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Projects from './Components/pages/Projects';
import Surprise from './Components/pages/Surprise';
import About from './Components/pages/About';
// <Route path='/my-app-website23/About' element={<About/>}/>
//<Route path='/About' element={<About/>}/>
import Footer from './Components/Footer.js'

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Projects' element={<Projects/>}/>
       <Route path='/Surprise' element={<Surprise/>}/>
       <Route path='/my-app-website23' element={<Home/>}/>
       <Route path='/my-app-website23/Projects' element={<Projects/>}/>
       <Route path='/my-app-website23/Surprise' element={<Surprise/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
