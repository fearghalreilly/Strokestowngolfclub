import React from 'react'

//Styles
import styled from 'styled-components'


import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,

} from "../../animation";

import { useScroll } from "./useScroll";





const Contact = () => {

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  

    
    return (
      <PriceContainer>
      <Title ref={element} variants={scrollRevealt} animate={controls} initial="hidden">Contacts</Title>
     <Line/>
       
    
      
       <AboutSectionInfo1 ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden"   >
       <div >
       <p>Committee Chairperson</p>
          <h3>Tony Patton </h3>
          <h3>0834648156</h3>
          <h3>pattongolf@gmail.com</h3>
       </div>
       <div >
       <p>Honary Treasurer</p>
          <h3>Tony Patton </h3>
          <h3>0834648156</h3>
          <h3>pattongolf@gmail.com</h3>
       </div>
       <div >
       <p>Club President</p>
          <h3>Margaret Mc Hugh</h3>
          <h3>0876995895</h3>
       </div>
       <div >
       <p>Club Secretary</p>
          <h3>Jimmy Flanagan </h3>
          <h3>0868544256</h3>
          <h3>jayflan@eircom.net</h3>
       </div>
       <div >
       <p>Honorary Ladies Secretary</p>
          <h3>Margaret Walsh </h3>
          <h3>0872984994</h3>
          <h3>margowalsh5@gmail.com</h3>
       </div>
       <div >
       <p>Handicap Secretary</p>
          <h3>Paul Taylor  </h3>
          <h3>0871327599</h3>
          <h3>kilglasstaylor@yahoo.ie</h3>
       </div>
       <div >
       <p>Competition Secretary</p>
          <h3>Peter Hanley  </h3>
          <h3>0868320359</h3>
          <h3>peterhanley00@gmail.com</h3>
       </div>
       <div >
       <p>Club Register</p>
          <h3>Martin Crinigan   </h3>
          <h3>0879125996</h3>
          <h3>mcrinigan@gmail.com</h3>
       </div>
       <div >
       <p>Junior Convenor</p>
          <h3>Martin Crinigan   </h3>
          <h3>0879125996</h3>
          <h3>mcrinigan@gmail.com</h3>
       </div>
       </AboutSectionInfo1>
   

       
       
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


const AboutSectionInfo1 = styled(motion.div)`
display: grid;
grid-template-columns: repeat(4, 1fr);

  grid-gap: 20px;
  
  height: 100%;
  width: 90%;
  max-width: 1100px;
  margin: auto;
  

  @media screen and (max-width: 1024px) {
     grid-template-columns: repeat(3, 1fr);
 }

 @media screen and (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}



  }

  p {
   font-size: 20px;
  font-weight: 200;
  margin-top: 10px;

  font-weight: bold;
  color: #71A574;
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 10px;

  @media screen and (max-width: 765px) {

     font-size: 28px;
}


}

h3 {
  font-size: 20px;
  font-weight: 200;
  margin-top: 3px;
  margin-bottom: 3px;

  
  @media screen and (max-width: 765px) {

     font-size: 18px;
}
}

@media screen and (max-width: 500px) {
 grid-template-columns: repeat(1, 1fr);





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


export default Contact;
  