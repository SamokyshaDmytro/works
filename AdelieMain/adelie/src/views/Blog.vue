<template>
<div class="blogBox">
    <span class="blogTopLine"></span>
    <span class="blogMidLine" ></span>
    <span class="blogBotLine" ></span>
  <div class="container">
    <div class="blogBanner">
      <div class="blogTittleBox">
        <h2 class="blogTitle">Blog</h2>
      </div>
      <div class="blogBreadCrumbsBox">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
    </div>
    <div class="blogContent">
      <div class="blogFeed">
        <div
          class="blogCardWrapper"
          v-for="contentItem in visibleBlogItems"
          :key="contentItem.id"
        >
          <div class="blogCardWrapperInner">
            <contentCard :contentItem="contentItem" />
            <ReadMoreButton class="readMoreBlog" :to="`/blog/${contentItem.id}`" label="Read More" />
          </div>
        </div>
      </div>
    </div>
    <blogPagination
      class="blogPagination"
      :currentPage="currentPage"
      :dynamicPageSize="pageSize"
      :totalItems="totalItems"
      :totalItemsInPagination="totalItems"
      @pageChange="handlePageChange"
    />
  </div>
</div>  
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import contentCard from "../components/contentCard.vue";
import ReadMoreButton from '/src/components/UI/buttons/readMoreBlog.vue';
import blogPagination from '../components/UI/blogPagination.vue'; 
import axios from 'axios';
import Breadcrumbs from './../components/UI/breadCrumbs.vue';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog' },
];



const blogItem = ref([]);
const currentPage = ref(1);
const pageSize = ref(5);
const totalItems = ref(parseInt(localStorage.getItem('totalItems')) || 0);

const fetchBlogs = async () => {
  try {
    const response = await axios.get('/src/blogs.json');
    blogItem.value = response.data.data.blogs;
    totalItems.value = blogItem.value.length; 
    localStorage.setItem('totalItems', totalItems.value); 
  } catch (e) {
    console.error(e);
  }
};

onMounted(fetchBlogs);

const handlePageChange = (page) => {
  currentPage.value = page;
};

const totalPages = computed(() => {
  if (totalItems.value === 0) {
    return 0;
  }
  return Math.ceil(totalItems.value / pageSize.value);
});

const visibleBlogItems = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = Math.min(startIndex + pageSize.value, totalItems.value);
  return blogItem.value.slice(startIndex, endIndex);
});




</script>



<style scoped>
.blogBox{
  position: relative;
}

.blogBanner{
display: flex;
position: relative;
flex-direction: column;
gap: 37px;
padding: 35px 0 0 0;
justify-content: center;
align-items: center;
}

.blogTittleBox{
max-height: 46px;
}
.blogTitle{
font-family: gilroyregular;
font-size: 40px;
line-height: 46px;
}
.blogCardWrapper{
  display: flex;
  justify-content: center;
}
.blogCardWrapperInner{
display: flex;
flex-direction: column;
}
.blogBreadCrumbsBox{
display: flex;
justify-content: center;
}


.blogPagination{
  padding-top: 62px;
  padding-bottom: 142px;
}
@media (min-width: 1400px){
.blogBanner{
padding: 103px 0 36px 0;
gap: 28px;
}
.blogTitle{
  font-size: 70px;
}
.blogTopLine{
  position: absolute;
  background-image: url('../assets/vectors/blogTopLine.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  top: -105px;
  left: -150px;
  width: 900px;
  height: 1000px;
}
.blogMidLine{
  position: absolute;
  background-image: url('../assets/vectors/blogMidLine.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  top: 1720px;
  right: -178px;
  width: 500px;
  height: 600px;
}

/*for next pages*/
.nextPageTopLine{
  position: absolute;
  background-image: url('../assets/vectors/blogNextPageTopLine.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  top: -105px;
  left: -150px;
  width: 900px;
  height: 1000px;
}
.nextPageMidLine{
  position: absolute;
  background-image: url('../assets/vectors/blogNextPageMidLine.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  top: 1720px;
  right: -178px;
  width: 500px;
  height: 600px;
}
/*for next pages*/


.blogBotLine{
  position: absolute;
  background-image: url('../assets/vectors/blogBotLine.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
 
  transform: rotate(169deg);
  bottom: -69px;
  left: -102px;
  width: 731px;
  height: 613px;
}
.readMoreBlog{
  margin-top: 4px;
}
}
@media (min-width: 1920px){

.blogTopLine{
  top: -105px;
  left: -140px;
  width: 992px;
  height: 1640px;
}

.blogMidLine{
  top: 1720px;
  right: -178px;
  width: 682px;
  height: 892px;
}
.blogBotLine{
  bottom: -70px;
  left: 50px;
  width: 819px;
  height: 529px;
}
}

</style>
