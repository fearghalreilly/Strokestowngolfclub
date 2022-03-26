import React from 'react'



//Page Components
import Showcase from '../components/Nav/showcase'
import About from '../components/Nav/about'
import Prices from '../components/Nav/prices'
import Results from '../components/Nav/results'
import Course from '../components/Nav/course'
import Notes from '../components/Nav/notes'



const HomePage = () => {
    return (
<>
            <Showcase/>
            <About />
            <Course />
            <Prices />
            <Notes />
       </>
    )
}



export default HomePage;


