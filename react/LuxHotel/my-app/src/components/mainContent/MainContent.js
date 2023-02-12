import React from 'react';
import '../mainContent/MainContentStyle.css';
import styled from 'styled-components';
import mainBtnImg from '../../img/HomeMainBTN.svg';
import scrollDown from '../../img/ScrollDown.svg';
import ScrollButton from '../mainScroll/mainScroll';
const Styled = styled.div `

`


function MainContent(){
    return(
        <Styled>
            <div className='Blocked'>
                <div className='MainContentBox'>
                    <h3 className='MainContentH3-1'>WELCOME TO</h3>
                    <h1>LUXURY</h1>
                    <h3 className='MainContentH3-2'>HOTELS</h3>
                    <p  className='MainContentText'>Book your stay and enjoy Luxury<br/>
                    redefined at the most affordable rates.</p>
                    
                </div>
                <div className='MainBtnBox'>
                    <button className='MainBtn'>
                        <img src={mainBtnImg}/>
                        BOOK NOW
                    </button>
                </div>
            </div>
        </Styled>
    );
}



export default MainContent;