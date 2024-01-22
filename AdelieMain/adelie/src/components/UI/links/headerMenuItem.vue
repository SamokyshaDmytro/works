<template>
  <li class="nav-item">
    <a class="nav-link" :class="{'router-link-active': $route.fullPath === item.href}" @click="$router.push(`${item.href}`); hideNavbar()">
      {{ item.title }}
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </a>
  </li>
</template>

<script setup>


const props = defineProps({
  item: {
    type: Object,
    required: true
  },
});

function hideNavbar() {
  const navbar = document.querySelector('.navbar');
  const body = document.getElementsByTagName("body")[0];
  const toggle = document.querySelector('.button-toggle');
  if (navbar.classList.contains('navbar_visible')) {navbar.classList.remove('navbar_visible')}
  if(body.classList.contains("display_menu")) {body.classList.remove("display_menu") }
  if (toggle.classList.contains("toggle_open")) {toggle.classList.remove("toggle_open")}
}
</script>


<style scoped>
.nav-link,
.nav-item {
  position: relative;
  text-decoration: none;
  font-family: gilroyregular;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  margin-bottom: 30px;
}

.line {
  position: absolute;
  content: "";
  bottom: 100%;
  width: 100%;
  height: 1px;
  background-color: black;
  transform: scaleX(0);
  transition: transform 0.2s ease;

}

.nav-link:hover .line {
  transform: scaleX(1);
}

.line:nth-child(1) {
  bottom: -3px;
  width: 50%;
  left: 0;
  transform-origin: left;
}

.line:nth-child(2) {
  bottom: -6px;
  right: 0;
  left: 0;
  transition-delay: 0.4s; 
}

.line:nth-child(3) {
  bottom: -9px;
  width: 50%;
  right: 0;
  transform-origin: right;
    transition-delay: 0.2s; 
}
.nav-link.router-link-active .line {
    transform: scaleX(1);
  width: 100%;
  height: 1px;
  color: rgb(0, 0, 0);
}
.nav-link.router-link-active .line:nth-child(1) {
  bottom: -3px;
  width: 50%;
  left: 0;
}
.nav-link.router-link-active .line:nth-child(2) {
  bottom: -6px;
  right: 0;
  left: 0;
}
.nav-link.router-link-active .line:nth-child(3) {
  bottom: -9px;
  width: 50%;
  right: 0;
}
@media (min-width: 1024px) {

.nav-link, .nav-item {
  margin-bottom: 0;
}
}

</style>