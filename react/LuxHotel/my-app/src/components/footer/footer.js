import React from 'react';
import '../footer/footerStyle.css';
import { BsInstagram, BsTwitter  } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';


const Styled = styled.div `
@media (min-width: 1920px){

}
@media (max-width: 1919px){
    .footerBox{
        padding: 60px 80px 61px 80px;
    }
}  
@media (max-width: 1650px){
  .footerIcon {
        padding-right: 15px;
    }
} 

@media (max-width: 1246px){
    .footerBox{
        padding: 60px 39px 71px 41px;    
    }
    .SubscrEmail {
        width: 180px;
    }
    .footerIcon {
        padding-right: 15px;
    }
    
}

@media (max-width: 1046px){
    .footerBox{
        padding: 40px 10px 40px 10px; 
        
    }
    .SubscrEmail {
        width: 130px;
    }
  
    .footerFlex2 ul li {
        padding-bottom: 15px;
    }
    .FooterInnerAgressFlex {
        padding-top: 15px;
    }
    .SubscrEmail {
        height: 20px;
        padding: 10px 5px 10px 5px;
        line-height: 18px;
    }
    .FooterSubmit {
        line-height: 18px;
        width: 50px;
        height: 44px;
    }
    .SubscForm {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

}
@media (max-width: 768px){
    .footerBox {
        padding: 50px 50px 50px 50px;
        min-height: 100%;
        max-height: 100%;
        display: flex;
        flex-direction:column;
    }
    .SubscrEmail {
        width: 100%;
    }
    .FooForLogo {
        width: 50%;
        padding-bottom: 10px;
    }
}
@media (max-width: 576px){

}
@media (max-width: 425px){

}
@media (max-width: 375px){
    .footerBox {
        padding: 40px 10px 60px 10px;
    }
}
@media (max-width: 320px){

}

`
// Медиа запросы 

function Footer(){
    return(
        <Styled>

            
           <footer>
            
            <div className='triangles'>
                <div className='triangle1'></div>
                <div className='triangle2'></div>
            </div>
            <div className='containerFooter'>
                <div className='footerBox'>
                        <div className='footerFlex'>
                            <ul className='footerLogoAndAdress'>
                                <li>
                                    <a className='FooForLogo'>
                                        <p className='FooForLogoP1'>LUXURY</p>
                                        <p className='FooForLogoP2'>HOTELS</p>
                                    </a>
                                    <ul className='FooterInnerAgressFlex'>
                                        <li>
                                            <p className='adress'>
                                                497 Evergreen Rd. Roseville, CA 95673
                                            </p>
                                        </li>
                                        <li>
                                            <a>
                                                +44 345 678 903
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                luxury_hotels@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a></a>
                                </li>
                                <li>
                                    <a></a>
                                </li>
                            </ul>
                        </div>
                        <div className='footerFlex footerFlex2'>
                        <ul>
                                <li>
                                    <a>About Us</a>
                                </li>
                                <li>
                                    <a>Contact</a>
                                </li>
                                <li>
                                    <a>Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div className='footerFlex footerFlex2'>
                            <ul>
                                <li className='FooterIconsAndLinkFlex'>
                                    <a>                                      
                                        <GrFacebookOption className='GrFacebookOption footerIcon'/>
                                        Facebook</a>
                                </li>
                                <li>
                                    <a>
                                        <BsTwitter className='BsTwitter footerIcon'/>
                                        Twitter</a>
                                </li>
                                <li>
                                    <a>
                                        <BsInstagram className='BsInstagram footerIcon'/>
                                        Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div className='footerFlex'>
                            <ul>
                                <p className='Subscr'>Subscribe to our newsletter</p>
                                <Formik
                                        initialValues={{
                                            email: ''
                                        }}
                                        onSubmit={async (values) => {
                                            await new Promise((r) => setTimeout(r, 500));
                                            alert(JSON.stringify(values, null, 2));
                                        }}
                                        >
                                        <Form className='SubscForm'>
                                            <Field
                                            className='SubscrEmail' 
                                            id="email"
                                            name="email"
                                            max
                                            placeholder="Email Address"
                                            type="email" size="30" required/>
                                            
                                            <button className='FooterSubmit' type="submit">OK</button>
                                        </Form>
                                </Formik>
                            </ul>
                        </div>
                </div>
            </div> 
           </footer>
          
        </Styled>
    );
}

export default Footer;

