<template>
    <ul class="navListFooter">
      <footerMenuItem
          v-for="item in navmenu"
          :key="item.id"
          :item="item"
      ></footerMenuItem>
    </ul>
</template>

<script setup>
import footerMenuItem from "./UI/links/footerMenuItem.vue";

const props = defineProps({
  navmenu: {
    type: Array,
    required: true,
  }
});
</script>
<style scoped>
.mainNavFooter{
width: 332px;
height: 23px;  
}

.navListFooter {
display: flex;
list-style: none;
justify-content: space-between;
align-items: center;
align-content: center;
z-index: 3;
min-width: 100%;
}
.navitemFooter {
color: #FFF;

}
/*Медіазапити*/
@media (min-width: 576px) { 
  .navListFooter {

justify-content: space-evenly;

}
}
@media (min-width: 768px) { 
  
}

@media (min-width: 992px) { 
    .navListFooter {
display: flex;
list-style: none;
justify-content: space-between;
align-items: center;
align-content: center;
z-index: 3;
min-width: 332px;
}
.mainNavFooter{
width: 332px; 
}
}
@media (min-width: 1200px) { 

.mainNavFooter{
width: 260px; 
}
}
@media (min-width: 1400px) { 
.mainNavFooter{
width: 332px;  
}
}
</style>