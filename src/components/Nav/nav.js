import React, { useState } from 'react'

//img
import icon from  './icon.png'

//Link
import {Link} from "react-router-dom";

//Styles
import styled from 'styled-components'

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  } from "@fortawesome/free-solid-svg-icons";


const Nav = ({toggle, setToggle}) => {


const [click, setClick] = useState(false)

 //HandleClick
 const handleClick = () => setClick(!click)
    
    return (
      <>
      <Container>
    <NavbarContainer>
        <IconContainer>
            <img src={icon} alt="some example image"/>
       </IconContainer>
            
        <NavbarMenu  style={{ right: click ? '0' : '100%' }} onClick={handleClick}>
            <NavbarItem><NavLink to="/">Home</NavLink></NavbarItem>
            <NavbarItem><NavLink to="/about">About</NavLink></NavbarItem>
            <NavbarItem><NavLink to="/course">Course</NavLink></NavbarItem>
            <NavbarItem><NavLink to="/membership">Membership</NavLink></NavbarItem>
            <NavbarItem><a href="https://visitors.brsgolf.com/strokestown#/course/1" target="_blank" >Book</a></NavbarItem>
            <NavbarItem><NavLink to="/clubnotes">Club Notes</NavLink></NavbarItem>
            <NavbarItem><NavLink to="/contactus">Contacts</NavLink></NavbarItem>
            <NavbarItem><NavLink to="/juniors">Juniors</NavLink></NavbarItem>
            <NavbarItem><NavLink to="/seniors">Seniors</NavLink></NavbarItem>
        </NavbarMenu>

        <BurgerIcon onClick={handleClick}>
        {click ? <FontAwesomeIcon icon={faTimes} color="#000000" size="2x" /> : <FontAwesomeIcon icon={faBars} color="#000000" size="2x" />}
        </BurgerIcon>   

    </NavbarContainer>
    </Container>

    </>
  
  
    )

}

const Container = styled.div`
width: 100%;
background: white;

position: sticky;
top: 0;
z-index: 99;
@media screen and (max-width: 1040px) {
  width: 90%;
max-width: 1100px;
margin: auto;


}
`


const NavbarContainer = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
background: white;
padding: 15px 0px 15px 0px;
z-index: 1;


width: 90%;
max-width: 1100px;
margin: auto;


  z-index:10;
@media screen and (max-width: 1040px) {
  padding: 15px 0px 15px 0px;
  }

  @media screen and (max-width: 765px) {

    padding: 15px 0px 15px 0px;;
  }

`

const IconContainer = styled.div `
max-width: 60px;

img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
    
}

`

const NavbarMenu = styled.ul`
display:flex;
flex-direction:row;

@media screen and (max-width: 1065px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin-top: 10px;
    top: 0;
    position: absolute;
    opacity: 1;
    transition: all 0.5s ease;
   background: white;
    z-index: 1;
    
 
   
  }

`
const NavbarItem = styled.li`
margin: 0 20px;
position: relative;

@media screen and (max-width: 1040px) {
  margin: 20px 0px;
 
  }

  


  a {color: #262626;
    font-size: 20px;
    font-weight: 300;
    
    @media screen and (max-width: 1040px) {
      font-size: 24px;
     
      }
    
      @media screen and (max-width: 765px) {
    
     
      }
    }


    p {color: #262626;
      color: #262626;
      font-size: 20px;
      font-weight: 300;
      margin: 0px;
      cursor: pointer;
      
      @media screen and (max-width: 1040px) {
        font-size: 24px;
        
       
        }
      
        @media screen and (max-width: 765px) {
      
       
        }

`


const NavLink = styled(Link)`
color: #262626;
font-size: 20px;
font-weight: 300;

@media screen and (max-width: 1040px) {
  font-size: 24px;
 
  }

  @media screen and (max-width: 765px) {

 
  }

 


`




const BurgerIcon = styled.div`
 display: none;
  @media screen and (max-width: 1040px) {
    display: block;
    position: relative;
    top: -15px;
    right: -15px;
    transform: translate(-100%, 60%);
    font-size: 16px;
    cursor: pointer;
    z-index: 2;
  
   
  }

  `



export default Nav;