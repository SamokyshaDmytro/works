<template>
  <div class="blogSlider">
    <div class="blogSliderButBox">
  <div class="sliderButton sliderButtonPrevious" @click="showPreviousBlogs" :class="{ 'disabled': !hasPreviousBlogs }">
    {{ showAdditionalText ? 'Previous Article' : 'Previous' }}
  </div>
  <div class="sliderButton sliderButtonNext" @click="showNextBlogs" :class="{ 'disabled': !hasNextBlogs }">
    {{ showAdditionalText ? 'Next Article' : 'Next' }}
  </div>
    </div>
    <div class="blogSliderTitleBox">
      <h3 class="blogSliderTitle">
        <span class="blogFirstWord">Recommended </span> materials
      </h3>
      <div class="sliderBtnsForLargeScreen">
        <div class="sliderButton sliderButtonLeft sliderBtnLgScr" @click="showPreviousBlogs" :class="{ 'disabled': !hasPreviousBlogs }"></div>
        <div class="sliderButton sliderButtonRight sliderBtnLgScr" @click="showNextBlogs" :class="{ 'disabled': !hasNextBlogs }"></div>
      </div>
    </div>
    <div class="blogCardContainer">
      <div class="blogCards">
        <div class="blogCardWrapper" v-for="blog in displayedBlogs" :key="blog.id">
          <BlogCard inSlider :contentItem="blog" />
          <ReadMoreButton :to="`/blog/${blog.id}`" label="Read More" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BlogCard from './contentCard.vue';
import ReadMoreButton from '/src/components/UI/buttons/readMoreBlog.vue';

const props = defineProps({
  blogs: Array,
  activeBlog: Object,
});

const itemsPerPage = 2;
const activeIndex = ref(0);

const setActiveIndex = () => {
  activeIndex.value = props.blogs.findIndex(blog => blog.id === props.activeBlog.id);
};

const displayedBlogs = computed(() => {
  const startIndex = activeIndex.value - (activeIndex.value % itemsPerPage);
  const endIndex = Math.min(startIndex + itemsPerPage - 1, props.blogs.length - 1);

  const filteredBlogs = props.blogs.filter(blog => blog.id !== props.activeBlog.id);
  return filteredBlogs.slice(startIndex, endIndex + 1);
});

const hasPreviousBlogs = computed(() => {
  if (props.activeBlog) {
    return activeIndex.value >= itemsPerPage;
  }
  return false;
});

const hasNextBlogs = computed(() => {
  if (props.activeBlog) {
    return activeIndex.value <= props.blogs.length - itemsPerPage * 2;
  }
  return false;
});

const showPreviousBlogs = () => {
  if (hasPreviousBlogs.value) {
    if (activeIndex.value === 0) {
      activeIndex.value = props.blogs.length - 2;
    } else {
      activeIndex.value -= itemsPerPage;
    }
  }
};

const showNextBlogs = () => {
  if (hasNextBlogs.value) {
    activeIndex.value = (activeIndex.value + itemsPerPage) % props.blogs.length;
  }
};
const showAdditionalText = ref(window.innerWidth >= 1200);

window.addEventListener('resize', () => {
  showAdditionalText.value = window.innerWidth >= 1200;
});

</script>

<style scoped>
.blogSlider {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 83px;
}

.blogSliderButBox {
  display: flex;
  flex-direction: row;
  min-width: 100%;
  justify-content: space-between;
  max-width: 255px;
}

.sliderButton {
  display: inline-flex;
  position: relative;
  padding-top: 4px;
  color: #000;
  font: 500 20px/35px gilroymedium;
  text-transform: uppercase;
  cursor: pointer;
  width: auto;
  height: 35px;
}
.sliderButtonPrevious{
  justify-content: flex-start;
}
.sliderButtonNext{
  justify-content: flex-end;
}

.sliderButtonNext::after {
  content: "";
  position: absolute;
  bottom: -2px;
  right:  -6px;
  width: 75%;
  height: 15px;
  background-color: #4CF049;
  z-index: -1;
  transform: translateY(0);
  transition: transform 0.3s ease;
}
.sliderButtonPrevious::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 15px;
  background-color: #4CF049;
  z-index: -1;
  transform: translateY(0);
  transition: transform 0.3s ease;
}
.sliderButtonNext {
  width: 20%;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.sliderButton.disabled::after {
  background-color: transparent;
}

.sliderButton:hover::after {
  transform: translateY(-50%);
}

.sliderButtonPrevious::before,
.sliderButtonNext::before {
  content: "";
  position: absolute;
  background-repeat: no-repeat;
  width: 30px;
  height: 100%;
  top: 50%;

}
.sliderButtonPrevious{
margin-left: 54px;
}
.sliderButtonNext{
margin-right: 54px;
}
.sliderButtonPrevious::before {
  background-image: url('../assets/vectors/BlogSliderArrowLeft.svg');
  left: -49px;
}

.sliderButtonNext::before {
  background-image: url('../assets/vectors/BlogSliderArrowRight.svg');
  left: calc(100% + 19px);
}

.blogSliderTitleBox {
  width: 100%;
  padding-top: 37px;
  margin-bottom: -26px;
}
.sliderBtnsForLargeScreen{
  display: none;
}
.blogSliderTitle {
  font: 300 35px/50px gilroylight;
}
.blogFirstWord{
  position: relative;
}
.blogFirstWord::before{
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


.blogCardContainer {
  width: 100%;
  margin-top: 20px;
  padding-bottom: 104px;
}
.blogCardWrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.blogCards {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  overflow: hidden;
}

.blogCard {
  flex: 1;
  max-width: calc(50% - 10px);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  max-height: 354px;
}

.blogCard:hover {
  transform: translateY(-5px);
}

.cardImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* media screens */
@media (min-width: 425px) {
.sliderButtonNext::after {
  right:  -6px;
  width: 75%;
}
.sliderButtonPrevious::after {
  width: 100%;
}
}
@media (min-width: 576px) {
  .blogSliderButBox {
    max-width: 400px;
  }
  .blogFirstWord::before{
    width: 96%;
  }
.sliderButtonNext::after {
  right:  -2px;
  width: 50%;
}
.sliderButtonPrevious::after {
  width: 100%;
}
}
@media (min-width: 768px) {
.sliderButtonNext::after {
right:  -2px;
width: 35%;
}

}
@media (min-width: 992px) {
.sliderButtonNext::after {
  width: 30%;
}
.sliderButtonPrevious::after {
  width: 100%;
}
}
@media (min-width: 1200px) {
  .blogSliderTitleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sliderBtnsForLargeScreen{
  display: flex;
  gap: 60px;
  }
  .blogSliderTitle {
    font-size: 40px;
    line-height: 60px;
  }
  .blogCards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .blogFirstWord::before{
    bottom: 1%;
  }
.sliderButtonNext::after {
right:  0;
width: 58%;
}
.sliderButtonPrevious::after {
  width: 100%;
}

.sliderBtnLgScr{
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 0;
}



.sliderButtonLeft::before {
  content: "";
  position: absolute;
  background-image: url('../assets/vectors/globalVectors/sliderBigArrowLeft.svg');
  background-repeat: no-repeat;
  width: 50px;
  height: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-17%);
}

.sliderButtonRight::before {
  content: "";
  position: absolute;
  background-image: url('../assets/vectors/globalVectors/sliderBigArrowRight.svg');
  background-repeat: no-repeat;
  width: 50px;
  height: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-17%);
}

}
@media (min-width: 1400px) {
  .sliderButtonNext::after {
  width: 50%;
  
}
.sliderButtonPrevious::after {
  width: 100%;
}
}
@media (min-width: 1600px) {
.sliderButtonPrevious::after {
  width: 100%;
}
}
@media (min-width: 1920px) {
  .blogSliderTitle {
    font-size: 50px;
    line-height: 70px;
  }
    .blogFirstWord::before{
    bottom: 12%;
  }
  .sliderButtonPrevious::after {
  width: 100%;
}
}
</style>

