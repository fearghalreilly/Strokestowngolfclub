import React, { useState, useEffect, useRef, useCallback } from 'react'
import Carousel from 'react-elastic-carousel';
import showcase from '../../img/showcase.jpg'
import showcase2 from '../../img/showcase2.jpg'
//Styles
import styled from 'styled-components'

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  } from "@fortawesome/free-solid-svg-icons";

 
import SwiperCore, { Navigation,   A11y,  Keyboard } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css'

  
  
  
 

//Link
import {Link} from "react-router-dom";


import icon from  './icon.png'

import PricesState from '../../data/PricesState'

import Memership from '../../Files/ApplicForm2022.pdf'

import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,
} from "../../animation";

import { useScroll } from "./useScroll";


SwiperCore.use([Navigation, A11y,  Keyboard ])





const Prices = () => {

  
     const [details, setDetails] = useState(PricesState);

     const [element, controls] = useScroll();
   

     

     
    return (

        <PriceContainer>
            <Title ref={element} variants={scrollRevealt} animate={controls} initial="hidden">Membership</Title>
           <Line/>
        <CarouselContainer ref={element} variants={scrollRevealt} animate={controls} initial="hidden">
        <Swiper
       navigation={true}
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        keyboard={true}
       
       
       
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 0,
           
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
            
          },
          930: {
            slidesPerView: 3,
            spaceBetween: 60,
            
          },
        }}
        modules={[ Navigation]}>
     

  
               {details.map((detail) => (
              
              <SwiperSlide>
                    <Content  >
                        <img src={icon} alt="Memembership Pricing Strokestown"/>
                         <h3>
                              {detail.name}
                         </h3>
  
                         <h4 style={{color: "#71A574", fontWeight: "400"}}>
                              {detail.price}
                         </h4>
                         <p>per year</p>
                       
                         <button><Link to={detail.membership} target="_blank" download>Application Form</Link></button>

                    </Content>
                    </SwiperSlide>
               ) )}

              



              



</Swiper>
           
        </CarouselContainer>



</PriceContainer>
        

    )

}



const PriceContainer = styled.div`

display: flex;
flex-direction: column;
padding: 60px 0px 60px;

width: 90%;
max-width: 1100px;
margin: auto;

@media screen and (max-width: 1042px) {
  padding-bottom: 0px;

   
}
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
      text-align: center;
  }
  
  `



const CarouselContainer = styled(motion.div)`


  margin: auto;
  width: 100%;
  margin-bottom: 40px;
 
  

`

const Content = styled.div `
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: white;
  padding-top: 30px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  padding: 24px;
  
  
  border-style: solid;
    border-width: 5px;
    border-color: rgb(113,165,116);
    text-align: center;
    


  @media screen and (max-width: 1000px) {
    
   
}

@media screen and (max-width: 925px) {
width: 240px;
margin: auto;

}

@media screen and (max-width: 413px) {

  width: 120px;


}

  h3{

    
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 400;
    

    @media screen and (max-width: 765px) {
      font-size: 18px;
}


   
  }

  h4{
    font-size: 35px;
    margin: 0px;
    font-weight: bold;

    @media screen and (max-width: 765px) {
      font-size: 25px;
  
}




}
  }

  p {
    font-size: 14px;
    margin: 0px;
margin-bottom: 32px;

@media screen and (max-width: 765px) {
    
}
  }

  img {
    padding-top: 0px;
    width: 80px;
    margin-bottom: 32px;
    margin-top: 15px;
  }

  button {
    border-radius: 4px;
    background: rgb(113, 165, 116);
    white-space: nowrap;
    padding: 10px 20px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 40px;

    @media screen and (max-width: 765px) {
      font-size: 14px;
    
}


  }

  a {
    color: white;
  }
`

const Line = styled.div`
height: 2px;

width: 10%;
margin: auto;
margin-bottom: 40px;


@media screen and (max-width: 765px) {

    width: 30%;
}



`



export default Prices;