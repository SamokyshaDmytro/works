import React from 'react';
import Hero from '../../components/Hero/Hero'
import Header from '../../components/header/header';
import MainContent from '../../components/mainContent/MainContent';
import HomeContent from '../../components/HomeContent/HomeContent';

import {Carousel} from '../../components/carousel/Carousel';

import Footer from '../../components/footer/footer';
import ScrollApp from '../../components/ScrollTop/ScrollTop';
import '../Home/HomeStyles.css';
import styled from 'styled-components';

const Styled = styled.div `

`

function Home() {
  return (
    
    <Styled>
          <Hero/>
          <HomeContent/>
        <Carousel>
          <div className="item item-1">
            <h3>Testimonials</h3>
            <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
            <p> Mr. and Mrs. Baxter, UK</p>
          </div>
          <div className="item item-2"> 
            <h3>Testimonials</h3>
            <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
            <p> Mr. and Mrs. Baxter, UK</p>
            </div>
          <div className="item item-3">
            <h3>Testimonials</h3>
            <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
            <p> Mr. and Mrs. Baxter, UK</p>
          </div>
        </Carousel>

          <Footer/>

    <ScrollApp />
    </Styled>
    
  );
}

export default Home;

