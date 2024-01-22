<script setup>
import HomeAccordion from '../components/homeAccordion.vue'
import circularSlider from '../components/circularSlider.vue'
import ContactForm from '../components/contactForm.vue'
import { ref, onMounted, onUnmounted } from "vue";

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
<div class="container">
<div class="homeBox">
    <div class="homeMainTitle">
        <h1 class="flexForh1">
            <span dividerH1>              
                <span class="h1Adelie">
                    Adelie
                </span>
                <span class="h1Commerce">
                    E-commerce
                </span>
            </span>                 
            <span>
            Solutions
            </span>
        </h1>
        <h3>
            Empower Your Online Business with Expert E-commerce Solutions
        </h3>
    </div>

    <div class="homeBanner">
      <span class="bannerMainLine"></span>
        <div class="homeBannerTextBox">
            <h2>
                Unlock the Power of 
                <span class="dashedWord">Optimal</span> <span class="dashedWord">Solutions</span> 
                for Your Business with Us!
            </h2>                    
            <p class="BannerText">
                We specialize in delivering top-notch e-commerce development solutions tailored to meet your unique business needs. With our extensive experience and deep understanding of the ever-evolving online marketplace, we are committed to helping you achieve unprecedented success.
            </p>
        </div>
        <div class="homeBannerImageBox">
                <img class="bannerBackground" src="./../assets/vectors/bannerBackground.svg" alt="">
                <img class="bannerPeoples" src="./../assets/vectors/homeFirstBanner.svg" alt="">
        </div>
        <span class="homeMidLine"></span>
    </div>
    <HomeAccordion v-if="screenWidth <= 1200"/>
    <circularSlider v-else />
    <div class="homeBanner homeBannerPadding">
    <span class="bannerMainLine2"></span>      
        <div class="homeBannerTextBox">
            <h2>
                <span class="dashedWord">Who</span> <span class="dashedWord">will</span> will do it for you?
            </h2>                    
            <p class="BannerText">
                Our team of skilled developers, designers, and strategists work collaboratively to create user-friendly and visually stunning e-commerce platforms that captivate your customers and drive conversions. Leveraging the latest technologies and industry best practices, we ensure seamless integration, robust security, and optimal performance.
            </p>
        </div>
        <div class="homeBannerImageBox">
                <img class="bannerBackground" src="./../assets/vectors/bannerBackground.svg" alt="">
                <img class=" bannerManWithImages" src="./../assets/vectors/homeSecondBanner.svg" alt="">
        </div>
    </div>
    <ContactForm/>
    </div>
</div>
</template>

<style scoped>
.homeBox{
    padding-bottom: 49px;
}
.bannerMainLine{
    background-image: url('./../assets/vectors/globalVectors/mainBannerLine.svg');
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    width: 261px;
    height: 82px;
    top: 0px;
    right: 50%;
    transform: translateX(50%);
}
    .bannerMainLine2{
    background-image: url('./../assets/vectors/globalVectors/mainBannerLine2.svg');
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    width: 328px;
    height: 148px;
    bottom: 730px;
    transform: rotate(-169.496deg);
    right: 50%;
    transform: translateX(50%);  
    }
 .homeMainTitle{
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 22px;
 }
 .flexForh1{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;
    min-width: 355px;
    min-height: 81px;
    max-height: 81px;
 }
 .dividerH1{
    display: flex;
 }
h1{
    font-size: 38px;
    text-align: center;
}
h2{
    color: #000;
    font-size: 35px;
    font-style: normal;
    line-height: 55px;
}
h3{
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    max-height: 169px;
    min-height: 90px;
}
.h1Adelie{
    color: #4CF049;
}
.h1Commerce{
    color: #000;
}
.homeBanner{
    padding-top: 89px;
    display: flex;
    flex-direction: column;
    gap: 33px;
    min-width: 100%;
    justify-content: space-between;
    position: relative;
}
 .homeBannerPadding{
padding-top: 194px;
 }
.homeBannerTextBox{
    min-height: 169px;
    max-width: 709px;
    display: flex;
    flex-direction: column;
    gap: 12px;

}
.BannerText{
    color: #000;
    font-family: gilroylight;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 27px;


}

.dashedWord{
    display: inline-block;
    position: relative;
}
.dashedWord::before {
    content: "";
    position: absolute;
    bottom: 7px;
    left: 0;
    width: 100%;
    height: 15px; 
    background-color: #4CF049; 
    z-index: -1;
}




.homeBannerImageBox{
    padding-top: 33px;
    min-width: 355px;
    display: flex;
    min-height: 311px;
    justify-content: center;
    align-items: center;
    position: relative;
}

.bannerBackground{
    position: absolute;
    min-width: 353px;
    min-height: 348px;
    object-fit: contain; 
    max-height: 100%;
    max-width: 100%;
    z-index: 1;
}
.bannerPeoples{
    z-index: 2;
    min-width: 355px;
    min-height: 232px;
    max-height: 100%;
    max-width: 100%;
}
.bannerManWithImages{
    z-index: 2;
    min-width: 342px;
    min-height: 250px;
    max-height: 100%;
    max-width: 100%;

}



/*Медіазапити*/

@media (min-width: 576px) { 
h1{
    font-size: 42px;
}
h2{
    text-align: center;
}
.homeBannerImageBox{
    min-width: 400px;
}
h3{
    font-size: 22px;
}
    .bannerMainLine2{

    width: 328px;
    height: 269px;
    bottom: 600px;
    }
}

@media (min-width: 768px) { 
h1{
    font-size: 46px;
}
.bannerMainLine{
    width: 368px;
    height: 110px;
    top:-20px;
}
    .bannerMainLine2{

    width: 328px;
    height: 218px;
    bottom: 600px;
    }
}

@media (min-width: 992px) { 
h1{
    font-size: 50px;
}
h2{
    font-size: 40px;
    text-align: unset;
}
.flexForh1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;
    min-width: 355px;
}
.homeMainTitle {
    padding-top: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}
.bannerMainLine{
    width: 568px;
    height: 180px;
    top: -30px;
}
    .bannerMainLine2{

    width: 428px;
    height: 318px;
    bottom: 400px;
    }
.firstBannerText{
    font-size: 20px;
    line-height: 35px;
}
.homeBannerTextBox{
    padding: 60px 0 80px 0;
    display: flex;
    flex-direction: column;
    gap: 62px;
}
.homeBanner{
    flex-direction: row;
}
.bannerPeoples{
    padding: 65px 0;
}
.homeBannerImageBox{
    min-width: 400px;
}
 .flexForh1{
    flex-direction: row;
 }
}

@media (min-width: 1200px) { 
h1{
    font-size: 58px;
}
h2{
    font-size: 50px;
    line-height: 70px
}
h3{
    font-size: 20px;
}
.BannerText{
    line-height: 35px;
}
.BannerText{

    font-size: 20px;
    line-height: 35px;
}
.bannerMainLine{
    width: 668px;
    height: 190px;
    top: -50px;
}
    .bannerMainLine2{

    width: 606px;
    height: 274px;
    bottom: 300px;
    left: -150px;
    right: auto;
    transform: translateX(0);  
    }
}

@media (min-width: 1400px) { 
h1{
    font-size: 70px;
}
h3{
    font-size: 23px;
}
.bannerBackground {
    min-width: 519px;
    min-height: 511px;
}
h3{
    font-size: 25px;
    line-height: 35px;
}

 .homeBannerPadding{
padding-top: 140px;
 }
.bannerMainLine{
    width: 668px;
    height: 210px;
    top: -30px;
}
    .bannerMainLine2{

    width: 606px;
    height: 274px;
    bottom: 300px;
    left: -300px;
    right: auto;
    transform: translateX(0);  
    }
    .homeMidLine{
          background-image: url('./../assets/vectors/globalVectors/homeMidLine.svg');
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    width: 502px;
    height: 495px;
    top: 591px;

    right: 223px;
  
    }
}
 </style>