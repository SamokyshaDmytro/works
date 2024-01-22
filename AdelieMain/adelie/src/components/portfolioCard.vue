<template>
  <div class="portfolioCard">
    <div class="portfolioTitleBox">
        <h3 class="portfolioTitle">{{ portfolioCard.title }}</h3>
    </div>
    <div class="portfolioSubTitleBox">
        <p class="portfolioSubTitle">{{ portfolioCard.subTitle }}</p>
    </div>
    <div class="portfolioImgFlexBox">

        <div class="portfolioImgBox">
            <img class="portfolioImg" :src="portfolioCard.image"  @load="imageLoaded = true">
        </div>
        <div class="portfolioImgBorders portfolioImgBorderFirst"></div>
        <div class="portfolioImgBorders portfolioImgBorderSecond"></div>        
    </div>
    <div class="portfolioContentBox">
        <p class="portfolioContent">{{ portfolioCard.textUnderImg }}</p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
  portfolioCard: {
    type: Object,
    required: true
  }
});
const imageLoaded = ref(false);
</script>


<style scoped>

.portfolioCard {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 355px;
    max-height: 480px;  
    min-width: 355px;
}
.portfolioCard::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #000;    
    opacity: 0.1;
    background: #FFF;  
}
.portfolioTitleBox{
    padding: 19px 15px 7px 15px;
}
.portfolioTitle {
    position: relative;
    font: 300 25px/35px gilroyregular;
    letter-spacing: 2.5px;
    width: fit-content;
}
.portfolioTitle::before{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15px; 
  background-color: #4CF049; 
  z-index: -1;
  transform: translateY(0); 
}
.portfolioSubTitleBox{
    padding: 0 16px 22px 16px;
}
.portfolioSubTitle {
    font: 300 17px/35px gilroyregular;
    color: #878787;
}
.portfolioImgFlexBox{
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
}
.portfolioImgBorders{
    position: absolute;
    width: 276px;
    height: 241px;
    border: 1px solid #000;
    z-index: -1;
}
.portfolioImgBorderFirst{
    top: -17px;
    left: 17px;
}
.portfolioImgBorderSecond{
    bottom: -17px;
    right: 17px;
}

.portfolioImgBox{
    position: relative;
    min-width: 276px;
    min-height: 241px;
    max-width: 276px;
    max-height: 241px;
    overflow: hidden;
    background: rgba(237, 237, 237, 1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
    
}

.portfolioImage {
    width: auto;
    height: 100%;
}
.portfolioContent {
    font: 300 18px/27px gilroylight;
    padding: 31px 23px 12px 16px;
}

@media (min-width: 992px){
.portfolioCard {
    max-width: 412px;
    max-height: 520px;  
        min-width: 412px;
}
}

@media (min-width: 1400px){
.portfolioCard {
    max-width: 412px;
    max-height: 565px;  
}
.portfolioImgBox{

    min-width: 320px;
    min-height: 280px;
    max-width: 320px;
    max-height: 280px;
}
.portfolioImgBorders{
    width: 320px;
    height: 280px;
}
.portfolioContent {
    font: 300 20px/35px gilroylight;
    padding: 31px 27px 28px 19px;
}
}
</style>