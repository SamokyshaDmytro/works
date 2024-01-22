<template>
    <ul class="navlist">
      <headerMenuItem
          v-for="item in navmenu"
          :key="item.id"
          :item="item"
      ></headerMenuItem>
    </ul>
</template>

<script setup>
import headerMenuItem from "./UI/links/headerMenuItem.vue";

const props = defineProps({
  navmenu: {
    type: Array,
    required: true
  },
  
});

const components = {
  headerMenuItem
}
</script>

<style scoped>
.navlist{
  height: 23px;  
  list-style: none;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
@media (min-width: 1024px) {

.navlist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-width: 332px;
}
}



</style>