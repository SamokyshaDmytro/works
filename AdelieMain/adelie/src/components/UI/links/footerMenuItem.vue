<template>
  <li class="nav-item"><a class="nav-link" :class="{'router-link-active': $route.fullPath === item.href}"     @click="$router.push(`${item.href }`); hideNavbar()">
    {{ item.title }}</a>
  </li>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
});

</script>


<style scoped>
.nav-link, .nav-item {
  position: relative;
  text-decoration: none;
  font-family: gilroyregular;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  color: #FFF;
}

</style>