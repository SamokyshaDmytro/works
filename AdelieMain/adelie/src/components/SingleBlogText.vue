<template>

<div class="blogBox">

  <div class="singleBlogTextRel">
    <div v-for="textBlog in blogTexts" :key="textBlog.title" class="blogTextsBox">
      <h3 class="SinglePageBlogTitle" v-if="textBlog.title">{{ textBlog.title }}</h3>
      <p class="SinglePageBlogText" v-if="textBlog.text">{{ textBlog.text }}</p>
      <div class="boldTextBox" v-if="textBlog.boldTextMain">
        <p class="SinglePageBlogText isBoldText">
          <span class="textBorder textBorder1"></span>
          <span class="textBorder textBorder2"></span>
          <span class="textBorder textBorder3"></span>
          {{ textBlog.boldTextMain }}
        </p>
      </div>
      <p class="SinglePageBlogText" v-if="textBlog.nextText">{{ textBlog.nextText }}</p>
      <p class="SinglePageBlogText isBoldText" v-if="textBlog.isBoldText">{{ textBlog.isBoldText }}</p>
    </div>
    <div class="endLine"></div>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  blogTexts: Array
});
</script>

<style scoped>
.blogBox{
  position: relative;

}



.singleBlogTextRel {
  position: relative;
  max-width: 790px;
  margin: 0 auto;
}

.SinglePageBlogTitle,
.SinglePageBlogText {
  font-family: gilroylight;
  font-size: 16px;
  font-weight: 300;
  line-height: 35px;
}

.SinglePageBlogTitle {
  font-size: 23px;
  line-height: 30px;
  padding: 26px 0 5px;
}

.boldTextBox {
  position: relative;
  margin: 50px 0 22px;
  min-height: auto;
  padding-bottom: 40px;
}

.textBorder {
  position: absolute;
  border: 1px solid black;
  width: 952px;
  min-height: 100%;
}

.textBorder1 {
  top: -11px;
  left: -41px;
}

.textBorder2 {
  top: -21px;
  left: -121px;
}

.textBorder3 {
  top: -31px;
  left: -81px;
}

.isBoldText {
  font-family: gilroymedium;
  font-weight: 700;
}

.endLine {
  position: absolute;
  opacity: 0.2;
  background: #000;
  width: 1276px;
  left: -241px;
  height: 1px;
  margin-top: 44px;
}

@media (min-width: 1200px) {
  .SinglePageBlogTitle,
.SinglePageBlogText {
  font-size: 20px;
}
.SinglePageBlogTitle {
  font-size: 30px;
  line-height: 40px;
  padding: 30px 0 10px;
}
}
</style>
