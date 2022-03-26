
import React, {useState} from 'react'
import './App.css';


import { BrowserRouter , Router, Routes, Route, Link, Switch } from "react-router-dom";



import Nav from './components/Nav/nav'
import Footer from './components/Nav/footer'
import HomePage from './pages.js/Home';
import Junior from './pages.js/Junior';
import Senior from './pages.js/Senior';
import Prices from './pages.js/Membership';
import About from './pages.js/About';
import Course from './pages.js/Course';
import ClubNotes from './pages.js/ClubNotes';
import ContactUs from './pages.js/ContactUs';
import GalleryHome from './pages.js/GalleryHome';
import Gallery from './pages.js/Gallery';
import Brand from './components/Nav/brand';
import ScrollTop from './components/Nav/scrollTop';
import Modal from './components/Nav/modal';




const App = () => {

  const [toggle, setToggle] = useState(false);



 

  const RefreshTop = () => {
     window.scrollTo(0, 0)
 }
 
 window.addEventListener('beforeunload', RefreshTop)

  return (

    <>
    
    
    
    
    <div className="App">
    <BrowserRouter>
    <ScrollTop />
    
      <Nav setToggle={setToggle} toggle={toggle} />
    <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/home' element={<HomePage/>} />
      <Route exact path='/course' element={<Course/>} />
      <Route exact path='/clubnotes' element={<ClubNotes/>} />
      <Route exact path='/juniors' element={<Junior/>} />
      <Route exact path='/seniors' element={<Senior/>} />
      <Route exact path='/membership' element={<Prices/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/gallery' element={<GalleryHome/>} />
      <Route exact path='/contactus' element={<ContactUs/>} />
      <Route path='/gallery/:id' element={<Gallery/>} />
      </Routes>
      <Modal setToggle={setToggle} toggle={toggle}/>
      <Footer />
      <Brand />

      
    
    
    </BrowserRouter >
    </div>

    </>
  );
}

export default App;
