<template>
  <router-link :to="to" class="readMore">
    {{ label }}
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: String,
  label: String,
});
</script>

<style scoped>
.readMore {
  display: inline-block;
  position: relative;
  padding-top: 4px;
  color: #000;
  font-family: gilroymedium;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
  text-transform: uppercase;
  text-decoration: none;
  width: 111px;
  height: 35px;
}
.readMore::before {
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
.readMore:hover::before {
  transform: translateY(-50%); 
}
</style>
