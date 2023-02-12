import React from 'react';
import '../../components/FacilityContent/FacilityContentStyle.css';
import styled from 'styled-components';
import Gallery from '../RoomsCarousel/RoomsCarousel';


const Styled = styled.div `
@media (min-width: 1920px){
    .container{
      max-width: 1580px;
      margin: 0 auto;
    }

  }
  @media (max-width: 1920px){
    .container{
      max-width: 1580px;
      margin: 0 auto;
    }
  }
  @media (max-width: 1650px){
    .container{
      max-width: 1280px;
      margin: 0 auto;
    }
    .FacilitiesContentBox{
      padding:  0 15px 170px 15px;
    }
    .FacilitiesContent .lastFacilitiesContentBox{
      padding:  0 15px 0 15px;
    }
  }
  @media (max-width: 1400px){
    .container{
      max-width: 1280px;
      margin: 0 auto;
    }
    .FacLinkBox{
      width: 500px;
      height: 60px;
    }
    .FacilitiesContentBox{
      padding:  0 15px 150px 15px;
    }
  }
  @media (max-width: 1200px){
    .container{
      max-width: 1080px;
      margin: 0 auto;
    }
    .FacilitiesContentBox{
      padding:  0 15px 100px 15px;
    }
  }
  @media (max-width: 992px){
    .FacLinkBox{
      width: 450px;
      height: 50px;
    }
    .FacilitiesContentBox{
      padding:  0 15px 80px 15px;
    }
  }
  @media (max-width: 768px){
    .FacLinkBox{
      width: 400px;
      height: 50px;
    }
    .FacilitiesContentBox{
      padding:  0 15px 60px 15px;
    }
  }
  @media (max-width: 576px){
    .FacLinkBox{
      width: 350px;
      height: 50px;
    }
    .FacilitiesContentBox{
      padding:  0 15px 50px 15px;
    }
  }
  @media (max-width: 425px){
    .FacLinkBox{
      width: 250px;
      height: 40px;
    }
    .FacilitiesContentBox{
      padding:  0 15px 40px 15px;
    }
  }
  @media (max-width: 375px){

  }
  @media (max-width: 320px){
    .FacLinkBox{
      width: 200px;
      height: 30px;
    }
    .FacilitiesContentBox{
      padding:  0 15px 30px 15px;
    }
  }
`


function RoomsContent(){
    return(
        <Styled>
            <section className='FacilitiesContent'>
              <div className='container'>
                <div className='FacilitiesContentTittle'>
                  <h2>FACILITIES</h2>
                  <p>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
                      that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                      and our modern luxury resort facilities will help you enjoy the best of all. </p>
                </div>
          
              <Gallery/>
              </div>
              
            </section>
            
        </Styled>
    );
}



export default RoomsContent;