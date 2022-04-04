import React from 'react'

//Styles
import styled from 'styled-components'

import {Link} from "react-router-dom";

//Images
import icon1 from '../../img/1553513772.svg'

//Documents
import Memership from '../../Files/JuniorMembership.pdf'
import SafeguardingS from '../../Files/SafegaurdingStatement.pdf'
import SafeguardingP from '../../Files/SafeguardingPolicy2021.pdf'
import BullyingP from '../../Files/JuniorBullyingPolicy.pdf'
import JuniorClubD from '../../Files/JuniorDisiplinaryPolicy.pdf'
import JuniorsCodesOfConduct from '../../Files/JuniorsCodesOfConduct.pdf'
import SafeguardingRiskAssessment from '../../Files/SafeguardingRiskAssessment.pdf'
import { faHeading } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,

} from "../../animation";

import { useScroll } from "./useScroll";





const Junior = () => {

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

    
    return (
    <>
      <Heading ref={element} variants={scrollRevealt} animate={controls} initial="hidden">
        <h3>Junior Golf</h3>
        <Line />

</Heading>

        
    <AboutContainer>
      
       <AboutSectionInfo1 ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden">
         
           <p>Membership for under 12’s cost just €25.</p>
           <p>Over 12 but under 18 on 1st Jan 20XX then membership is €55.</p>
           <p>Your membership includes: Unlimited access to the course*, you can play all day every day and access to junior club and inter-club golf competitions </p>
           <p>*Members under 12 years of age must be accompanied by an adult.</p>
           <p>In order to comply with the 2018 Child Safeguarding regulations and requirements, and, to promote Junior golf within our club, the Junior Committee have adopted a Safeguarding Policy which you can access here. A hardcopy will be available in the clubhouse, and this policy will be reviewed and updated annually as required.</p>
           <button><Link to={Memership} target="_blank" download>Junior Member Application Form</Link></button>
           <button><Link to={SafeguardingP} target="_blank" download>Safeguarding Policy</Link></button>
           <button><Link to={SafeguardingS} target="_blank" download>Safeguarding Statement</Link></button>
           <button><Link to={BullyingP} target="_blank" download>Bullying Policy</Link></button>
           <button><Link to={JuniorClubD} target="_blank" download>Junior Club Displinary Policy</Link></button>
           <button><Link to={JuniorsCodesOfConduct} target="_blank" download>Juniors Codes of Conduct</Link></button>
           <button><Link to={SafeguardingRiskAssessment} target="_blank" download>Safeguarding Risk Assessment </Link></button>
        
       </AboutSectionInfo1>
       <AboutSectionIcon1 ref={element3} variants={scrollRevealt} animate={controls3} initial="hidden">
      

       </AboutSectionIcon1>
       
       

      
      
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
    grid-template-columns: repeat(2, 1fr);
   
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






export default Junior;


  