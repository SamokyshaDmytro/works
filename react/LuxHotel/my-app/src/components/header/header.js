import React, {useState}  from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import '../header/headerStyle.css';
import styled from 'styled-components';


const Styled = styled.div `

.header-layot{
       position:relative; 
       display: block;
}

.header-iinner-layot{
   position: absolute; 
   width: 100%;
   z-index: 999;
}



.HeadContainer{
    display: flex;
    justify-content: space-between;
    height: 149px;
    padding: 0 10px;

        @media (max-width: 1200px){
            height: 100%;
        }
}
.LogoContainer{
    display:block;
    width: 256px;
    height:149px;

        @media (max-width: 1200px){
                width: 200px;
                height:100px;
                z-index: 500;
        }
}
.LogoLinkOne{
    font-family: 'Adobe Garamond Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.15em;
    color: #14274A;
    text-align: center;

        @media (max-width: 1200px){
            font-size: 30px;
            line-height: 38px;
            letter-spacing: 0.1em;
        }
}
.LogoLinkTwo{
    font-family: 'Adobe Garamond Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.6em;
    color: #14274A;

    @media (max-width: 1200px){
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0.4em;
    }
}
.LogoBackground{
    background-color:#E0B973;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 50px 50px;
    border-bottom-left-radius: 50px 50px; 
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    @media (max-width: 1200px){
        border-bottom-right-radius: 30px 30px;
        border-bottom-left-radius: 30px 30px; 
    }
}
.NavContainer{
    max-width:700px;
    display: flex;
    align-items: center;
}
.NavMain{
    width:100%;

    @media (max-width: 1200px){
        display:none;
    }

}
.NavMainUl{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px){
        flex-direction: column;
        padding: 10px 10px 10px 10px;
    }
}
.NavMainLi{
    display: flex;
    padding-right:90px;
    white-space: nowrap;

        @media (max-width: 1650px){
            padding-right:60px;
        }
        @media (max-width: 1200px){

            padding: 10px 0 10px 0;
        justify-content: center;
        }
}
.NavMainLi:last-child{
    padding-right:0;
    width:100%;
}
.NavMainA{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
    border-bottom: 2px solid rgba(0,0,0,0.0);
    transition: all 0.4s linear;

        @media (max-width: 1200px){
            font-size: 20px;
            color: white;
        }
}
.NavMainA:hover{
    text-shadow: 0px 0px 2px rgba(255,255,255, 0.6);
    border-bottom: 2px solid rgba(255,255,255, 1);
}

.BurgerDiv{
    display: flex;
    align-content: center;
    align-items: center;
    
}

@media (max-width: 1200px){
    .Burger-menuNav{
        display: block;
    }
}

`


function Header(){

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)


    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }


    return(

        <Styled>
            <div className='header-layot'>

                <div className='header-iinner-layot'>
                    <div className='container'>
                            <div className='HeadContainer'>
                        <div className='LogoContainer'>
                            <div className='LogoBackground'>
                                <a className='LogoLinkOne'>LUXURY</a>
                                <a className='LogoLinkTwo'>HOTELS</a>
                            </div>
                        </div>
                    
                        <div className='NavContainer'>


                            <nav className='NavMain'>
                                <ul className='NavMainUl'>
                                    <li className='NavMainLi'>
                                        <Link  to={'/'} className='NavMainA'>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='NavMainLi'>
                                        <Link to={'/Facilities'} className='NavMainA'>
                                            Facilities
                                        </Link>
                                    </li>
                                    <li className='NavMainLi'>
                                        <Link to={'/Rooms'} className='NavMainA'>
                                            Rooms
                                        </Link>
                                    </li>
                                    <li className='NavMainLi'>
                                        <Link  to={'/ContactUs'}  className='NavMainA'>
                                            Contact-us
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className='BurgerDiv' style={{width: '100%', height: '100%'}}>
                                <nav className='Burger-menuNav'>
                                    <div className="burger-menu" onClick={updateMenu}>
                                        <div className={burger_class} ></div>
                                        <div className={burger_class} ></div>
                                        <div className={burger_class} ></div>
                                    </div>
                                </nav>

                                <div className={menu_class}>
                                <ul className='NavMainUl'>
                                    <li className='NavMainLi'>
                                        <Link to={'/'}  className='NavMainA'>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='NavMainLi'>
                                        <Link to={'/Facilities'} className='NavMainA'>
                                            Facilities
                                        </Link>
                                    </li>
                                    <li className='NavMainLi'>
                                        <Link to={'/Rooms'} className='NavMainA'>
                                            Rooms
                                        </Link>
                                    </li>
                                    <li className='NavMainLi'>
                                        <Link to={'/ContactUs'} className='NavMainA'>
                                            Contact-us
                                        </Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        
                        </div>
                     
                        </div>
                    </div>
                </div>
                
            </div>
        </Styled>


    );
}

export default Header;