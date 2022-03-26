import React from 'react'

import icon3 from '../../img/icon3.jpg'
import icon4 from '../../img/icon4.jpg'

//Styles
import styled from 'styled-components'




const About = () => {



    
    return (
      <PriceContainer>
      <h3>About Us</h3>
     <Line/>
       
    <AboutContainer>
      
       <AboutSectionInfo1>
           <h3>About</h3>
           <Line/>
           <p>Strokestown Golf club was formed in 1995 and affiliated to the GUI in the same year. In 2001 the club moved to its present location, which is one of the most scenic parkland club's in the West of Ireland.</p>

       </AboutSectionInfo1>
       <AboutSectionIcon1>
      

       </AboutSectionIcon1>
       
       <AboutSectionIcon2>
      

        </AboutSectionIcon2>
       <AboutSectionInfo2>
       <h3>Location</h3>
       <Line/>
        <p>The Golf Club is situated about 2km east of Strokestown and about 20km west of Longford, in the townland of Bumlin, along the N5 Dublin- Westport primary route.</p>
       </AboutSectionInfo2>

      
      
    </AboutContainer>
    </PriceContainer>
  
    )

}

const PriceContainer = styled.div`

display: flex;
flex-direction: column;
padding: 0px 0px 0px;
width: 90%;
max-width: 1100px;
margin: auto;
margin-bottom: 40px;





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

`





const AboutContainer = styled.div`
     display: grid;
    grid-template-columns: repeat(2, 1fr);
      height: 650px;
      grid-gap: 20px;
      

      width: 90%;
      max-width: 1100px;
      margin: auto;
      margin-bottom: 80px;
      

      h3 {

        font-size: 30px;
        font-weight: 300;
        margin-bottom: 10px;

        @media screen and (max-width: 765px) {
            font-size: 28px;
            margin-top: 10px;
}



        
        

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
        height: 100%;
       
    
   

  }

`




const AboutSectionInfo1 = styled.div`
 

`

const AboutSectionIcon1 = styled.div`
  
   background: url(${icon3}) no-repeat center center/cover;

   @media screen and (max-width: 765px) {
       
        height: 250px;
    

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

const AboutSectionInfo2 = styled.div`


`

const AboutSectionIcon2 = styled.div`
 
background: url(${icon4}) no-repeat center center/cover;

@media screen and (max-width: 765px) {
      
        height: 250px;
    
   

  }

`






export default About;


  