<template>
  <div class="textarea" :class="{ focused: isFocused, filled: isFilled }">
    <label class="labelTeaxtArea" :for="`${name}`" :style="labelStyle">{{ $t(label) }}</label>
    <textarea
      class="inputTextarea"
      :name="`${name}`"
      :value="value"
      @input="updateValue($event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: true,
  },
});

const  emit  = defineEmits();

const isFocused = ref(false);
const isFilled = ref(false);

const onFocus = () => {
  isFocused.value = true;
};

const onBlur = () => {
  isFocused.value = false;
  isFilled.value = !!props.value.trim();
};

const updateValue = (newValue) => {
  emit("update:value", newValue);
};

const labelStyle = computed(() => {
  return {
    transform: isFocused.value || isFilled.value ? "translateY(-25%)" : "none",
    fontSize: isFocused.value || isFilled.value ? "16px" : "20px",
    transition: "transform 0.15s ease-out, font-size 0.15s ease-out",
  };
});
</script>

<style>
.textarea{

  position: relative;
  font-family: gilroylight;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;

  }
.labelTeaxtArea {
  position: absolute;
  bottom: 33px;
  left: 0;
  font-family: gilroylight;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
}

.inputTextarea {
  height: 55px;
  padding: 2px;
  font-family: gilroylight;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 65px;
  border: none;
  background-color: transparent;
  resize: none;
  width: 100%;
  border-bottom: 2px solid rgb(0, 0, 0);
  overflow: hidden; 

}
.inputTextarea:focus {
  outline: none;
  border-bottom-color: #4cf049; 

}


@media (min-width: 992px) { 
.textarea {

padding-top: 0;

}
}
</style>
