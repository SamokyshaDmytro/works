<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbsList">
      <li
        class="breadcrumbsListItem"
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
      >
        <router-link :to="crumb.to" class="crumbLink" :class="{ active: index === breadcrumbs.length - 1 }">
          {{ crumb.label }}
          <span v-if="index < breadcrumbs.length - 1">&nbsp;/&nbsp;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const { breadcrumbs } = defineProps(['breadcrumbs']);
</script>
<style>


.breadcrumbs {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.breadcrumbsList {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumbsListItem {
  display: unset;
  align-items: center;
}

.crumbLink {
  color: #000;
  text-align: center;
  font-family: gilroylight;
  font-size: 20px;
  text-decoration: none;
  word-break: break-all; 
}

.active {
  color: #B4B4B4;
}


</style>
