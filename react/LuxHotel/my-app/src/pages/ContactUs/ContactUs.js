import React from 'react';
import HeroContactUs from '../../components/HeroContactUs/HeroContactUs';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import Footer from '../../components/footer/footer';
import ScrollApp from '../../components/ScrollTop/ScrollTop';
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
  .container{
    max-width:1516px;
    margin: 0 auto;
  }
}
@media (max-width: 1650px){
  .container{
    max-width:1316px;
    margin: 0 auto;
  }
  .mainBackgroundContactUs{
    height: 460px;
  }
}
@media (max-width: 1400px){
  .container{
    max-width:1116px;
    margin: 0 auto;
  }
  .mainBackgroundContactUs{
    height: 440px;
  }
}
@media (max-width: 1200px){
  .mainBackgroundContactUs{
    height: 400px;
  }
  .H2ContactUs{
    padding-top: 180px;
  }
}
@media (max-width: 992px){
  .mainBackgroundContactUs{
    height: 350px;
  }
  .H2ContactUs{
    padding-top: 150px;
  }
}
@media (max-width: 768px){
  .mainBackgroundContactUs{
    height: 330px;
  }
  .H2ContactUs{
    padding-top: 140px;
  }
}
@media (max-width: 576px){
  .mainBackgroundContactUs{
    height: 300px;
  }
  .H2ContactUs{
    padding-top: 130px;
  }
}
@media (max-width: 425px){
  .mainBackgroundContactUs{
    height: 280px;
  }
  .H2ContactUs{
    padding-top: 120px;
  }
}
@media (max-width: 375px){
  .mainBackgroundContactUs{
    height: 275px;
  }
  .H2ContactUs{
    padding-top: 115px;
  }
}
@media (max-width: 320px){
  .mainBackgroundContactUs{
    height: 250px;
  }
  .H2ContactUs{
    padding-top: 110px;
  }
}
`

function ContactUs() {
  return (
    
    <Styled>

          <HeroContactUs/>
          <ContactUsForm/>

          <Footer/>

    <ScrollApp />
    </Styled>
    
  );
}

export default ContactUs;

