<template>
  <div class="wrapInput" :class="{ focused: isFocused, filled: isFilled }">
    <label class="label" :for="`${name}`" :style="labelStyle">
      {{ $t(label) }}
    </label>
    <input
      class="input"
      :id="name"
      :type="type"
      :name="`${name}`"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      :class="{ error: isInvalid }"
      @focus="onFocus"
      @blur="onBlur"
    />
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
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  isInvalid: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const isFocused = ref(false);
const isFilled = ref(false);

const onFocus = () => {
  isFocused.value = true;
};

const onBlur = () => {
  isFocused.value = false;
  isFilled.value = !!props.value.trim();
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
.wrapInput {
  position: relative;
  min-height: 55px;
}
.label {
  display: block;
  font-family: gilroylight;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
}
.input {
  display: block;
  width: 100%;
  height: 55px;
  border: none;
  border-bottom: 2px solid rgb(0, 0, 0);
  font-family: gilroylight;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 35px;
  background-color: transparent;
  height: auto;
  padding: 0 0 2px 0;
  position: absolute;
  bottom: 0;
}

.input:focus {
  outline: none;
  border-bottom: 2px solid #4cf049;
}

.input.error {
  border-bottom: 2px solid red;
}


@media (min-width: 992px) {
  .wrapInput {
  position: relative;
  height: 55px;
}
  .label {
    bottom: 6px;
    line-height: 35px;
  }
  .input {
    width: 100%;
  }
  .formInput {
    min-width: 305px;
    max-width: 305px;
    border: none;
    position: relative;
}
}
</style>
