import React, {useEffect, useCallback} from 'react'
import styled from "styled-components";

//Componenents


//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  } from "@fortawesome/free-solid-svg-icons";

 //Animations
 import { motion } from "framer-motion/dist/framer-motion";
  import {
    contactAnim,
  } from "../../animation";

  import { useScroll } from "./useScroll";

  


 

const Modal = ({toggle, setToggle}) => {

  const [element, controls] = useScroll();

 

  const keyPress = useCallback(
    (e) => {
        if (e.key ==='Escape' && !toggle) {
          setToggle(true)
        }
    },
    [setToggle, toggle],
);

useEffect(
  () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
  },
  [keyPress]
);

    return(
    <>
    <Backdrop toggle={!toggle}>
    <Test ref={element} variants={contactAnim} animate={controls} initial="hidden" >
    <Form>
    <Info>
    <FontAwesomeIcon onClick={() => setToggle(!toggle)} icon={faTimes} color='#757c98' size='2x'/>
    </Info>
    <div  setToggle={ setToggle}>
      <div>
        <h2>Contact Us</h2>
    </div>
      <PhoneSection>
      
        
          <p>Mens Captain</p>
          <h3>Kevin McLoughlin</h3>
         
         
        
        </PhoneSection>
      <EmailSection>
     
        
      <p>Committee Chairperson / Honary Treasurer</p>
          <h3>Tony Patton </h3>
          <h3>0834648156</h3>
          <h3>pattongolf@gmail.com</h3>

      <p>Club President</p>
          <h3>Margaret Mc Hugh</h3>
          <h3>087 699 5895</h3>
      
        


          <p>Club Secretary</p>
          <h3>Jimmy Flanagan </h3>
          <h3>086 854 4256</h3>
          <h3>jayflan@eircom.net</h3>

          <p>Honorary Ladies Secretary</p>
          <h3>Margaret Walsh </h3>
          <h3>087 298 4994</h3>
          <h3>margowalsh5@gmail.com</h3>

          <p>Handicap Secretary</p>
          <h3>Paul Taylor  </h3>
          <h3>087 132 7599</h3>
          <h3>kilglasstaylor@yahoo.ie</h3>

          <p>Competition secretary</p>
          <h3>Peter Hanley  </h3>
          <h3>086 832 0359</h3>
          <h3>peterhanley00@gmail.com</h3>

          <p>Club Register / Junior Convenor</p>
          <h3>Martin Crinigan   </h3>
          <h3>087 9125996</h3>
          <h3> mcrinigan@gmail.com</h3>







     
      </EmailSection>

                    
                   
                    
                  

      </div>
   
    
    </Form>
    </Test>
    </Backdrop>
    </>
    )
}

const Backdrop = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  
  ${props => props.toggle && `
  display: none;
  `}
  z-index: 999;

`
const Test = styled(motion.div)`


  display:flex;
  align-items: center;
  justify-content: center;
  height: 100%;

 
`

const Form = styled.div`


  width: 700px;
  
  position: relative;
  background-color: white;
  border-radius: 5%;
  z-index: 999;
  padding-top:40px;
  padding-bottom:40px;


  h2 {
    font-size: 30px;
  font-weight: 400;
  margin-top: 0px;
  text-align: center;
  }



  h3 {
    color: #262626;
    font-size: 20px;
    font-weight: 200;
    padding: 0px;
    margin: 0px;
    padding-bottom: 0px;
   
    text-decoration: none;

    @media screen and (max-width: 765px) {

      font-size: 18px;
      
  
  }


 

  

  
  

`

const Info = styled.div`

   position: absolute;
   top: 0;
   right: 0;
   cursor: pointer;
   padding-top:10px;
   padding-right: 10px;
`

const PhoneSection = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin: auto;


@media screen and (max-width: 765px) {
  width: 95%;
margin: auto;

}


p {

  font-weight: bold;
  color: #71A574;
  font-size: 20px;
  letter-spacing: 0px;
  margin: 0px;
  letter-spacing: 0px;
  margin: 0px;
  padding-top: 2px;
    line-height: 25px;
  
  

  

  @media screen and (max-width: 765px) {
      font-size: 18px;
    
}








`



const EmailSection = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin: auto;


@media screen and (max-width: 765px) {
  width: 95%;
margin: auto;

}


p {

  font-weight: bold;
  color: #71A574;
  font-size: 20px;
  letter-spacing: 0px;
  margin: 0px;
  padding-top: 2px;
    line-height: 25px;
  

  @media screen and (max-width: 765px) {
      font-size: 18px;
    
}



`







export default Modal


