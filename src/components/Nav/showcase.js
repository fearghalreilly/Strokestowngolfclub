import React from 'react'

import showcase from '../../img/showcase.jpg'
import showcase2 from '../../img/showcase2.jpg'

//Styles
import styled from 'styled-components'

import video1 from '../../videos/showcasevideo1.mp4'

//Link
import {Link} from "react-router-dom";


import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,

} from "../../animation";

import { useScroll } from "./useScroll";



const Showcase = () => {


  const [element, controls] = useScroll();


      


    
    return (
       
    <ShowcaseContainter 
    
    
    
    >
      <video src={video1} autoPlay loop muted />
      <Test ref={element} variants={scrollRevealt} animate={controls} initial="hidden">
        <h2>Welcome to</h2>
        <h2>Strokestown Golf Club</h2>
        <a href="https://visitors.brsgolf.com/strokestown#/course/1" target="_blank" >Book Now</a>
        <NavLink to="/course">Our Course</NavLink>
        </Test>

      
    
   
    </ShowcaseContainter>
  
    )

}

const Test = styled(motion.div)``

const NavLink = styled(Link)`

margin-top: 20px;
    cursor: pointer;
  display: inline-block;
  border: 0;
  font-weight: bold;
  padding: 10px 25px;
  background: #71A574;
  color: #fff;
  font-size: 20px;
  border-radius: 30px;
  font-weight: 400;
  margin-left: 10px;
  

  @media screen and (max-width: 765px) {
    font-size: 18px;
    padding: 10px 25px;
   

  }


  @media screen and (max-width: 375px) {
    font-size: 16px;
    padding: 8px 20px;
   


  }


`

const ShowcaseContainter = styled(motion.div)`





    width: 100%;
    height: 800px;
    display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  
 
  

  top: 0;

  video {
   
    object-fit: cover;
    z-index: -2;
   
  
    height: 800px;
    width: 100%;
    top: 0;
    top: 0;


    @media screen and (max-width: 1040px) {
      width: 89%;

    }
   
  }

  div {
    position: absolute;
  }
  

  h2 {
    
    font-size: 70px;
    color: white;
    margin: 0px;
    font-weight: 300;

    @media screen and (max-width: 765px) {
        font-size: 35px;
    
   

  }

  @media screen and (max-width: 375px) {
        font-size: 30px;
    
   

  }

 
   
  }

  a {
    
    margin-top: 20px;
    cursor: pointer;
  display: inline-block;
  border: 0;
  font-weight: bold;
  padding: 10px 25px;
  background: #71A574;
  color: #fff;
  font-size: 20px;
  border-radius: 15px;
  font-weight: 400;
  margin-right: 10px;
  

  @media screen and (max-width: 765px) {
    font-size: 18px;
    padding: 10px 25px;
   

  }


  @media screen and (max-width: 375px) {
    font-size: 16px;
    padding: 8px 20px;
   


  }

  }
    


`




export default Showcase;