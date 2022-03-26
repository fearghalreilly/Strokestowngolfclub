import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
//Images
import {GalleryState} from '../data/GalleryState'

//Animations

import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,

} from "../animation";

import { useScroll } from "../components/Nav/useScroll";


const GalleryHome = () => {

  const [imgs, setImgs] = useState(GalleryState);

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
 

  return (
    <>
   

    
      <GalleryContainer>
      <Title ref={element} variants={scrollRevealt} animate={controls} initial="hidden">Our Gallery</Title>
     <Line/>
      <Gallerys ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden">

        {imgs.map(detail => (
          <Gallery >

          <h2>{detail.title}</h2>
          <Link to={detail.url}>
          <ImageContainter style={{backgroundImage: `url(${detail.mainImg})`  }}>
          
          </ImageContainter>
          </Link>

          </Gallery>


        ))}
       
      </Gallerys>
      </GalleryContainer>
    

    </>
  );
};



const GalleryContainer = styled(motion.div)`
display: flex;
flex-direction: column;
padding: 0px 0px 0px;
width: 100%;
max-width: 1100px;
margin: auto;
`

const Title = styled(motion.div) `

  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 50px;
  
  @media screen and (max-width: 765px) {
      font-size: 28px;
      margin-top: 10px;
  }
  
  
    
`

const Line = styled.div`
height: 2px;
background: white;
width: 10%;
margin: auto;
padding-bottom:20px;


@media screen and (max-width: 765px) {

    width: 30%;
}

`

const Gallerys = styled(motion.div)`

display: grid;
    grid-template-columns: repeat(2, 1fr);
      
    grid-column-gap: 40px;
    grid-row-gap: 30px;
      width: 100%;
      max-width: 1100px;
      margin: auto;
      
      
      @media screen and (max-width: 1160px) {
        width: 90%;
        grid-row-gap: 10px;

      }

      @media screen and (max-width: 765px) {
        grid-template-columns: repeat(1, 1fr);
        
       
  }



`

const ImageContainter = styled(motion.div)`


background-size: cover;
width: 100%;
height: 350px;



`

const Gallery = styled(motion.div)`


  


  h2 {
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

  
  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  

  
  }
`;


export default GalleryHome;