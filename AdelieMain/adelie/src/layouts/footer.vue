<script setup>
import { ref, onMounted } from 'vue';
import BrandingFooter from '../components/brandingFooter.vue'
import footerMenu from '../components/footerMenu.vue'
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
  <footer class="footer">
      <div class="container">
        <div class="footerMenuBox">
          <div class="bottom">
            <div class="footerLogoWrap">
              <BrandingFooter/>
              <p class="reserved">© 2023 All rights reserved</p>
            </div>
            <footerMenu :navLinks="navLinks" />
          </div>
        </div>
      </div>

  </footer>
</template>

<style >
footer {

  background-image: url('../assets/vectors/globalVectors/footerMainVector.svg');
  background-repeat: no-repeat;
  padding-top: 184px;
  min-width: 100%;
  height: 364px;
  background-position: -468px 10px;
  background-color: transparent;
}

.footerMenuBox{
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 100%;
}
.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;
  min-width: 100%;
}

.footerLogoWrap {
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
  gap: 31px;
  text-align: center;

}

.reserved {
  position: relative;
  color: #FFF;
  font-family: gilroyregular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
}



/*Медіазапити*/

@media (min-width: 576px) { 
}
@media (min-width: 768px) { 
  
}
@media (min-width: 992px) { 
.footerMenuBox{
  justify-content: flex-start;
}
.bottom {
  flex-direction: row;
  gap: 60px;
}
.footerLogoWrap {
  flex-direction: row;
  min-width: 382px;
}

}
@media (min-width: 1200px) { 
footer {
  background-position: -158px 10px;
}
.bottom {
  gap: 80px;
}
}
@media (min-width: 1400px) { 
  footer {
background-position: -158px 10px;
}
.bottom {
  gap: 100px;
}
}
@media (min-width: 1920px) { 
footer{
  position: relative;
}
.bottom{
  position: absolute;
  bottom: 91px;
  left: 322px;
  min-width: 382px;
  gap: 159px;
}
.mainNavFooter{
  min-width: 883px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 30px;
  left: 863px;
  bottom: 90px;
}
.navlistFooter {
  width: 100%;
}
}
</style>
