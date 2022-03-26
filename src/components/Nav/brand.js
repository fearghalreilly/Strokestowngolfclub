import React, { useState, useEffect, useRef, useCallback } from 'react'
import Logo from '../../img/logo.png'




//Styles
import styled from 'styled-components'




const Brand = () => {

   

  
    


    
    return (

        <BrandContainer>
        <div>
        <a a href="https://fearghalreilly.com/" target="_blank">Designed @ fearghalreilly.com</a>
        <img src={Logo} />
        </div>
        
        
        </BrandContainer>
    )
}

const BrandContainer = styled.div`

max-width: 1100px;
margin: auto;
margin-bottom: 30px;


div {
    display: flex;
    align-item: center;
    justify-content: center;

}

a {
    color: #262626;
    font-weight: 200;

}

`

   

export default Brand;


  