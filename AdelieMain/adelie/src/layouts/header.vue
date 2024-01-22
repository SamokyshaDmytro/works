<script setup>
import { ref, onMounted } from 'vue';
import BrandingHeader from '../components/brandingHeader.vue';
import headerMenu from '../components/headerMenu.vue';
import headerSearchButton from './../components/UI/buttons/headerSearchButton.vue';
import toggleButton from '../components/UI/buttons/toggleButton.vue';
import axios from 'axios';

const navLinks = ref([]);

const fetchLayouts = async () => {
  try {
    const response = await axios.get('/src/layouts.json');
    navLinks.value = response.data.data.nav_menu;
  } catch (e) {
    console.error(e);
  }
};
onMounted(fetchLayouts);
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="top">
        <BrandingHeader />
        <div class="navWrap">
          <headerMenu :navLinks="navLinks" />
          <headerSearchButton/>
          <toggleButton></toggleButton>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding-top: 20px;
  width: 100%;
  z-index: 1;
}
.top {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navWrap {
  display: flex;
  gap: 22px;
  align-items: center;
}

@media (min-width: 768px) { 
 .top {
  height: 41px;
}

}
@media (min-width: 1024px) { 
.top {
  justify-content: space-around;
}
.navWrap {
  display: flex;
  gap: 102px;
  align-items: center;
}
}
@media (min-width: 1920px) { 
.top {
  justify-content: space-between;
}
}
</style>
