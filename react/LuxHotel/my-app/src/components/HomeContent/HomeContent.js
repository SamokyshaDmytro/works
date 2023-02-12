import React from 'react';
import '../HomeContent/HomeContentStyle.css';
import styled from 'styled-components';
import HomeContentIMG1 from '../../img/HomeContentIMG1.jpg';
import HomeContentIMG2 from '../../img/HomeContentIMG2.jpg';

const Styled = styled.div `
@media (min-width: 1920px){
    .HomeContentBox{
        flex-direction: row;
    }
}
@media (max-width: 1650px){
.HomeContentImage{
        max-width: 500px;

        }
        .HomeContentTittle {
            font-size: 26px;
            line-height: 34px;
            padding-bottom: 24px;
        }
        .HomeContentTextBox h3 {
            font-size: 40px;
            line-height: 42px;
            letter-spacing: 0.02em;
        }
        .HomeContentTextBox p {
            font-size: 20px;
            line-height: 30px;
            padding: 25px 0 30px 0;
        }
        .HomeContentTextBox button {
            height: 53px;
            width: 200px;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.05em;
        }
}
@media (max-width: 1440px){
    
}
@media (max-width: 992px){
    .HomeContentBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .HomeContentImage{
        max-width: 100%;
        padding-top:80px;

        }
        .HomeContentTittle {
            font-size: 26px;
            line-height: 34px;
            padding-bottom: 24px;
        }
        .HomeContentTextBox{
            margin: 0 10px;
            padding: 0 10px;
        }
        .HomeContentTextBox h3 {
            font-size: 40px;
            line-height: 42px;
            letter-spacing: 0.02em;
        }
        .HomeContentTextBox p {
            font-size: 20px;
            line-height: 30px;
            padding: 25px 0 30px 0;
        }
        .HomeContentTextBox button {
            height: 53px;
            width: 200px;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.05em;
        }
}
@media (max-width: 576px){
    .HomeContentBox {
        padding-top: 40px;
    }
    .HomeContentImage{
        max-width: 100%;
        padding-top:50px;

        }
        .HomeContentTittle {
            font-size: 22px;
            line-height: 24px;
            padding-bottom: 24px;
        }
        .HomeContentTextBox{
            margin: 0 10px;
            padding: 0 10px;
        }
        .HomeContentTextBox h3 {
            font-size: 24px;
            line-height: 22px;
            letter-spacing: 0.02em;
        }
        .HomeContentTextBox p {
            font-size: 18px;
            line-height: 20px;
            padding: 25px 0 30px 0;
        }
        .HomeContentTextBox button {
            height: 40px;
            width: 130px;
            font-size: 16px;
            line-height: 18px;
            letter-spacing: 0.03em;
        }
}

@media (min-width: 1920px){
    .container2{
      max-width: 1640px;
      margin: 0 auto;
    }
  }
  @media (max-width: 1920px){
    .container2{
      max-width: 1640px;
      margin: 0 auto;
    }
  }
  @media (max-width: 1650px){
    .container2{
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  @media (max-width: 1400px){
    .container2{
      max-width: 1150px;
      margin: 0 auto;
    }
  }
  @media (max-width: 1200px){
    .container2{
      max-width: 950px;
      margin: 0 auto;
    }
  }
  @media (max-width: 992px){
    .container2{
      max-width: 850px;
      margin: 0 auto;
    }
  }
`


function MainContent(){
    return(
        <Styled>
            <section className='HomeContentSection'>
                <div className='container2'>
                    <div className='HomeContentTittleBox'>
                        <div className='h3TitleContentFlex'>
                        <h3 className='HomeContentTittle'>
                        
                        All our room types are including complementary breakfast
                        </h3>
                        </div>
                    </div>


                    <div className='HomeContentBox'>
                        <div className='HomeContentTextBox'>
                            <h3>Luxury redefined</h3>
                            <p>Our rooms are designed to transport 
                            you into an environment made for leisure. 
                            Take your mind off the day-to-day of home 
                            ife and find a private paradise for yourself.
                           </p>
                            <button>EXPLORE</button>
                        </div>
                        <div className='HomeContentImageBox'>
                            <img className='HomeContentImage' src={HomeContentIMG1}/>
                            <div className='HomeContentImageLayot'></div>
                        </div>
                    </div>
                    <div className='HomeContentBox'>
                        <div className='HomeContentTextBox'>
                            <h3>Leave your worries in 
                                 the sand
                            </h3>
                            <p>We love life at the beach. Being close
                                to the ocean with access to endless sandy
                                beach ensures a relaxed state of mind. It 
                                seems like time stands still watching the 
                                ocean. 
                            </p>
                            <button>EXPLORE</button>
                        </div>
                        <div className='HomeContentImageBox'>
                            <img className='HomeContentImage' src={HomeContentIMG2}/>
                            <div className='HomeContentImageLayot'></div>
                        </div>
                    </div>


                </div>
            </section>
        </Styled>
    );
}


export default MainContent;