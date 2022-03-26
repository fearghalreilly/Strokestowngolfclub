import React from 'react'

import icon3 from '../../img/icon3.jpg'
import icon4 from '../../img/icon4.jpg'
import icon5 from '../../img/icon5.jpg'
import icon6 from '../../img/icon6.jpg'
import icon7 from '../../img/icon7.jpg'

//Styles
import styled from 'styled-components'

import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,
} from "../../animation";

import { useScroll } from "./useScroll";


import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';




const About = () => {

  


  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();


    
    return (
      <PriceContainer>
      <Title ref={element} variants={scrollRevealt} animate={controls} initial="hidden">About Us</Title>
     <Line/>
       
    <AboutContainer ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden" style={{marginBottom: "40px"}}>
      
       <AboutSectionInfo1 >
           <h3>About</h3>
           
           <p>Strokestown Golf club was formed in 1995 and affiliated to the GUI in the same year. In 2001 the club moved to its present location, which is one of the most scenic parkland club's in the West of Ireland.</p>

       </AboutSectionInfo1>
       <AboutSectionIcon1  >
      

       </AboutSectionIcon1>

       </AboutContainer>
       <AboutContainer ref={element3} variants={scrollRevealt} animate={controls3} initial="hidden">
       
       <AboutSectionIcon2 >
       <MapContainer
            style={{ height: '100%', width: '100%', zIndex: '10' }}
            center={[53.767827499999996, -8.075495852955923]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
            />

            <Marker
              position={[53.767827499999996, -8.075495852955923]}
            >
          
            </Marker>
          </MapContainer>
      

        </AboutSectionIcon2>
       <AboutSectionInfo2 >
       <h3>Location</h3>
       
        <p>The Golf Club is situated about 2km east of Strokestown and about 20km west of Longford, in the townland of Bumlin, along the N5 Dublin- Westport primary route. Our full address is Strokestown Golf Club, Bumlin, Strokestown, Co. Roscommon, F42 YK12</p>
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
  
   background: url(${icon5}) no-repeat center center/cover;

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
 
background: url(${icon5}) no-repeat center center/cover;

@media screen and (max-width: 765px) {
      
        height: 250px;
    
   

  }

`






export default About;


  