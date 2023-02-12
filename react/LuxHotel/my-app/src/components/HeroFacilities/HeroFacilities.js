import React from "react";
import '../Hero/HeroStyle.css';
import MainContent from "../mainContent/MainContent";
import ScrollButton from '../mainScroll/mainScroll';
import ScrollL from '../ScrollTopTop/ScrollTopTop';

import styled from 'styled-components';
const Styled = styled.div `
@media (min-width: 1920px){
  .container{
    max-width: 1550px;
    margin: 0 auto;
  }
}
@media (max-width: 1920px){
  .container{
    max-width: 1550px;
    margin: 0 auto;
  }
}
@media (max-width: 1650px){
  .container{
    max-width: 1300px;
    margin: 0 auto;
  }
}
@media (max-width: 1400px){
  .container{
    max-width: 1150px;
    margin: 0 auto;
  }
}
@media (max-width: 1200px){
  .container{
    max-width: 950px;
    margin: 0 auto;
  }
}
@media (max-width: 992px){
  .container{
    max-width: 800px;
    margin: 0 auto;
  }
}

`
  const HeroFacilities = () => {

    return(
    <Styled> 
      <div className='mainBackgroundFacilities'>
      <div className='mainBackground-overlay'>
        <div className="container">
          <div className="HeroFacilities">




                      <MainContent/>
                      <div className='scrollDownBox'>
                        <div className='scrollDownFlex'>
                        <ScrollL/>
                        
                        <ScrollButton />  
                        </div>
                      </div>
          </div>
        </div>
      </div>
      </div>
    </Styled> 
    )
  }

  export default HeroFacilities ;
