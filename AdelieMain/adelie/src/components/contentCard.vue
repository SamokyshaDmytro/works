<template>
  <div class="cardBox">
    <div class="innerCardBox">
    <div class="card"> 
      <div class="imgBox">
        <img :src="contentItem.image" :alt="contentItem.titleAlt" class="cardImage" />
        <div class="dateAuthorBox">
          <p class="cardDate">{{ contentItem.date }}</p>
          <p class="cardAuthor">{{ contentItem.author }}</p>
        </div>
      </div>
      <h3 class="cardTitle">{{ contentItem.title }}</h3>
      <div class="cardTextBox" v-if="contentItem.isMainTextBlog && !inSlider">
        <text-clamp class="cardContent" :text="contentItem.isMainTextBlog" :max-lines="3"/> 
      </div>
    </div>
</div>
  </div>
</template>

<script setup>
import ReadMoreButton from './UI/buttons/readMoreBlog.vue';
import TextClamp from 'vue3-text-clamp';

const props = defineProps({
  contentItem: {
    type: Object,
    required: true
  },
  inSlider: {
    type: Boolean,
    default: false
  }
});

</script>

<style scoped>

.cardBox{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.innerCardBox{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100%;
}
.card {
    max-width: 793px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding-top: 47px;
}

.cardImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: grayscale(85%);
    transition: filter 0.5s ease;
}

.imgBox {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: auto;
    width: 100%;
    height: 230px;
}

.card:hover .cardImage {
  filter: grayscale(0%);
}

.dateAuthorBox {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 278px;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px 10px 49px;
}

.cardTitle {
  color: #000;
  font-family: gilroyregular;
  font-size: 23px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;
  padding-top: 8px;
  padding-bottom: 19px;
}

.cardDate,
.cardAuthor {
  position: relative;
  color: #000;
  font-family: gilroylight;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
}

.cardDate::before {
  content: url('../assets/vectors/globalVectors/clock.svg');
  min-width: 18px;
  min-height: 18px;
  max-width: 18px;
  max-height: 18px;
  position: absolute;
  left: -28px;
  top: 3px;
}

.cardAuthor::before {
  content: url('../assets/vectors/globalVectors/admin.svg');
  min-width: 18px;
  min-height: 18px;
  max-width: 18px;
  max-height: 18px;
  position: absolute;
  left: -27px;
  top: 1px;
}
.cardTextBox {
  width: 100%;
  position: relative;
  padding-bottom: 13px;
}

.cardContent {
  color: #000;
  font-family: gilroylight;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;

}

/*Медіазапити*/

@media (min-width: 576px) { 
.imgBox {
  height: 330px;
}
}

@media (min-width: 768px) { 
.imgBox {
  height: 370px;
}
.card {
min-width: 100%;
max-width: 793px;
}
}

@media (min-width: 992px) { 
.imgBox {
  height: 400px;
}

}

@media (min-width: 1200px) { 
.imgBox {
  height: 420px;
}
.card {
min-width: auto;
max-width: 793px;
}
.cardTitle {
  font-size: 30px;
  padding-top: 8px;
}
.cardTextBox{
  max-height: 105px;
  margin-bottom: 16px;
}

.cardContent {
  padding-top: 13px;
  font-size: 20px;
  line-height: 35px;
}
.readMore {
    padding-top: 4px;
    font-size: 20px;

}
}
@media (min-width: 1400px) { 
.card{
    padding-top: 25px;
}

}
@media (min-width: 1920px) { 
.card{
    padding-top: 27px;
}
}
</style>
