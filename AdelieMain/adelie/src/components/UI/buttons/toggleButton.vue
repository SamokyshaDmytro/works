<template>
  <button class="button-toggle" @click="toggleMenu">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMenuVisible = ref(false);

const toggleMenu = () => {
  const body = document.getElementsByTagName("body")[0];
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector('.button-toggle');
  body.classList.toggle("display_menu");
  navbar.classList.toggle("navbar_visible");
  toggle.classList.toggle("toggle_open");
  isMenuVisible.value = !isMenuVisible.value;
};

onMounted(() => {
  const body = document.getElementsByTagName("body")[0];
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector('.button-toggle');
  body.classList.remove("display_menu");
  navbar.classList.remove("navbar_visible");
  toggle.classList.remove("toggle_open");
});
</script>


<style scoped>
.button-toggle {
  position: relative;
  text-decoration: none;
  font-family: gilroyregular;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  display: block;
  width: 40px;
  height: 22px;
  border: none;
  background-color: transparent;
  color: #2E3339;
  padding-top: 16px;
  text-transform: uppercase;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: 2px;
  transition: all 0.2s ease;
  z-index: 300;
}

.line {
  position: absolute;
  content: " ";
  background-color: #2E3339;
  transition: all 0.2s ease;
  border-radius: 5px;
}

.line:nth-child(1) {
  width: 40px;
  height: 4px;
  left: 0;
  right: 0;
  top: 0;
}

.line:nth-child(2) {
  top: 10px;
  width: 30px;
  height: 4px;
  right: 0;

}

.line:nth-child(3) {
  top: 20px;
  width: 40px;
  height: 4px;
  left: 0;
  right: 0;
}

.button-toggle.toggle_open {
  color: transparent;
}

.button-toggle.toggle_open .line:nth-child(1) {
  top: 10px;
  transform: rotate(45deg);
}

.button-toggle.toggle_open .line:nth-child(2) {
  display: none;
}

.button-toggle.toggle_open .line:nth-child(3) {
  top: 10px;
  transform: rotate(-45deg);
}

@media (min-width: 1024px) {
  .button-toggle {
    display: none;
  }
}
</style>
