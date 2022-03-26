import React, { useState, useEffect, useRef, useCallback } from 'react'
import Carousel from 'react-elastic-carousel';
import showcase from '../../img/showcase.jpg'
import showcase2 from '../../img/showcase2.jpg'
//Styles
import styled from 'styled-components'

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  } from "@fortawesome/free-solid-svg-icons";

  
//Link
import {Link} from "react-router-dom";


import icon from  './icon.png'

import PricesState from '../../data/PricesState'

import Memership from '../../Files/ApplicForm2022.pdf'




const Results = () => {

    const [whichComponentToShow, setWhichComponentToShow] = useState('male')


    return (

        <PriceContainer>
            <h3>Recent News</h3>
           <Line/>
        <CarouselContainer>
           
            <ScoreContainer>
            <Score>
                    <h4>Captains's Drive in 22/23</h4>
                </Score>
                <Score>
                <h4 onClick={() => setWhichComponentToShow('male')}>Male</h4>
                    <h4>/</h4>
                <h4 onClick={() => setWhichComponentToShow('female')}>Female</h4>
                 </Score>

            </ScoreContainer>

            {whichComponentToShow === 'male' ? (

          <div>
            <ScoreContainer>
                <Score>
                <FontAwesomeIcon icon={faTrophy} color="#FFD700" size="1x" />
                    <p>Fearghal Reilly</p>
                </Score>
                <Score>
                    <p>88</p>
                </Score>

            </ScoreContainer>
            <ScoreContainer>
                <Score>
                <FontAwesomeIcon icon={faTrophy} color="#C0C0C0" size="1x" />
                    <p>Tommy Reilly</p>
                </Score>
                <Score>
                    <p>80</p>
                </Score>

            </ScoreContainer>
            <ScoreContainer>
                <Score>
                <FontAwesomeIcon icon={faTrophy} color="#CD7F32" size="1x" />
                    <p>Martin Reilly</p>
                </Score>
                <Score>
                    <p>78</p>
                </Score>

            </ScoreContainer>

            </div>


                ) :
                
                <div>
                <ScoreContainer>
                <Score>
                <FontAwesomeIcon icon={faTrophy} color="#FFD700" size="1x" />
                    <p>Maureen Reilly</p>
                </Score>
                <Score>
                    <p>75</p>
                </Score>

            </ScoreContainer>
            <ScoreContainer>
                <Score>
                <FontAwesomeIcon icon={faTrophy} color="#C0C0C0" size="1x" />
                    <p>Ciara Reilly</p>
                </Score>
                <Score>
                    <p>71</p>
                </Score>

            </ScoreContainer>
            <ScoreContainer>
                <Score>
                <FontAwesomeIcon icon={faTrophy} color="#CD7F32" size="1x" />
                    <p>Grace Reilly</p>
                </Score>
                <Score>
                    <p>65</p>
                </Score>

            </ScoreContainer>
                </div>
                
                }


            
            
        </CarouselContainer>
     



</PriceContainer>
        

    )

}



const PriceContainer = styled.div`
background-color: white;
display: flex;
flex-direction: column;
padding: 00px 0px 40px;
width: 90%;
max-width: 1100px;
margin: auto;


h3 {

    font-size: 30px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    margin-top: 0px;
    
    @media screen and (max-width: 765px) {
        font-size: 28px;
        margin-top: 10px;
    }


div {

font-size: 30px;
font-weight: 400;

text-align: center;
margin-top: 0px;

@media screen and (max-width: 765px) {
    font-size: 28px;
    margin-top: 10px;
}

`



const CarouselContainer = styled.div`


  margin: auto;
  width: 100%;
  margin-bottom: 40px;
  

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

const TitleRow = styled.div`
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
    display: flex;
    flex-direction: row;
    align-content: space;
    align-items: center;

   
}

`
const Title = styled.div `
width: 100%;
`

const Sex = styled.div `
width: 100%;
display: flex;
flex-direction: row;

`

const SexContainer = styled.div ``



const ScoreContainer = styled.div `

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 80px;
border-bottom: 5px solid white;
width: 100%;
background: rgb(113, 165, 116);
border-radius: 15px;
`

const Score = styled.div `

display: flex;
  align-items: center;
  padding-right: 25px;
  padding-left: 25px;

  h4 {
    font-size: 20px;
    font-weight: 400;
    padding-right: 2px;
    padding-left: 2px;
    cursor: pointer;
  

    @media screen and (max-width: 765px) {
        font-size: 18px;
       
 
}

}

  p{
        font-size: 20px;
       font-weight: 200;
    padding-left: 20px;
    

       @media screen and (max-width: 765px) {

          font-size: 18px;
}
     

    }

    @media screen and (max-width: 765px) {
      grid-template-columns: repeat(1, 1fr);
      height: 100%;
     
  
 

}


  }
`





export default Results;