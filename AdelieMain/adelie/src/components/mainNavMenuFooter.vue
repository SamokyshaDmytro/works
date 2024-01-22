<template>
    <nav class="mainNavFooter">
        <ul class="navlistFooter">
        <NavMenuItem  class="navitem" :navmenu="{ title: 'Home' }" />
        <NavMenuItem  class="navitem" :navmenu="{ title: 'Blog' }" />
        <NavMenuItem  class="navitem" :navmenu="{ title: 'Contact' }" />
        </ul>
  </nav>
</template>

<script setup>
import NavMenuItem from "./UI/links/headerMenuItem.vue";
</script>

<style scoped>
.mainNavFooter{
  width: 355px;
  height: 23px;  
}

@media (min-width: 768px) {
.mainNavFooter{
  width: 332px;
  height: 23px;  
}
}

.navlistFooter {
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.navitemFooter {
  z-index: 1;
}

@media (min-width: 768px) {
.mainNavFooter {
  display: block;
}
}

</style>