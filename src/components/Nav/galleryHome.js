import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import image1 from "../../img/image1.jpg";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import image1 from "../../img/image1.jpg";
//Animations




const GalleryHome = () => {
 

  return (
    <>
   

    <Work
     
    >
      <WorkContainer>

      <Movie >
        <h2>Giphy Finder Application</h2>
        <motion.div ></motion.div>
        <Link to="/gallery/1">
        <Hide>
        <motion.img  src={image1} alt="Giphy Finder Application" />
        </Hide>
        </Link>
      </Movie>

      <Movie>
        <h2>Cryptocurrency API Application</h2>
        <motion.div ></motion.div>
        <Link to="/gallery/2">
          <Hide>
            <motion.img  src={image2} alt="Cryptocurrency API Application" />
          </Hide>
        </Link>
      </Movie>
     
      <Movie >
        <h2>JD Digital Media</h2>
        <motion.div ></motion.div>
        <Link to="/gallery/3">
          <Hide>
            <motion.img  src={image2} alt="JD Digital Media" />
          </Hide>
        </Link>
      </Movie>

      <Movie >
        <h2>ULTRA</h2>
        <motion.div ></motion.div>
        <Link to="/gallery/4">
        <Hide>
        <motion.img  src={image1} alt="Ultra" />
        </Hide>
        </Link>
      </Movie>

      
      
  
      </WorkContainer>
    </Work>

    </>
  );
};

const Work = styled(motion.div)`
    overflow-y: hidden;
`

const WorkContainer = styled(motion.div)`
    padding: 3em 4em 6em 4em;
    display: grid;
grid-template-columns: 1fr 1fr;
gap: 30px;
    
    
    @media screen and (max-width: 1080px) {
      grid-template-columns: 1fr;

     
}
@media screen and (max-width: 765px) {

padding: 45px 35px 45px 35px;

}

`

const Movie = styled(motion.div)`
  padding-bottom: 50px;

  .line {
    height: 0.5rem;
    background:  #6E00FF;
    margin-bottom: 15px;
    
  }
  img {
    max-height:80%;
    width: 100%;
    object-fit: contain;
  
   
    
  
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;



export default GalleryHome;