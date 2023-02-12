import React from "react";
import '../ContactUsForm/ContactUsFormStyle.css';
import { BsArrowRight } from "react-icons/bs";


import styled from 'styled-components';
const Styled = styled.div `
@media (min-width: 1920px){
    .container{
        max-width:1516px;
        margin: 0 auto;
    }
}
@media (max-width: 1919px){

}
@media (max-width: 1650px){
  .contactText {
    display: flex;
    flex-direction: column;
    padding: 40px 0 100px 0;
    margin: 0 15px;
}
 .contacts {
     flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 500px;
  }
  .contacts p{
    font-size: 30px;
    line-height: 40px;
    padding-bottom: 28px;
  }
  .contBtn{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 40px;
  }
  .contBtn button{
    font-size: 30px;
    line-height: 40px;
  }
  #arrowRightContact{
    width: 40px;
    height: 40px;
    font-size: 40px;
  }
  #contactsTel {
    font-size: 30px;
    line-height: 49px;
  }
  #contactsMail{
    font-size: 30px;
    line-height: 40px;
  }
  .button{
    display: flex;
    justify-content: flex-end;
    padding-bottom: 150px;
  }
  .inputBox input{
    width:470px;
    height: 42px;
    font-size: 20px;
    padding: 5px 5px;
  }
  .inputBox label{
    font-size: 25px;
    line-height: 25px;
  }
  #msg{
    width: 470px;
    height: 230px;
    resize: none;
    font-size: 20px;
    padding: 5px;
  }
}
@media (max-width: 1400px){

 

}
@media (max-width: 1200px){
  .button{
    display: flex;
    justify-content: flex-end;
    padding-bottom: 350px;
  }
}
@media (max-width: 992px){
      .MainFormBox{
        flex-direction:column;
      }
      .form-Box{
        align-items:center;
      }
      .contactText {
        align-items: center
        
      }
      .contactText p {
        font-size: 20px;
        line-height: 30px;
        text-align: center;
    }
    .contactText{
      padding: 80px 0 80px 0;
    }

    .contacts {
       flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      max-width: 500px;
      padding-bottom:60px;
    }
    .contacts p{
      font-size: 30px;
      line-height: 40px;
      padding-bottom: 28px;
    }
    .contBtn{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 40px;
    }
    .contBtn button{
      font-size: 30px;
      line-height: 40px;
    }
    #arrowRightContact{
      width: 40px;
      height: 40px;
      font-size: 40px;
    }
    #contactsTel {
      font-size: 30px;
      line-height: 49px;
      padding-bottom:20px;
    }
    #contactsMail{
      font-size: 30px;
      line-height: 40px;
    }
    .button{
      display: flex;
      justify-content: flex-end;
      padding-bottom: 300px;
    }
  
  
}
@media (max-width: 768px){
  .contactText p {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
}
.contactText{
  padding: 80px 0 80px 0;
}

.contacts {
   flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 500px;
  padding-bottom:60px;
  margin: 0 5px;
}
.contacts p{
  font-size: 25px;
  line-height: 25px;
  padding-bottom: 28px;
}
.contBtn{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
}
.contBtn button{
  font-size: 25px;
  line-height: 25px;
}
#arrowRightContact{
  width: 25px;
  height: 25px;
  font-size: 25px;
}
#contactsTel {
  font-size: 25px;
  line-height: 25px;
}
#contactsMail{
  font-size: 25px;
  line-height: 25px;
}
.button{
  display: flex;
  justify-content: flex-end;
  padding-bottom: 250px;
}
.FormContact form{
  max-width:400px;
  align-items: center;
}
.inputBox label{
  font-size: 25px;
  line-height: 25px;
}
 
}
@media (max-width: 576px){
  .contactText p {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
}
.contactText{
  padding: 60px 0 60px 0;
}

.contacts {
  max-width: 350px;
  padding-bottom:60px;
  margin: 0 5px;
}
.contacts p{
  font-size: 20px;
  line-height: 20px;
  padding-bottom: 28px;
}
.contBtn{
  padding-bottom: 40px;
}
.contBtn button{
  font-size: 20px;
  line-height: 20px;
}
#arrowRightContact{
  width: 20px;
  height: 20px;
  font-size: 20px;
}
#contactsTel {
  font-size: 20px;
  line-height: 20px;
}
#contactsMail{
  font-size: 20px;
  line-height: 20px;
}
.button{
  padding-bottom: 200px;
}
.inputBox label{
  font-size: 25px;
  line-height: 25px;
}
  .inputBox input{
    width:350px;
    height: 48px;
    font-size: 20px;
    padding: 5px 5px;
  }
  .inputBox label{
    font-size: 20px;
    line-height: 20px;
  }
  #msg{
    width: 350px;
    height: 200px;
    resize: none;
    font-size: 20px;
    padding: 5px;
  }
#contactFormBtn{
  width: 145px;
  height: 50px;
  font-size: 20px;
  line-height: 20px;
}
}
@media (max-width: 425px){
  .contactText p {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
}
.contactText{
  padding: 60px 0 60px 0;
}

.contacts {
  max-width: 270px;
  padding-bottom:60px;
  margin: 0 5px;
}
.contacts p{
  font-size: 20px;
  line-height: 20px;
  padding-bottom: 28px;
}
.contBtn{
  padding-bottom: 40px;
}
.contBtn button{
  font-size: 20px;
  line-height: 20px;
}
#arrowRightContact{
  width: 20px;
  height: 20px;
  font-size: 20px;
}
#contactsTel {
  font-size: 20px;
  line-height: 20px;
}
#contactsMail{
  font-size: 20px;
  line-height: 20px;
}
.button{
  padding-bottom: 100px;
}
.inputBox label{
  font-size: 20px;
  line-height: 20px;
}
  .inputBox input{
    width:280px;
    height: 30px;
    font-size: 20px;
    padding: 2px 2px;
  }

#contactFormBtn{
  width: 145px;
    height: 50px;
  font-size: 20px;
    line-height: 20px;
}
.contactText h3{
  font-size: calc(22px + 38 * (100vw / 1920));
  line-height: 32px;
  padding-bottom: 30px;
  text-align: center;
}
.FormContact {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  margin:0;
}
}
@media (max-width: 375px){

}
@media (max-width: 320px){

.inputBox{
  align-items: center
}
.inputBox input{
  width: 270px;
  height: 38px;
  margin-top: 8px;
  margin-bottom: 30px;
  font-size: 20px;
  padding: 5px;
}
#msg{
  width: 270px;
  height: 200px;
  resize: none;
  font-size: 20px;
  padding: 5px;
}

}
`
  const ContactUsForm = () => {

    return(
    <Styled> 

      <section className="ContactUsForm">
        <div className="container">
          <div className="form-Box">
            <div className="contactText">
              <h3>WE ARE HERE FOR YOU</h3>
              <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
              please forward it to our support desk and we will get back to you as soon as possible.</p>
            </div>
            <div className="MainFormBox">
              <div className="contacts">
                <p>497 Evergreen Rd. Roseville, 
                  CA 95673</p>
                <div className="contBtn">
                  <button type="button">
                    Viev map
                  </button>
                  <BsArrowRight id="arrowRightContact"/>
                </div>
                <a id="contactsTel" href="tel:+44345678903">Phone: +44 345 678 903</a>
                <a id="contactsMail" href="mailto:luxury_hotels@gmail.com">Email: luxury_hotels@gmail.com</a>
              </div>
              <div className="FormContact">

              <form action="" method=""> 
               {/* POST */}
                <div className="inputBox">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="user_name" maxLength={20} required/>
                </div>

                <div className="inputBox">
                  <label for="mail">Email Address</label>
                  <input   type="email" id="mail" name="user_email" maxLength={20} required/>
                </div>

                <div className="inputBox">
                  <label for="msg">Message</label>
                  <textarea placeholder="" id="msg" name="user_message" maxLength={1500} required></textarea>
                </div>

                <div class="button">
                  <button id="contactFormBtn" type="submit">Submit</button>
                </div>
              </form>

              </div>
            </div>
          </div>
        </div>
      </section>
 
    </Styled> 
    )
  }

  export default ContactUsForm ;
