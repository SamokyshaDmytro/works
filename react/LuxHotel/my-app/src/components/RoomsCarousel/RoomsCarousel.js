import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../../components/RoomsCarousel/RoomsCarouselStyle.css';
import slide1 from '../../img/Room1Slide.jpg';
import slide2 from '../../img/Room2Slide.jpg';
import slide3 from '../../img/Room3Slide.jpg';
import { BsFillPlusCircleFill } from "react-icons/bs";
import styled from 'styled-components';
const Styled = styled.div `
@media (min-width: 1920px){

}


@media (max-width: 1919px){
  
}


@media (max-width: 1650px){
  .FacilitiesContentTittle {
    padding-bottom: 82px;
    padding-left: 15px;
    padding-right: 15px;
}

    .RoomTitle {
      height: 121px;
    }
    .alice-carousel__dots-item:not(.__custom) {
      width: 19px ;
      height: 19px;
    }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      width: 19px;
    height: 19px;
    }
}


@media (max-width: 1400px){

    .RoomTitle {
      height: 111px;
    }
    .alice-carousel__dots-item:not(.__custom) {
      width: 18px ;
      height: 18px;
    }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      width: 18px;
    height: 18px;
    }
    .BsFillPlusCircleFil{
      width: 45px;
      height: 45px;
      font-size: 28px;
      }
      .ViewRoomLink {
        font-size: 23px;
        line-height: 27px;
        padding-left: 40px;
    }
    .priceButton {
      font-size: 24px;
      line-height: 30px;
      padding: 20px 40px;
    }
}


@media (max-width: 1200px){
  .CardWrap{
    padding: 70px 15px 0px 15px;
  }
    .RoomTitle {
      height: 100px;
    }
    .alice-carousel__dots-item:not(.__custom) {
      width: 17px ;
      height: 17px;
    }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      width: 17px;
    height: 17px;
    }
    .BsFillPlusCircleFil{
      width: 40px;
      height: 40px;
      font-size: 25px;
      }
      .ViewRoomLink {
        font-size: 21px;
        line-height: 24px;
        padding-left: 36px;
    }
    .priceButton {
      font-size: 22px;
      line-height: 30px;
      padding: 18px 36px;
    }
}


@media (max-width: 992px){
  .CardWrap{
    padding: 60px 15px 0px 15px;
  }
    .RoomTitle {
      height: 80px;
    }
    .alice-carousel__dots-item:not(.__custom) {
      width: 16px ;
      height: 16px;
    }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      width: 16px;
    height: 16px;
    }
    .BsFillPlusCircleFil{
      width: 38px;
      height: 38px;
      font-size: 23px;
      }
      .ViewRoomLink {
        font-size: 19px;
        line-height: 20px;
        padding-left: 32px;
    }
    .priceButton {
      font-size: 20px;
      line-height: 26px;
      padding: 14px 30px;
    }
}


@media (max-width: 768px){
  .CardWrap{
    padding: 50px 15px 0px 15px;
  }
    .RoomTitle {
      height: 50px;
    }
    .alice-carousel__dots-item:not(.__custom) {
      width: 15px ;
      height: 15px;
    }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      width: 15px;
    height: 15px;
    }
    .BsFillPlusCircleFil{
      width: 35px;
      height: 35px;
      font-size: 20px;
      }
      .ViewRoomLink {
        font-size: 17px;
        line-height: 19px;
        padding-left: 30px;
    }
    .priceButton {
      font-size: 18px;
      line-height: 24px;
      padding: 12px 28px;
    }
  }


@media (max-width: 576px){
  .CardWrap{
    padding: 40px 15px 0px 15px;
  }
    .RoomTitle {
      height: 40px;
    }
    .alice-carousel__dots-item:not(.__custom) {
      width: 14px ;
      height: 14px;
    }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      width: 14px;
    height: 14px;
    }
    .priceBox {
      height: 150px;
  }
    .priceBoxFlex{
      flex-direction: column;
    }
    .BsFillPlusCircleFil{
      width: 34px;
      height: 34px;
      font-size: 25px;
      }
      .ViewRoomLink {
        font-size: 17px;
        line-height: 19px;
        padding-left: 30px;
    }
    .priceButton {
      font-size: 18px;
      line-height: 24px;
      padding: 12px 28px;
    }
}


@media (max-width: 425px){
  .CardWrap{
    padding: 35px 13px 0px 13px;
  }
    .alice-carousel__dots-item:not(.__custom) {
      width: 13px ;
      height: 13px;
    }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      width: 13px;
    height: 13px;
    }
}


@media (max-width: 375px){
    .alice-carousel__dots-item:not(.__custom) {
      width: 10px ;
      height: 10px;
    }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      width: 10px;
    height: 10px;
    }
}


@media (max-width: 320px){
  .CardWrap{
    padding: 30px 10px 0px 10px;
  }
    .RoomTitle {
      height: 25px;
    }
    .alice-carousel__dots-item:not(.__custom) {
      width: 8px ;
      height: 8px;
    }
    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
      width: 8px;
    height: 8px;
    }
    .BsFillPlusCircleFil{
      width: 30px;
      height: 30px;
      font-size: 20px;
      }
      .ViewRoomLink {
        font-size: 16px;
        line-height: 16px;
        padding-left: 20px;
    }
    .priceButton {
      font-size: 16px;
      line-height: 24px;
      padding: 10px 25px;
    }
}
`


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={slide1} onDragStart={handleDragStart} role="presentation" />,
  <img src={slide1} onDragStart={handleDragStart} role="presentation" />,
  <img src={slide1} onDragStart={handleDragStart} role="presentation" />,
];
const items2 = [
  <img src={slide2} onDragStart={handleDragStart} role="presentation" />,
  <img src={slide2} onDragStart={handleDragStart} role="presentation" />,
  <img src={slide2} onDragStart={handleDragStart} role="presentation" />,
];
const items3 = [
  <img src={slide3} onDragStart={handleDragStart} role="presentation" />,
  <img src={slide3} onDragStart={handleDragStart} role="presentation" />,
  <img src={slide3} onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {

  return (
<>
<Styled>
<div className='CardWrap'>
  <div className='CardBox'>
    <div className='carouselBox'>
      <AliceCarousel mouseTracking items={items} />
        <div className='RoomTitle'>
          <p >SINGLE ROOM</p>
        </div>
    </div>
    <div className='priceBox'>
      <div className='priceBoxFlex'>
        <div className='ViewRoom'>
        <BsFillPlusCircleFill className='BsFillPlusCircleFill'/>
        <a className='ViewRoomLink' href='#'>VIEW ROOM DETAILS</a>
        </div>
        <div className='priceButtonBox'>
          <button className='priceButton' type='button'>$147  Avg/night</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='CardWrap'>
  <div className='CardBox'>
    <div className='carouselBox'>
      <AliceCarousel mouseTracking items={items2} />
        <div className='RoomTitle'>
          <p >DOUBLE ROOM</p>
        </div>
    </div>
    <div className='priceBox'>
      <div className='priceBoxFlex'>
        <div className='ViewRoom'>
        <BsFillPlusCircleFill className='BsFillPlusCircleFill'/>
        <a className='ViewRoomLink' href='#'>VIEW ROOM DETAILS</a>
        </div>
        <div className='priceButtonBox'>
          <button className='priceButton' type='button'>$155  Avg/night</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='CardWrap'>
  <div className='CardBox'>
    <div className='carouselBox'>
      <AliceCarousel mouseTracking items={items3} />
        <div className='RoomTitle'>
          <p >TWIN ROOM</p>
        </div>
    </div>
    <div className='priceBox'>
      <div className='priceBoxFlex'>
        <div className='ViewRoom'>
        <BsFillPlusCircleFill className='BsFillPlusCircleFill'/>
        <a className='ViewRoomLink' href='#'>VIEW ROOM DETAILS</a>
        </div>
        <div className='priceButtonBox'>
          <button className='priceButton' type='button'>$155  Avg/night</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</Styled>    
</>
  );
}

export default Gallery;