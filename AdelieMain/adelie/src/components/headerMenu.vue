<template>
  <div class="navbar">
    <headerMenuItems :navmenu="navLinks" ></headerMenuItems>
  </div>
</template>

<script setup>
import headerMenuItems from "./headerMenuItems.vue";

const props = defineProps({
  navLinks: {
    type: Array,
    required: true,
  }
});
</script>

<style scoped>
.support-link {
  max-width: 240px;
}

.navbar {
  display: none;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100px;
  flex-direction: column;
  position: fixed;
  opacity: 0;
  transition: opacity 0.1s 0.3s;
}

.navbar:before {
  display: block;
  width: 100%;
  position: absolute;
  content: " ";
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.1s 0.2s;
}

.navbar.navbar_visible {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100px;
  padding: 0 15px;
  background-color: #fff;
  z-index: 200;
  opacity: 1;
}

.navbar.navbar_visible:before {
  top: -100px;
  bottom: 0;
  background-color: #ffffff;
  opacity: 1;
  transition: opacity 0.2s 0.2s;
}

@media (min-width: 1024px) {
  .navbar {
    top: unset;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    background-color: transparent;
    opacity: 1;
  }
  
  .navbar:before {
    background-color: transparent;
    display: block;
    width: 100%;
    position: absolute;
    content: " ";
    z-index: -1;
    opacity: 0;
  }
  
  .navbar.navbar_visible:before {
    display: none;
  }
}
</style>
