import React from "react";
import '../../components/HeroContactUs/HeroContactUs';
import '../../pages/ContactUs/ContactUsStyle.css';



import styled from 'styled-components';
const Styled = styled.div `
@media (min-width: 1920px){
    .container{
        max-width:1516px;
        margin: 0 auto;
    }
}
@media (max-width: 1919px){

}
@media (max-width: 1650px){

}
@media (max-width: 1400px){

}
@media (max-width: 1200px){

}

`
  const HeroContactUs = () => {

    return(
    <Styled> 
      <div className='mainBackgroundContactUs'>
      <div className='mainBackground-overlay'>
        <div className="container">
          <h2 className="H2ContactUs">CONTACT-US</h2>
        </div>
      </div>
      </div>
    </Styled> 
    )
  }

  export default HeroContactUs ;
