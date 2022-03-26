import React, { useState, useEffect } from "react";
import {  useLocation } from 'react-router-dom';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { uuid } from 'uuidv4';


import Modal from '../components/Nav/modal';

import {GalleryState} from '../data/GalleryState'


import Carousel from 'react-elastic-carousel';


//Animations

import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,

} from "../animation";

import { useScroll } from "../components/Nav/useScroll";




const Gallery = () => {

 
  const location = useLocation();
  const url = location.pathname;
  const [imgs, setImgs] = useState(GalleryState);
  
  const [img, setImg] = useState(null);
  


  const [toggle, setToggle] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    
  ];
  



  useEffect(() => {
    const currentImg = imgs.filter((stateImg) => stateImg.url === url);
    setImg(currentImg[0]);
    console.log(img);
  }, [imgs, url]);

  


 
  const [element, controls] = useScroll();



    return (
      <>
      {img && (


<GalleryContainer ref={element} variants={scrollRevealt} animate={controls} initial="hidden">

  
  <Carousel breakPoints={breakPoints}>
      {img.imgs.map(detail => (
        
        <Img src={detail.img} />
      
         
     
        
      ))}
  </Carousel>
   
    </GalleryContainer>

      )
      }

</>

    );
  };

  const GalleryContainer = styled(motion.div) `

  max-width: 1100px;
  margin: auto;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr;
 

  @media screen and (max-width: 1160px) {
    grid-template-columns: 1fr ;
    
    width: 90%;
 
   
}






`

const ImgContainer = styled.div`



`

const Img = styled.img`

object-fit: fill

cursor: pointer;
width: 100%;
height: 100%;

@media screen and (max-width: 1040px) {
  width: 100%;
height: 100%;
}


`


export default Gallery;