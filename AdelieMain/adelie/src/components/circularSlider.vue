<template>
  <div class="container">
    <div class="mainSlider">
      <!-- круги -->
      <div class="sliderContainer" ref="slidesContainer">
        <div
          class="sliderCircles"
          @mouseenter="pauseOnHover"
          @mouseleave="resumeOnLeave"
          :class="{ active: index === activeSlide, fadeIn: index === activeSlide, fadeOut: index !== activeSlide }"
        >
          <!-- доти -->
          <div
            class="dot"
            v-for="(slide, index) in slides"
            :key="index"
            :style="getDotStyle(index)"
            @click="changeSlide(index)"
            :class="{ active: index === activeSlide, fadeIn: index === activeSlide, fadeOut: index !== activeSlide }"
          >
            <!-- підписи дотів -->
            <div class="dotLabel" :style="getDotLabelStyle(index)">
              {{ slide.title }}
            </div>
          </div>
        </div>

        <!-- заголовок активного слайду в центі зеленого кола -->
        <div class="activeSlideTitle">{{ slides[activeSlide].title }}</div>
      </div>

      <!-- слайд -->
      <div class="slidesContainer" ref="slidesContainer">
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <span class="titleSlide">
            <!-- редагування першого слова -->
            <span class="titleSlideFirstWord">{{ getFirstWord(slide.title) }}</span>
            <!-- заголовок з двокрапка -->
            {{ slide.title.slice(getFirstWord(slide.title).length) + ":" }}
          </span>
          <!-- контнет слайду -->
          {{ slide.content }}
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const { index } = defineProps(["index"]);
const slides = ref([
  {
    title: "Discovery and Planning",
    content: "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
  },
  {
    title: "Design and Wireframing",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
  {
    title: "Development and Integration",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
  {
    title: "Testing and Quality Assurance",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
  {
    title: "Deployment and Launch",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
  {
    title: "Post-Launch Support and Maintenance",
    content: "We begin by thoroughly understanding your business goals and requirements.",
  },
]);

const slidesContainer = ref(null);
const activeSlide = ref(0); 

// Функція зміни слайда
function changeSlide(index) {
  activeSlide.value = index;
  updateSlideSizes();
}

// Функція для оновлення слайдів
function updateSlideSizes() {
  const slideItems = slidesContainer.value.querySelectorAll(".slide");

  slideItems.forEach((slide, index) => {
    if (index === activeSlide.value) {
      slide.style.width = "466px";
      slide.style.opacity = "1";
    } else {
      slide.style.width = "0";
      slide.style.opacity = "0";
    }
  });
}

// Функція для стилів точок
function getDotStyle(index) {
  const positions = [
    { top: "74px", left: "31px" },
    { top: "-18px", left: "208px" },
    { top: "67px", left: "394px" },
    { top: "298px", left: "432px" },
    { top: "437px", left: "289px" },
    { top: "406px", left: "74px" },
  ];
  return {
    top: positions[index].top,
    left: positions[index].left,
  };
}

// Функція стилів лейблів
function getDotLabelStyle(index) {
  const positions = [
    { top: "-62px", left: "-150px" },
    { top: "-55px", left: "-145px" },
    { top: "-7px", left: "50px", textAlign: "left" },
    { top: "-7px", left: "43px", width: "145px", textAlign: "left" },
    { top: "35px", left: "-150px" },
    { top: "-15px", left: "-165px", width: "145px" },
  ];

  return {
    top: positions[index].top,
    left: positions[index].left,
    width: positions[index].width,
    textAlign: positions[index].textAlign,
  };
}

const autoplayInterval = 3000;
let intervalId;

onMounted(() => {
  updateSlideSizes();
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

// Автоплей
function startAutoplay() {
  intervalId = setInterval(() => {
    let nextSlideIndex = activeSlide.value + 1;
    if (nextSlideIndex >= slides.value.length) {
      nextSlideIndex = 0;
    }
    changeSlide(nextSlideIndex);
  }, autoplayInterval);
}


function stopAutoplay() {
  clearInterval(intervalId);
}

// Функція для зміни слайда при автоплеї
function changeAutoplaySlide(index) {
  if (index >= 0 && index < slides.value.length) {
    activeSlide.value = index;
    updateSlideSizes();
  }
}

// Функції автоплею при ховері
function pauseOnHover() {
  stopAutoplay();
}

function resumeOnLeave() {
  startAutoplay();
}

// Функція для отримання першого слова з заголовку
function getFirstWord(title) {
  return title.split(" ")[0];
}
</script>




<style>
.mainSlider {
  display: flex;
  flex-direction: row;
  min-height: 604px;
  padding-top: 95px;
  position: relative;
  min-width: 100%;

}

.sliderContainer {
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
}

.sliderCircles {
  width: 466px;
  height: 466px;
  border-radius: 466px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; 

  
}
.sliderCircles::before {
  content: "";
  min-width: 321px;
  min-height: 321px;
  border-radius: 50%;
  background-color: rgba(76, 240, 73, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.dot {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(241, 241, 241, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  opacity: 1;
  position: absolute;
  z-index: 20;
  background-color: hsl(0, 0%, 95%);
}

.dot.active {
  background-color: rgba(0, 0, 0, 1);
  z-index: 2;
  transition:  all  0.3s ease;
}
.dot.active:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
  transition:  all  0.3s ease;
}
.dot:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  transition: all 0.3s ease;
}
.dotLabel{
  width: 180px;
  height: auto;
  color: #000;
  text-align: right;
  font-family: gilroyregular;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  position: absolute;
}
.activeSlideTitle {
  color: rgba(0, 0, 0, 1);
  text-align: center;
  font-family: gilroylight;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
  max-width: 226px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

.slidesContainer {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.slide {
  width: 466px;
  height: 318px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #000;
  font-family: gilroylight;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
  opacity: 0; 

}
.titleSlide{
  color: #000;
  font-family:gilroyregular;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
  padding-bottom: 38px;
  max-width: 466px;
  position: relative;
  min-width: 466px;
}
.titleSlideFirstWord {
  position: relative;
  display: inline-block;
  padding-right: 5px; 
}

.titleSlideFirstWord::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  background-color: #4CF049; 
  height: 15px;
  z-index: -1; 
}



</style>


