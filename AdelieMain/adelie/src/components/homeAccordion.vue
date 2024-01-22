<script setup>
import { ref } from "vue";

const accordionItems = ref([
  {
    header: "Design and Wireframing",
    contentHeader: "Discovery and Planning:",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
  {
    header: "Testing and Quality Assurance",
    contentHeader: "Planning:",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
  {
    header: "Deployment and Launch",
    contentHeader: " ",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
  {
    header: "Post-Launch Support and Maintenance",
    contentHeader: "Discovery and Planning:",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
  {
    header: "Development and Integration",
    contentHeader: "DiscoveryandPlanning Planning :",
    content:
      "We begin by thoroughly understanding your business goals and requirements. Through in-depth discussions and analysis, we identify key functionalities, target audience, and competitive landscape. This stage sets the foundation for the project, ensuring a clear roadmap for success.",
    active: false,
  },
]);

function toggleAccordion(index) {
  accordionItems.value[index].active = !accordionItems.value[index].active;
}

for (const item of accordionItems.value) {
  const words = item.contentHeader.split(" ");
  item.firstWord = words.length > 0 ? words[0] : "";
}
</script>
<template>
  <div class="accordion">
    <div v-for="(item, index) in accordionItems" :key="index" class="accordionItem">
      <div class="accordionLine"></div>
      <button class="accordionHeader" @click="toggleAccordion(index)">
        {{ item.header }}
        <div class="accordionButton" :class="{ active: item.active }">
          {{ item.active ? "-" : "+" }}
        </div>
      </button>
      <div class="accordionContent" v-if="item.active">
        <h3 class="contentHeader">
          <span class="first-word">{{ item.firstWord }}</span>
          {{ item.contentHeader.substring(item.firstWord.length) }}
        </h3>
        <p class="contentText">{{ item.content }}</p>
      </div>
      
    </div>
    <div class="accordionLine"></div>
  </div>
</template>


<style>
.accordion {
  padding-top: 51px;
}
.accordionHeader {
  min-width: 100%;
  display: flex;
  align-items: center;
  color: #000;
  font-family: gilroyregular;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  text-align: start;
  height: 35px;
  background-color: transparent;
  border: none;
  padding: 38px 0;
}
.accordionButton {
  width: 35px;
  height: 35px;
  min-width: 35px;
  border-radius: 50%;
  background-color: #F1F1F1;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  color: #000;
  cursor: pointer;
  font-family: gilroymedium;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
}


.accordionButton.active {
  background-color: #050505;
  color: #fff;
  border-color: transparent;
}
.accordionLine {
  width: 100%;
  height: 1px;
  opacity: 0.1;
  background: #000;
  margin: 10px 0;
}
.contentHeader {
  color: #000;
  font-family: gilroyregular;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
  padding: 27px 0 24px 0;
}
.first-word {
  position: relative;
  z-index: 2;

}

.first-word::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 2px;
  width: 99%;
  height: 15px;
  background-color: rgba(76, 240, 73, 1);
  z-index: -1;
}
.contentText {
  color: #000;
  font-family: gilroylight;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 27px;
}
</style>