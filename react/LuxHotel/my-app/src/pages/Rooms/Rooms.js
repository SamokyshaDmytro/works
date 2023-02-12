import React from 'react';
import HeroRooms from '../../components/HeroRooms/HeroRooms';
import {Carousel} from '../../components/carousel/Carousel';
import Footer from '../../components/footer/footer';
import ScrollApp from '../../components/ScrollTop/ScrollTop';
import RoomsContent from '../../components/RoomsContent/RoomsContent';
import '../../pages/Rooms/RoomsStyle.css';
import styled from 'styled-components';

const Styled = styled.div `

`

function Rooms() {
  return (
    
    <Styled>
          <HeroRooms/>
          <RoomsContent/>
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

export default Rooms;

