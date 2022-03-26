import React from 'react'

import note1 from '../../img/note1.jpg'
import note2 from '../../img/note2.jpg'


//Styles
import styled from 'styled-components'

import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,
} from "../../animation";

import { useScroll } from "./useScroll";


import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';




const Notes = () => {

  


  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();


    
    return (
      <PriceContainer>
      <Title ref={element} variants={scrollRevealt} animate={controls} initial="hidden">Club Notes</Title>
     <Line/>
       
    <AboutContainer ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden" style={{marginBottom: "40px"}}>
      
       <AboutSectionInfo1 >
           <h3>Captains Drive In - March 2022</h3>
           
           <p>Club captain and president would like to thank the members that attended on the day and wish all the members an enjoyable golfing 2022</p>

       </AboutSectionInfo1>
       <AboutSectionIcon1  >
      

       </AboutSectionIcon1>

       </AboutContainer>
       <AboutContainer ref={element3} variants={scrollRevealt} animate={controls3} initial="hidden">
       
       <AboutSectionIcon2 >
      

        </AboutSectionIcon2>
       <AboutSectionInfo2 >
       <p>Club Captain Kevin Mc Loughlin & Club president Margaret Mc Hugh</p>
       
      
       </AboutSectionInfo2>

      
      
    </AboutContainer>
    </PriceContainer>
  
    )

}

const PriceContainer = styled.div`

display: flex;
flex-direction: column;
padding: 0px 0px 0px;
width: 100%;
max-width: 1100px;
margin: auto;
padding-top: 60px;
padding-bottom: 60px;








`

const Title = styled(motion.h3)`


  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 0px;
  
  @media screen and (max-width: 765px) {
      font-size: 28px;
      margin-top: 10px;
  }
  
  `





const AboutContainer = styled(motion.div)`
     display: grid;
    grid-template-columns: repeat(2, 1fr);
      height: 350px;
      grid-gap: 40px;
     
      

      width: 100%;
      max-width: 1100px;
      margin: auto;
      
      
      @media screen and (max-width: 1160px) {
        width: 90%;
    
      }
      

      h3 {

        font-weight: bold;
        color: #71A574;
        font-size: 24px;
        letter-spacing: 2px;
        margin: 0px;
        margin-bottom: 10px;
        text-align: left;

        @media screen and (max-width: 765px) {
            font-size: 28px;
            margin-top: 10px;
}



        
        

      }

      p {
          font-size: 20px;
         font-weight: 200;
         margin-top: 25px;
         line-height: 1.5;

         @media screen and (max-width: 765px) {

            font-size: 18px;
}
       

      }

      @media screen and (max-width: 765px) {
        grid-template-columns: repeat(1, 1fr);
        height: 100%;
       
    
   

  }

`




const AboutSectionInfo1 = styled(motion.div)`
 

`

const AboutSectionIcon1 = styled(motion.div)`
  
   background: url(${note1}) no-repeat center center/cover;

   @media screen and (max-width: 765px) {
       
        height: 250px;
    

  }
 

`

const Line = styled.div`
height: 2px;
background: white;
width: 10%;
margin: auto;
margin-bottom: 40px;


@media screen and (max-width: 765px) {

    width: 30%;
}

`

const AboutSectionInfo2 = styled(motion.div)`


`

const AboutSectionIcon2 = styled(motion.div)`
 
background: url(${note2});
background-repeat: no-repeat;
  background-size: cover;

@media screen and (max-width: 765px) {
      
        height: 250px;
    
   

  }

`






export default Notes;


  