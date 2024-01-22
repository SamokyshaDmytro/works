<script setup>
import Header from "./layouts/header.vue";
import Footer from "./layouts/footer.vue";
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Preloader from './components/UI/preloader.vue'


const isLoading = ref(false);
const router = useRouter();

router.beforeEach(() => {
  isLoading.value = true; 
});

router.afterEach(() => {
  isLoading.value = false;
});

</script>

<template>
  <div class="wrap">

    <div class="forPage">
    
      <span class="topManyLines"></span>
      <span class="topCircle"></span>

      <span class="h1linesLeft"></span>
      <span class="h1linesRight"></span>
      <span class="threeGreenLines"></span>
      <span class="midGreenCircle"></span>
      <span class="midGreenCircleRightInMaxScreen"></span>
      <!--Plus-->
      <div class="forPluses">
        <span v-for="i in 30" :key="i" :class="`mainPlus mainPlus${i}`"></span>
      </div>
      <!--Plus-->

      <Header />

    <router-view class="router"></router-view>
    <div class="vectorBottomRight"></div>
    <div class="vectorFooterManyLines"></div>
    </div>
    <Footer />
  </div>
</template>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  line-height: 1.8em;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: #fff;
  margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
footer {
  flex-shrink: 0;
  
}
.router{
  position:relative;
  z-index: 2;
}
/*Шрифти*/
@font-face {
  font-family: "gilroylight"; /*300*/
  src: url("./fonts/gilroy-light-webfont.woff2") format("woff2"),
    url("./fonts/gilroy-light-webfont.woff") format("woff"),
    url("./fonts/gilroy-light-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "gilroymedium"; /*500*/
  src: url("./fonts/gilroy-medium-webfont.woff2") format("woff2"),
    url("./fonts/gilroy-medium-webfont.woff") format("woff"),
    url("./fonts/gilroy-medium-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "gilroyregular"; /*400*/
  src: url("./fonts/gilroy-regular-webfont.woff2") format("woff2"),
    url("./fonts/gilroy-regular-webfont.woff") format("woff"),
    url("./fonts/gilroy-regular-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
.wrap {
  position: relative;
  overflow: hidden;
  flex: 1;
}
.forPage {
  min-height: 100vh;
}
h1 {
  font-family: gilroyregular;
  font-weight: 400;
}
h2 {
  font-family: gilroyregular;
  font-weight: 300;
  color: #000;
  font-size: 35px;
  font-style: normal;
  line-height: 55px;
}
h3 {
  font-family: gilroylight;
  font-weight: 300;
}
img {
  max-width: 100%;
  height: auto;
}
ul {
  margin: 0;
  padding: 0;
}
button {
  cursor: pointer;
}
label {
  margin: 0;
  padding: 0;
}
.container {
  max-width: 355px;
  margin: 0 auto;
  height: 100%;
}
.container:after {
  display: table;
}

/* VECTORS */
.h1linesLeft {
  display: none;
  background-image: url("./assets/vectors/globalVectors/h1linesLeft.svg");
  position: absolute;
  width: 190px;
  height: 182px;
  top: 144px;
  left: 272px;
}
.h1linesRight {
  display: none;
  background-image: url("./assets/vectors/globalVectors/h1linesRight.svg");
  position: absolute;
  width: 177px;
  height: 164px;
  top: 153px;
  right: 287px;
}
.threeGreenLines{
  position: absolute;
  width: 111px;
  height: 5px;
  top: 769px;
  right: 11px;
  background-color: rgba(76, 240, 73, 1);
  z-index: -1;
}

.threeGreenLines::before{
  content: '';
  position: absolute;
  width: 111px;
  height: 7px;
  bottom: 14px;
  right: 56px;
  background-color: rgba(76, 240, 73, 1);
}
.threeGreenLines::after{
  content: '';
  position: absolute;
  width: 111px;
  height: 7px;
  top: 14px;
  right: 23px;
  background-color: rgba(76, 240, 73, 1);
}
.midGreenCircle{
  position: absolute;
  width: 24px;
  height: 24px;
  border: 5px solid rgba(76, 240, 73, 1);
  border-radius: 50%;
  top: 1090px;
  left: 52px;
  z-index: -1;
}
.midGreenCircleRightInMaxScreen{
  display: none;
}
.forPluses {
  position: absolute;
  top: 67px;
  left: 18px;
  right: 13px;
  bottom: 908px;
  z-index: -1;
}
.mainPlus {
  background-image: url("./assets/vectors/globalVectors/mainPlus.svg");
  position: absolute;
  height: 8px;
  width: 8px;
}

.mainPlus1 {
  top: 0;
  right: 154px;
}
.mainPlus2 {
  top: 194px;
  right: 0px;
}
.mainPlus3 {
  top: 261px;
  left: 77px;
}

.mainPlus4 {
  top: 728px;
  left: 32px;
}
.mainPlus5 {
  top: 1043px;
  right: 25px;
}

.mainPlus6 {
  top: 1454px;
  left: 34px;
}
.mainPlus7 {
  top: 1741px;
  right: 97px;
}

.mainPlus8 {
  top: 1995px;
  right: 149px;
}
.mainPlus9 {
  top: 2111px;
  left: 17px;
}

.mainPlus10 {
  top: 2090px;
  left: 0;
}
.mainPlus11 {
  top: 2540px;
  right: 98px;
}
.mainPlus12 {
  top: 2849px;
  left: 15px;
}
.mainPlus13 {
  top: 2897px;
  right: 24px;
}

.mainPlus14,
.mainPlus15,
.mainPlus16,
.mainPlus17,
.mainPlus18,
.mainPlus19,
.mainPlus20,
.mainPlus21,
.mainPlus22,
.mainPlus23,
.mainPlus24,
.mainPlus25,
.mainPlus26,
.mainPlus27,
.mainPlus28,
.mainPlus29,
.mainPlus30,
.mainPlus31 {
  display: none;
}

.topManyLines {
  background-image: url("./assets/vectors/globalVectors/topManyLines.svg");
  background-size: cover;
  background-position: center;
  position: absolute;
  min-width: 199px;
  min-height: 109px;
  max-width: 805px;
  max-height: 1064px;
  top: -34px;
  left: -100px;
  transform: rotate(-9.87deg);
}
.topCircle {
  display: none;
  background-image: url("./assets/vectors/globalVectors/topCircle.svg");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  position: absolute;
  min-width: 215px;
  min-height: 215px;
  max-width: 215px;
  max-height: 215px;
  right: -26px;
  top: -67px;
}

.vectorFooterManyLines {
  background-image: url("./assets/vectors/globalVectors/VectorBottomRightManyLines.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 954px;
  max-width: 1148px;
  min-height: 666px;
  max-height: 801px;
  z-index: -1;
  position: absolute;
  bottom: -50px;
  right: -494px;
  transform: rotate(-24.387deg);
}

.vectorFooterManyLines::before {
  content: "";
  position: absolute;
  background-image: url("./assets/vectors/globalVectors/plus.svg");
  width: 8px;
  height: 8px;
  top: 173px;
  left: 305px;
}
.vectorBottomRight {
  background-image: url("./assets/vectors/globalVectors/VectorBottomRight.svg");
  background-size: cover;
  background-position: center;
  min-width: 331px;
  min-height: 395px;
  z-index: -1;
  position: absolute;
  bottom: 79px;
  right: -18px;
}

/*Медіазапити*/

@media (min-width: 576px) {
  .container {
    max-width: 500px;
  }
.threeGreenLines{
  width: 111px;
  height: 5px;
  top: 736px;
  right: 96px;
}
  .vectorFooterManyLines {
    min-width: 954px;
    max-width: 1148px;
    min-height: 666px;
    max-height: 801px;
    bottom: -50px;
    right: -494px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
  .topManyLines {
    min-width: 220px;
    min-height: 150px;
    left: -144px;
    top: -33px;
  }
.threeGreenLines{
  width: 111px;
  height: 5px;
  top: 636px;
  right: 96px;
}

  .vectorFooterManyLines {
    min-width: 954px;
    min-height: 666px;
    bottom: -50px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 860px;
  }
  .vectorFooterManyLines {
    min-width: 1148px;
  }
  .vectorBottomRight {
    min-width: 600px;
    min-height: 800px;
    bottom: -81px;
    right: -28px;
  }
  .topManyLines {
    left: -144px;
    top: -33px;
  }
.threeGreenLines{
  width: 111px;
  height: 5px;
  top: 950px;
  right: 96px;
}

  .forPluses {
    position: absolute;
    top: 56px;
    left: 50px;
    right: 52px;
    bottom: 341px;
    z-index: -1;
  }
  .mainPlus1 {
    top: 332px;
    right: auto;
    left: 355px;
  }
  .mainPlus2 {
    top: 317px;
    right: 262px;
  }
  .mainPlus3 {
    top: 377px;
    left: auto;
    right: 870px;
  }
  .mainPlus4 {
    top: 68px;
    left: auto;
    right: 829px;
  }
  .mainPlus5 {
    top: 560px;
    right: auto;
    left: 121px;
  }
  .mainPlus6 {
    top: 618px;
    left: 892px;
  }
  .mainPlus7 {
    top: 754px;
    right: 227px;
  }
  .mainPlus8 {
    top: 421px;
    right: 29px;
  }
  .mainPlus9 {
    top: 0;
    left: auto;
    right: 59px;
  }
  .mainPlus10 {
    top: 0;
    left: 568px;
  }
  .mainPlus11 {
    top: 294px;
    right: 8px;
  }
  .mainPlus12 {
    top: 954px;
    left: 404px;
  }
  .mainPlus13 {
    top: 1204px;
    right: auto;
    left: 0;
  }

  .mainPlus14,
  .mainPlus15,
  .mainPlus16,
  .mainPlus17,
  .mainPlus18,
  .mainPlus19,
  .mainPlus20,
  .mainPlus21,
  .mainPlus22,
  .mainPlus23,
  .mainPlus24,
  .mainPlus25,
  .mainPlus26,
  .mainPlus27,
  .mainPlus28,
  .mainPlus29,
  .mainPlus30,
  .mainPlus31 {
    display: block;
  }

  .mainPlus14 {
    top: 950px;
    right: 556px;
  }
  .mainPlus15 {
    top: 724px;
    right: 59px;
  }
  .mainPlus16 {
    top: 1314px;
    right: 51px;
  }
  .mainPlus17 {
    top: 1540px;
    left: 888px;
  }
  .mainPlus18 {
    top: 1565px;
    left: 214px;
  }
  .mainPlus19 {
    top: 873px;
    left: 154px;
  }
  .mainPlus20 {
    top: 615px;
    left: 560px;
  }
  .mainPlus21 {
    top: 1776px;
    right: 825px;
  }
  .mainPlus22 {
    top: 2032px;
    right: 67px;
  }
  .mainPlus23 {
    top: 2153px;
    left: 814px;
  }
  .mainPlus24 {
    top: 2015px;
    left: 26px;
  }
  .mainPlus25 {
    top: 2622px;
    left: 59px;
  }
  .mainPlus26 {
    top: 2878px;
    left: 730px;
  }
  .mainPlus27 {
    top: 2340px;
    right: 714px;
  }
  .mainPlus28 {
    top: 2205px;
    left: 353px;
  }
  .mainPlus29 {
    top: 1602px;
    right: 320px;
  }
  .mainPlus30 {
    top: 1690px;
    right: 0;
  }
  .mainPlus31 {
    top: 2332px;
    left: 698px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1100px;
  }
  .vectorBottomRight {
    min-width: 719px;
    min-height: 864px;
    bottom: -81px;
    right: -28px;
  }
  .topManyLines {
    min-width: 400px;
    min-height: 209px;
    left: -165px;
    top: -33px;
  }
  .topCircle {
    display: block;
    min-width: 180px;
    min-height: 180px;
    max-width: 215px;
    max-height: 215px;
    right: -26px;
    top: -67px;
  }
  .h1linesLeft {
    display: block;
    left: 20px;
  }
  .h1linesRight {
    display: block;
    right: 50px;
  }
  .threeGreenLines{
  width: 145px;
  height: 7px;
  top: 1036px;
  right: 96px;
}
.threeGreenLines::before{
  width: 145px;
  height: 10px;
  bottom: 14px;
  right: 56px;
}
.threeGreenLines::after{
  width: 145px;
  height: 10px;
  top: 14px;
  right: 23px;
}
.midGreenCircle{
  width: 41px;
  height: 41px;
  border: 10px solid rgba(76, 240, 73, 1);
  top: 969px;
  left: 144px;
  z-index: -1;
}
}

@media (min-width: 1400px) {
  .container {
    max-width: 1300px;
  }
  .h1linesLeft {
    display: block;
    left: 50px;
  }
  .h1linesRight {
    display: block;
    right: 50px;
  }

  .topManyLines {
    min-width: 450px;
    min-height: 259px;
    left: -165px;
    top: -33px;
  }
  .topCircle {
    display: block;
    min-width: 215px;
    min-height: 215px;
    max-width: 215px;
    max-height: 215px;
    right: -26px;
    top: -67px;
  }
  .midGreenCircle{

  border: 10px solid rgba(76, 240, 73, 1);
  top: 2169px;
  left: 14px;
}
.midGreenCircleRightInMaxScreen{
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  border: 5px solid rgba(76, 240, 73, 1);
  top: 1660px;
  right: 607px;
  border-radius: 50%;
}
}
@media (min-width: 1600px) {
  .vectorBottomRight {
    min-width: 850px;
    min-height: 1064px;
    max-width: 850px;
    max-height: 1064px;
    bottom: -81px;
    right: -28px;
  }
  .vectorFooterManyLines {
    min-width: 1148px;
    max-width: 1148px;
    min-height: 801px;
    max-height: 801px;
    bottom: -159px;
    right: -268px;
  }
    .midGreenCircle{

  border: 10px solid rgba(76, 240, 73, 1);
  top: 2169px;
  left: 30px;
}
}
@media (min-width: 1920px) {
  .h1linesLeft {
    display: block;
    top: 144px;
    left: 272px;
  }
  .h1linesRight {
    display: block;
    top: 153px;
    right: 287px;
  }
  .topManyLines {
    min-width: 562px;
    min-height: 309px;
    left: -165px;
    top: -33px;
  }
  .vectorBottomRight {
    min-width: 850px;
    min-height: 1064px;
    max-width: 850px;
    max-height: 1064px;
    bottom: -81px;
    right: -28px;
  }
  .vectorFooterManyLines {
    min-width: 1148px;
    max-width: 1148px;
    min-height: 801px;
    max-height: 801px;
    bottom: -59px;
    right: -268px;
  }
    .midGreenCircle{
  width: 41px;
  height: 41px;
  border: 10px solid rgba(76, 240, 73, 1);
  top: 2269px;
  left: 144px;
}
}
@media (min-width: 1921px) {
  .vectorBottomRight {
    min-width: 850px;
    min-height: 1064px;
    max-width: 850px;
    max-height: 1064px;
    bottom: -81px;
    right: -28px;
  }
  .vectorFooterManyLines {
    min-width: 1348px;
    max-width: 1348px;
    min-height: 1001px;
    max-height: 1001px;
    bottom: -359px;
    right: -268px;
  }
  .midGreenCircleRightInMaxScreen{
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  border: 5px solid rgba(76, 240, 73, 1);
  top: 1600px;
  right: 607px;
  border-radius: 50%;
}
}
</style>
