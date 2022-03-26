import React from 'react'
import styled from "styled-components";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";

//Link
import {Link} from "react-router-dom";

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faLinkedin,
    } from "@fortawesome/free-brands-svg-icons";

    import {
    
        faPhone,
        } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <FooterContainer> 
            <Footers>
                <ColumnOne>
                <h2>Quick Links</h2>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/course">Course</Link>
                    <Link to="membership">Membership</Link>
                    <a href="https://visitors.brsgolf.com/strokestown#/course/1" target="_blank" >Book Now</a>
                    <Link to="contactus">Contacts</Link>
                    <Link to="clubnotes">Club Notes</Link>
                    <Link to="/juniors">Juniors</Link>
                    <Link to="/seniors">Seniors</Link>
                </ColumnOne>
                <ColumnTwo>
                <h2>Socials</h2>
                    <a href="https://www.facebook.com/Strokestowngolf/" target="_blank">Facebook</a>
                    <a href="https://www.instagram.com/strokestowngolfclub/" target="_blank">Instragram</a>
                    <a href="https://twitter.com/strokestowngolf" target="_blank">Twitter</a>
                </ColumnTwo>
                <ColumnThree>
            
                <h2>Location</h2>
                <p>Strokestown Golf Club</p>
                    <p>Bumlin,</p>
                    <p>Strokestown,</p>
                    <p>Co. Roscommon,</p>
                    <p>F42 YK12</p>
                    </ColumnThree>
                    <ColumnFour>
                    
                <MapContainer
            style={{ height: '100%', width: '100%', zIndex: '10' }}
            center={[53.767827499999996, -8.075495852955923]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
            />

            <Marker
              position={[53.767827499999996, -8.075495852955923]}
            >
          
            </Marker>
          </MapContainer>
          </ColumnFour>
                
                
               
            </Footers>
            </FooterContainer> 
          
        
           
    
    )

}

const FooterContainer = styled.div`

max-width: 1100px;
margin: auto;

margin-bottom: 30px;
margin-top: 60px;

@media screen and (max-width: 1040px) {
    
    max-width: 90%;
  }




h3{
    margin: 0px;
    
}

ul {
    padding: 0px;
}


`

const Footers = styled.div`



display:grid;
grid-template-columns: 1fr 1fr 1fr 2fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
  }



@media screen and (max-width: 1040px) {

    display: grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    
    
  }

h2 {
    margin: 0px;
        font-size: 20px;
       font-weight: 600;
       margin-top: 25px;
       line-height: 1.5;

       @media screen and (max-width: 765px) {

          font-size: 18px;
}

}

a {
   color: #262626;;
    text-decoration: none;
    margin: 0px;
    font-size: 18px;
    font-weight: 200;
 
  

   @media screen and (max-width: 765px) {

      font-size: 18px;
}

}

a:hover {

}


p {
  color: #262626;;
   text-decoration: none;
   margin: 0px;
   font-size: 18px;
   font-weight: 200;

 

  @media screen and (max-width: 765px) {

     font-size: 18px;
}

}

p:hover {

}

`

const ColumnOne = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 1040px) {
    grid-area: 1 / 1 / 2 / 2;
  }



`



const ColumnTwo = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 1040px) {
    grid-area: 1 / 2 / 2 / 3;
  }


`

const ColumnThree = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 1040px) {
    grid-area: 1 / 3 / 2 / 4; 
  
  }


`

const ColumnFour = styled.div`
width: 100%;
height: 100%;

@media screen and (max-width: 1040px) {
    padding-top: 20px;
    grid-area: 2 / 1 / 3 / 4; 
  
  }
`








const MapContainerSection = styled.div`
width: 100%;
height: 100%;
`



export default Footer;