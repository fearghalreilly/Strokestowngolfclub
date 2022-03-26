import React from 'react'

//Styles
import styled from 'styled-components'

import {Link} from "react-router-dom";

//Images
import icon1 from '../../img/1553513772.svg'

//Documents
import Memership from '../../Files/juniorMemership.pdf'
import SafeguardingP from '../../Files/safeguardingp.pdf'
import SafeguardingS from '../../Files/safeguardings.pdf'
import BullyingP from '../../Files/bullyingp.pdf'
import JuniorClubD from '../../Files/juniorclubd.pdf'
import { faHeading } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,

} from "../../animation";

import { useScroll } from "./useScroll";





const Contact = () => {

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

    
    return (
    <>
      <Heading ref={element} variants={scrollRevealt} animate={controls} initial="hidden">
        <h3>Contact Us</h3>
        <Line />

</Heading>

        
    <AboutContainer>
      
       <div>
       <p>Committee Chairperson</p>
          <h3>Tony Patton </h3>
          <h3>0834648156</h3>
          <h3>pattongolf@gmail.com</h3>
       </div>
       <div>
       <p>Honary Treasurer</p>
          <h3>Tony Patton </h3>
          <h3>0834648156</h3>
          <h3>pattongolf@gmail.com</h3>
       </div>
       <div>
       <p>Club President</p>
          <h3>Margaret Mc Hugh</h3>
          <h3>087 699 5895</h3>
       </div>
       <div>
       <p>Club Secretary</p>
          <h3>Jimmy Flanagan </h3>
          <h3>086 854 4256</h3>
          <h3>jayflan@eircom.net</h3>
       </div>
       <div>
       <p>Honorary Ladies Secretary</p>
          <h3>Margaret Walsh </h3>
          <h3>087 298 4994</h3>
          <h3>margowalsh5@gmail.com</h3>
       </div>
       <div>
       <p>Handicap Secretary</p>
          <h3>Paul Taylor  </h3>
          <h3>087 132 7599</h3>
          <h3>kilglasstaylor@yahoo.ie</h3>
       </div>
       <div>
       <p>Competition Secretary</p>
          <h3>Peter Hanley  </h3>
          <h3>086 832 0359</h3>
          <h3>peterhanley00@gmail.com</h3>
       </div>
       <div>
       <p>Club Register</p>
          <h3>Martin Crinigan   </h3>
          <h3>087 9125996</h3>
          <h3> mcrinigan@gmail.com</h3>
       </div>
       <div>
       <p>Junior Convenor</p>
          <h3>Martin Crinigan   </h3>
          <h3>087 9125996</h3>
          <h3> mcrinigan@gmail.com</h3>
       </div>
       
       

      
      
    </AboutContainer>

    </>
  
    )

}

const Heading = styled(motion.div)`

h3 {

  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
  padding-top: 50px;
  margin: 0px;
  
  @media screen and (max-width: 765px) {
      font-size: 28px;
      margin-top: 10px;
  }
  
  `


const AboutContainer = styled.div`
     display: grid;
    grid-template-columns: repeat(4, 1fr);
   
      grid-gap: 20px;
      
      height: 100%;
      width: 90%;
      max-width: 1100px;
      margin: auto;
      margin-bottom: 40px;


      }

      p {
          font-size: 20px;
         font-weight: 200;
         margin-top: 35px;

         @media screen and (max-width: 765px) {

            font-size: 18px;
}
       

      }

      @media screen and (max-width: 765px) {
        grid-template-columns: repeat(1, 1fr);
      
       
    
   

  }

`

const Line = styled.div`
height: 2px;
background: white;
width: 10%;
margin: auto;
margin-bottom: 10px;


@media screen and (max-width: 765px) {

    width: 30%;
}



`



const AboutSectionInfo1 = styled(motion.div)`

button {
  width: 260px;
  border-radius: 4px;
  background: rgb(113, 165, 116);
  white-space: nowrap;
  padding: 10px 20px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 5px;
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


}

a {
  color: white;
}
 

`

const AboutSectionIcon1 = styled(motion.div)`
  
   background: url(${icon1});
   background-size: contain;
background-repeat: no-repeat;
 

   @media screen and (max-width: 765px) {
       
    

  }
 

`

const AboutSectionInfo2 = styled.div`


`

const AboutSectionIcon2 = styled.div`
 
background: url(${icon1}) no-repeat center center/cover;
width: 100%;
height: 100%;

@media screen and (max-width: 765px) {
      
    width: 100%;
    height: 100%;
    
   

  }

`






export default Contact;


  