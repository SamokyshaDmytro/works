<template>
  <div class="navbarFooter">
    <footerMenuItems :navmenu="navLinks" ></footerMenuItems>
  </div>
</template>

<script setup>
import footerMenuItems from "./footerMenuItems.vue";

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
.navbarFooter {
  display: flex;
  min-width: 100%;
  justify-content: space-between;

}

@media (min-width: 1024px)  {

}
</style>