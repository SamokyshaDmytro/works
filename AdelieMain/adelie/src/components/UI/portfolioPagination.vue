<template>
  <div class="portfolioPagination">
    <button class="pageButton" @click="gotoPage(currentPage - 1)" :disabled="currentPage === 1">&lt;</button>
    
    <span v-if="visiblePages[0] > 2">
      <button class="pageButton" @click="gotoPage(1)">1</button>
      <span class="ellipsis" @click="gotoPage(visiblePages[0] - 1)">...</span>
    </span>
    
    <span v-for="page in visiblePages" :key="page">
      <button class="pageButton" @click="gotoPage(page)" :class="{ active: page === currentPage }">{{ page }}</button>
    </span>
    
    <span v-if="visiblePages[visiblePages.length - 1] < totalPages - 1">
      <span class="ellipsis" @click="gotoPage(visiblePages[visiblePages.length - 1] + 1)">...</span>
    </span>
    
    <button class="pageButton" @click="gotoPage(currentPage + 1)" :disabled="currentPage === totalPages">&gt;</button>
  </div>
</template>


<script setup>
import { ref, computed, onMounted, onBeforeUnmount, defineEmits } from 'vue';

const props = defineProps({
  currentPage: Number,
  dynamicPageSize: Number,
  totalItems: Number,
  totalItemsInPagination: Number
});

const emit = defineEmits();

const numVisiblePages = ref(window.innerWidth >= 768 ? 5 : 3); 
const halfVisiblePages = computed(() => Math.floor(numVisiblePages.value / 2));

const totalPages = computed(() => Math.ceil(props.totalItemsInPagination / props.dynamicPageSize));

const visiblePages = computed(() => {
  const pages = [];
  let start = props.currentPage - halfVisiblePages.value;

  if (start > totalPages.value - numVisiblePages.value + 1) {
    start = totalPages.value - numVisiblePages.value + 1;
  }

  if (start < 1) {
    start = 1;
  }

  const end = Math.min(start + numVisiblePages.value - 1, totalPages.value);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
});

const gotoPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('pageChange', page);
  }
};

const updateVisiblePages = () => {
  numVisiblePages.value = window.innerWidth >= 768 ? 5 : 3;
};

onMounted(() => {
  if (props.currentPage > totalPages.value) {
    gotoPage(1);
  }
  window.addEventListener('resize', updateVisiblePages);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVisiblePages);
});
</script>



<style scoped>
.portfolioPagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 63px;
  padding-bottom: 142px;
}

.pageButton {
  cursor: pointer;
  width: 58px;
  height: 55px;
  font: 300 20px/35px gilroylight; 
  background-color: transparent;
  border: none;
  position: relative;
  z-index: 1;
}
.pageButton.active {
  color: rgb(255, 255, 255);  
}
.pageButton.active::after {
  content: ""; 
  display: block;
  width: 58px; 
  height: 55px; 
  background-image: url('../../assets/vectors/globalVectors/splash.svg'); 
  background-size: cover; 
  position: absolute; 
  bottom: 0;
  left: -4px;
  z-index: -1;
}

.pageButton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}




</style>
