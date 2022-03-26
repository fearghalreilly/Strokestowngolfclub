import React from 'react'

//Styles
import styled from 'styled-components'

//Images
import icon1 from '../../img/senior1.png'


import { motion } from "framer-motion/dist/framer-motion";
import {
  scrollRevealt,

} from "../../animation";

import { useScroll } from "./useScroll";



const Senior = () => {

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();



    
    return (
      <>
      <Heading ref={element} variants={scrollRevealt} animate={controls} initial="hidden">
        <h3>Senior Golf</h3>
        <Line />

</Heading>
        
    <AboutContainer>
      
       <AboutSectionInfo1 ref={element2} variants={scrollRevealt} animate={controls2} initial="hidden">
         
           <p>Paddy Murray is the 2019 Seniors Captain. Strokestown Golf Club has a strong senior playing community, with high numbers playing in all weather every Tuesday at 10:30am and throughout the year. Each year a number of away day's are ogranised which are eagerly anticipated and always great fun.</p>
           <p>In early 2003 a group of ‘Senior’ men with too much time on their hands were talking about forming a seniors group to play golf and have a social occasion in mid-week. By this time both our neighbouring clubs, Longford and Roscommon had a thriving Seniors section. Emissaries were dispatched to these clubs to suss out the scene. As a result of these visits our good friend and organiser of Roscommon Seniors Jim Finn gave us a donation of €30 to get ourselves up and running.     </p>
           <p>So it was that at 10.30am on 8th July 2003, eight Stalwarts togged out for the inaugural outing of the Seniors. Paddy Murray was the winner of the 15 holes competition with 34 points, with a playing handicap of 12. Joe Mulvihill was second.</p>
           <p>Joe Mulvihill gave us the name the ‘Bumlin Boys’ after the nearby Bumlin River..</p>
           <BumlinBoys>
             <div>
           <img src={icon1} alt="Memembership Pricing Strokestown"/>
           <p>The Bumlin 8 on their first outing 3rd July 2003
Front Row: J. Mulvihill, D. Tighe & B. McGuinness
Back Row: P. Murray, D. Watt, J. Irvine, B. Whitty & E. Boland</p>
           </div>
           <div>
           <p>Members in the first few months were: Paddy Murray, Joe Mulvihill, Liam Glover, Des Tighe, Brendan Whitty, Dessie Watts, John Irvine, Eugene Boland, Brian McGuinness, Jim Tunney, Joe Fingleton, Austin Trappe, Jim Bohan, Frank Thorne, Michael Farrell, Eamon Shiel, Colum McCrann, Michael Donnellan, Michael Murtagh and Donnchadh MacAodha.</p>
           <p>The Ladies were invited to join, as they were curious and reckoned we were having too much fun. They had their first outing with us on 17th February 2004. Four brave Ladies played on that day, Claire Beirne, Maureen Hanly, Marie Duke and Vera Whitty. Claire was the first winner. Other Ladies to play in the first few year were; Elsie Owens, Marie Cox, Patricia Shiels, Sheena MacAodha, Florence Hanly, Kitty Dowd, Maud Brady, Lucy Gibbons and Margaret Cox.</p>
      
</div>
</BumlinBoys>
          
           <p>When the Ladies joined we could no longer be called the ‘Bumlin Boys’ again Joe Mulvihill came to the rescue and we are now the ‘Bumlin Folk’.</p>
           <p>We have away day every month from April to September / October, where we play different courses and sometimes take in their Senior Open Day. We have our overnight stay with two rounds of golf and Dinner Bed and Breakfast. So far these overnights have all been to Bundoran Golf Club and the Great Northern Hotel. We have established a rapport with our senior comrades in Ballinamore Golf Club, whereby we play in their senior open day and they replicate to our open day. In fact we had our very first away day in Ballinamore on 1st June 2004 where Colum McCrann was our first away day winner. We followed this outing with a visit to our near neighbours Roscommon on 29th September 2004, where Brian McGuinness used local knowledge to good effect to claim first prize. And so the wanderlust was born.</p>
           <p>As well as a thriving social scene we have a number of competitions for both Ladies and Gents.</p>
           <p>As our numbers grew, the competitive nature began to kick in. One of first competitions to be inaugurated was the Golfer of the Year; this beautiful replica of the Ardagh Chalice comes from a limited set of Bellek China. This is a Match Play event and is much sought after; Donnchadh MacAodha is the first name on this beautiful trophy. It was originally sponsored by ESB Lanesborough. Other competitions are the most two’s in the year. The total number of points scored each Tuesday, the Seniors Captains Prize for both Ladies and Gents (sponsored by Jim Ganly). Most improved Senior player of the year (sponsored by Eugene Boland). Best Eclectic score during the summer months, both gross and nett. Most points scored on our away days (perpetual trophy sponsored by John Joe and Margaret Cox). To keep the cobwebs away we run a winter league from November to March. </p>
           <p>We have had, had three holes in one in our history. Eugene Boland 21st March 2006. Colm Dardis 2nd April 2013. And Bernie Taylor the first Lady to have a hole in one on the 3rd hole 6th January 2015.</p>
           <p>Our current list of players are dedicated group, who play in all conditions: Sean Brennan, Eamon Burke, Tony Carleton, John Connor, John Joe Cox, Ronan Cullen, Pat Dowd, Colm Dardis, Peter Day, Jim Ganly, Michael Healy, Ray Hogan, Noel Holland, Gerry Houlihan, John Irvine, Mattie Kelly, Martin Kelly, Ollie Killeen, Brendan Kiernan, Peter Lally, Brian Malone, Martin McAlister, Jackie McDonnell, Pat McGonnell, Sean O’Donnell, Brian O’Rourke, Liam Rosemond, Michael Simpson, Jim Summers, Bob Sumner, Paul Taylor and Aidan Cassidy. Injuries now prevent Paddy Donlon and P J Donoghue from gracing the fairways of Bumlin. Regretfully we lost our first member in the later part of 2014; Michael Kelly is making a home for us all in another kingdom.</p>
           <p>Our two overseas members, Monsignor Kevin Flanagan, USA, and his friend Paddy Kiernan, England, have played with us each summer since 2003 when they come on holidays, and they are always very welcome. </p>
           <p>Ursula Burke, Marie Connellan, Mary Fallon, Goretti Kenny, Rose Lally, Eileen Lyons, Renagh Mercer, Antoinette O’Donnell, Marie Simpson and Bernie Taylor are some of the latest Ladies to play.</p>
           <p>Our fee of €4 covers the Tuesday competition, the cuppa with cake/biscuits afterwards and a Christmas dinner each year. We have only increased the fee by €1 since our start-up.</p>
           <p>The Senior Captains have been; Eugene Boland 2008, Donnchadh MacAodha 2009, Jim Ganly 2010/13 and our present Captain Liam Rosemond 2014/15.</p>
           <p>We have come a long way from the original Bumlin eight of July 2003 to last year’s Christmas dinner in the Percy French, where we had an attendance of fifty eight.</p>
           <p>Our mission is to provide a relaxing and social round of golf in a pleasant and stress free atmosphere. All members of Strokestown Golf Club over ‘55 are welcome, and indeed junior, seniors are encouraged to serve their time with us.</p>
         

       </AboutSectionInfo1>
     
       
       

      
      
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
    grid-template-columns: repeat(1, 1fr);
   
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

const BumlinBoys = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 20px;

@media screen and (max-width: 1024px) {
       
  grid-template-columns: repeat(1, 1fr);
   
     }

img {
  width: 100%;
}

p {
  margin-top:0px;
}

`

const AboutSectionInfo1 = styled(motion.div)`




 

`

const AboutSectionIcon1 = styled.div`

img {

  background: url(${icon1}) no-repeat;
  
  width: 100%;
}


  
  

   @media screen and (max-width: 765px) {
       
    width: 100%;
    height: 100%;
    

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








export default Senior;


  