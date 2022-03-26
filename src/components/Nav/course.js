import React, { useState, useEffect, useRef, useCallback } from 'react'

import ReactPlayer from 'react-player'

import url from '../../videos/hole1.mp4'


import Carousel from 'react-elastic-carousel';

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  } from "@fortawesome/free-solid-svg-icons";


//Documents
import ScoreCard from '../../Files/scorecard.jpg'


//Styles
import styled from 'styled-components'

import CourseDetails from '../../data/CourseState'


import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,
} from "../../animation";

import { useScroll } from "./useScroll";

import SwiperCore, { Navigation, A11y,  Keyboard } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css'


SwiperCore.use([Navigation,  A11y,  Keyboard ])

const Course = () => {




    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        
      ];
      

      const [details, setDetails] = useState(CourseDetails);


      const [element, controls] = useScroll();
      const [element2, controls2] = useScroll();
      const [element3, controls3] = useScroll();
    


    
    return (
<>
<CourseSection>
        <PriceContainer >
            <Title ref={element} variants={scrollRevealt} animate={controls} initial="hidden" >Our Course</Title>
           <Line/>
           <Test ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden">
           <Swiper
       navigation={true}
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        
        keyboard={true}
       
        
        modules={[ Navigation]}>
               {details.map((detail) => (
             <SwiperSlide>    
        <CourseDetailsContainer >

        


        <CourseDescription >
           <p>{detail.hole}</p>
           <h3>{detail.par}</h3>
           <h2>{detail.info}</h2>
           
    
      

        </CourseDescription>
           <CoursePreview >
           <ReactPlayer
            className='react-player'
            url={detail.url}
            width='100%'
            height='100%'
            controls={true}
          />
      

       </CoursePreview>
       
   

        </CourseDetailsContainer>
        </SwiperSlide>  


  ) )}

 
   </Swiper>
   </Test>
   <CardSection >
   <Button ref={element3} variants={scrollRevealt} animate={controls3} initial="hidden">
   <FontAwesomeIcon icon={faDownload} color="#FFFFFF" size="2x" />
     <Link to={ScoreCard} target="_blank" download>Download Score Card</Link>
  </Button>
  </CardSection>
  

    </PriceContainer>

    </CourseSection>
    
 

    </>
       
        
  
    )

}

const CardSection = styled.div`

margin: auto;
padding-top: 40px;





}

a {
  color: white;
  font-size: 20px;
  padding-left: 10px;
}
 

`

const Button = styled(motion.button) `
  cursor:pointer;
  border-radius: 4px;
  background: red;
  white-space: nowrap;
  padding: 10px 20px;
  background-color: #71A574;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 60px;
  margin-right: 1%;
  margin-left: 0px;

  @media screen and (max-width: 765px) {
    font-size: 14px;
    width: 49%;
  
}

@media screen and (max-width: 560px) {
  font-size: 14px;
  width: 99%;

}

`

const CourseSection = styled(motion.div)`
background-color: #71A574;

@media screen and (max-width: 1160px) {
  background-color: white;

}


`

    const PriceContainer = styled(motion.div)`

display: flex;
flex-direction: column;
padding: 0px 0px 0px;
width: 100%;
max-width: 1100px;
margin: auto;
background-color: #71A574;
padding-top: 60px;


@media screen and (max-width: 1160px) {
    width: 90%;

  }

`

const Test = styled(motion.div)`



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

const Line = styled.div`
height: 2px;
background: #71A574;
width: 10%;
margin: auto;
margin-bottom: 40px;


@media screen and (max-width: 765px) {

    width: 30%;
}

`

const CourseDetailsContainer = styled(motion.div)`

display: grid;
    grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
     
      max-width: 1100px;
      margin: auto;
      padding-left: 40px;
      padding-right: 40px;
      
      

      
@media screen and (max-width: 765px) {
    grid-template-columns: repeat(1, 1fr);
    
    padding-left: 40px;
    padding-right: 40px;
   



}

`

const CoursePreview = styled(motion.div)`

`

const CourseDescription = styled(motion.div)`

p {
    font-weight: bold;
    color: white;
    font-size: 24px;
    letter-spacing: 2px;
    margin: 0px;
    margin-bottom: 10px;


    @media screen and (max-width: 765px) {
        grid-template-columns: repeat(1, 1fr);
        font-size: 28px;

        
       
    
    
    
    }

}

h3 {

    
letter-spacing: 2px;
margin: 0px;
text-align: left;
font-size: 28px;
color: #252525;
    font-weight: 300;
}

h2 {
  
    font-size: 20px;
    font-weight: 200;
    color: #252525;
    line-height: 1.5;
  
    margin: 0px;
    margin-top: 30px;

    @media screen and (max-width: 765px) {

        font-size: 18px;
}

}

`

export default Course;


  