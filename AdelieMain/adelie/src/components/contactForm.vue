<template>

  <form class="contactForm" @submit.prevent="onFormSubmit">
    <div class="formContainer">
      <div class="wrapTitle">
        <h2 class="formTitle">Contact form</h2>
      </div>
      <div class="formFlex">
        <div class="formElements">
          <div class="inputRow">
            <div class="formInput">
              <formInput
                :label="$t('form.name')"
                :name="form.name.name"
                :type="form.name.type"
                :required="form.name.required"
                :value="nameInput"
                @click="resetNameError"
                @update:value="nameInput = $event"
              ></formInput>

              <div v-if="isNameInvalid" class="errorMessageInput">
                {{ $t(nameErrorMessage) }}
              </div>
            </div>

            <div class="formInput">
              <formInput
                :label="$t('form.phone')"
                :name="form.phone.name"
                :type="form.phone.type"
                :required="form.phone.required"
                :value="phoneInput"
                @click="resetPhoneError"
                @update:value="phoneInput = $event"
              ></formInput>

              <div v-if="isPhoneInvalid" class="errorMessageInput">
                {{ $t(phoneErrorMessage) }}
              </div>
            </div>
            <div class="formInput">
              <formInput
                :label="$t('form.email')"
                :name="form.email.name"
                :type="form.email.type"
                :required="form.email.required"
                :value="emailInput"
                @click="resetEmailError"
                @update:value="emailInput = $event"
              ></formInput>

              <div v-if="isEmailInvalid" class="errorMessageInput">
                {{ $t(emailErrorMessage) }}
              </div>
            </div>
          </div>

        </div>
          <div class="formInput maxWidthTextarea">
            <FormTextarea
            :label="$t('form.message')"
            :name="form.message.name"
            :value="messageInput"
            @click="resetMessageError"
            :required="form.message.required"

            @update:value="messageInput = $event"
            >
            </FormTextarea>

          <div v-if="isMessageInvalid" class="errorMessageTextarea">
          {{ $t(messageErrorMessage) }}
          </div>
            </div>
        <formButton >Send</formButton>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import formInput from "./UI/formInput.vue";
import FormTextarea from "./UI/formTextarea.vue";
import formButton from "./UI/buttons/formButton.vue";

const form = {
  name: { name: "name", type: "text", required: true },
  phone: { name: "phone", type: "tel", required: true },
  email: { name: "email", type: "mail", required: true },
  message: { name: "message", required: true }
};

const nameInput = ref("");
const phoneInput = ref("");
const emailInput = ref("");
const messageInput = ref("");

const isNameInvalid = ref(false);
const isPhoneInvalid = ref(false);
const isEmailInvalid = ref(false);
const isMessageInvalid = ref(false);

const nameErrorMessage = ref("");
const phoneErrorMessage = ref("");
const emailErrorMessage = ref("");
const messageErrorMessage = ref("");



const emits = defineEmits(["click"]);

// Валідація

const validateName = () => {
  const trimmedName = nameInput.value.trim();
  const inputElement = document.querySelector('.formInput  input[name="name"]');
  const isInvalid = trimmedName === "" || trimmedName.length < 2;
  isNameInvalid.value = isInvalid;
  nameErrorMessage.value = isInvalid ? "form.isNameInvalid" : "";
  inputElement.classList.toggle("error", isInvalid);
};

const validatePhone = () => {
  const trimmedPhone = phoneInput.value.trim();
  const inputElement = document.querySelector('.formInput input[name="phone"]');
  const isValid = /^\+\d{7,}$/.test(trimmedPhone);

  isPhoneInvalid.value = !isValid;
  phoneErrorMessage.value = isValid ? "" : "form.isPhoneFormatInvalid";
  inputElement.classList.toggle("error", !isValid);
};

const validateEmail = () => {
  const trimmedEmail = emailInput.value.trim();
  const inputElement = document.querySelector('.formInput input[name="email"]');
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  isEmailInvalid.value = !isValid;
  emailErrorMessage.value = isValid ? "" : "form.isEmailInvalid";
  if (inputElement) {
    inputElement.classList.toggle("error", !isValid);
  }
};


const validateMessage = () => {
  const trimmedMessage = messageInput.value.trim();
  const textareaElement = document.querySelector('.formInput textarea[name="message"]');
  const isValid = trimmedMessage.length >= 5; 
  isMessageInvalid.value = !isValid;
  messageErrorMessage.value = isValid ? "" : "form.isMessageInvalid";

  if (textareaElement) {
    textareaElement.classList.toggle("error", !isValid);
  }
};


// Ресети

const resetInputError = (inputName, isInvalid, errorMessage) => {
  const inputElement = document.querySelector(`.formInput  input[name="${inputName}"]`);
  const textareaElement = document.querySelector(`.formInput  textarea[name="${inputName}"]`);

  if (inputElement) {
    isInvalid.value = false;
    errorMessage.value = "";
    inputElement.classList.remove("error");
  }

  if (textareaElement) {
    isInvalid.value = false;
    errorMessage.value = "";
    textareaElement.classList.remove("error");
  }
};

const resetNameError = () => {

  if (isNameInvalid.value) { 
    resetInputError("name", isNameInvalid, nameErrorMessage);
    nameInput.value = "";
  }
};

const resetPhoneError = () => {

  if (isPhoneInvalid.value) { 
    resetInputError("phone", isPhoneInvalid, phoneErrorMessage);
    phoneInput.value = "";
  }
};

const resetEmailError = () => {

  if (isEmailInvalid.value) { 
    resetInputError("email", isEmailInvalid, emailErrorMessage);
    emailInput.value = "";
  }
};

const resetMessageError = () => {
  const textareaElement = document.querySelector('.formInput textarea[name="message"]');
  if (isMessageInvalid.value) {
    resetInputError("message", isMessageInvalid, messageErrorMessage);
    messageInput.value = ""; 
  }
};


const onFormSubmit = () => {
  validateName();
  validatePhone();
  validateEmail();
  validateMessage();

  if (!isNameInvalid.value && !isPhoneInvalid.value && !isEmailInvalid.value && !isMessageInvalid.value) {
    console.log("Form submitted!");
  } else {
    console.log("Validation failed!");
    if (isNameInvalid.value) console.log("Name is invalid");
    if (isPhoneInvalid.value) console.log("Phone is invalid");
    if (isEmailInvalid.value) console.log("Email is invalid");
    if (isMessageInvalid.value) console.log("Message is invalid");
  }
};

</script>

<style>
.contactForm {
  padding: 100px 0 0 0;
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 998px;
}
.formContainer {
  min-width: 100%;
  position: relative;
}
.formElements{
  max-height: 225px;
}

.formTitle {
  text-align: start;
  margin-bottom: 20px;
  padding: 4px 0px 21px 24px;
  margin: 0;
  position: relative;
  font-family: gilroyregular;
  font-size: 35px;
  font-style: normal;
  font-weight: 300;
  line-height: 70px;
  min-width: 217px;
  max-width: 217px;
  white-space: nowrap;
}
.formTitle::before {
  content: "";
  position: absolute;
  width: 79px;
  height: 79px;
  background: #4cf049;
  opacity: 0.1;
  border-radius: 50%;
  left: 0;
  top: 0;
}
.formFlex{
  display: flex;
  flex-direction: column;
  min-height: 499px;
  max-height: 499px;
  justify-content: space-between;
}
.formElements {
  margin-bottom: 20px;
}
.inputRow {
  height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.formInput{
  position: relative;
}.maxWidthTextarea{
  max-height: 55px;
}
.errorMessageInput{
    position: absolute;
  width: fit-content;
  bottom: 0px;
  right: -2px;
  height: fit-content;
  padding: 3px;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(51, 40, 40);
  line-height: 18px;
  font-family: "gilroymedium";
  font-size: 12px;
  animation: errorAnima  0.2s ease-out forwards;
  z-index: 1;
}
.errorMessageTextarea{
  position: absolute;
  width: fit-content;
  bottom: 0;
  right: -2px;
  height: fit-content;
  padding: 3px;
  background-color: rgb(255 255 255 / 0%);
  color: rgb(51, 40, 40);
  line-height: 18px;
  font-family: "gilroymedium";
  font-size: 12px;
  animation: errorAnima  0.2s ease-out forwards;

}
.error  {
  border-bottom: 2px solid red;
}
.label.error  input{
  border-bottom: 2px solid red;
}
@keyframes errorAnima {
  from{ 
    opacity: 0;
    transform: translateY(0px);
    } 
  to{ 
    opacity: 1;
    transform: translateY(100%);
    }
}




@media (min-width: 992px) { 
.contactForm {
  padding: 134px 0 0 0;
  position: relative;
  max-width: 700px;

}

.formTitle {
  text-align: start;
  margin-bottom: 20px;
  padding: 4px 0px 21px 0px;
  margin: 0;
  position: relative;
  font-family: gilroyregular;
  font-size: 55px;
  font-style: normal;
  font-weight: 300;
  line-height: 70px;
  min-width: 217px;
  max-width: 217px;
  white-space: nowrap;
  
}
.formTitle::before {
  width: 125px;
  height: 125px;
  top: -28px;
  left: -44px;
}
.wrapTitle{
 padding-bottom: 30px;
}
.formFlex {
    display: flex;
    flex-direction: column;
    min-height: 329px; 
    max-height: 100%;
    justify-content: space-between;
}
.formContainer {
  min-width: 100%;

}

.formElements {
  margin-bottom: 20px;
}
.inputRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 55px;
  gap: 21px;
}
.formInput {
  min-width: 200px;
  max-width: 205px;
  border: none;
  position: relative;
}
.maxWidthTextarea{

max-width: 100%;

}
.errorMessageInput{
  bottom: 0;
  right: -2px;
}
.errorMessageTextarea{
  bottom: 0;
  right: -2px;
}
}
@media (min-width: 1200px) { 
.contactForm {
  max-width: 800px;
}
.formInput {
  min-width: 255px;
  max-width: 255px;
  border: none;
  position: relative;
}
.maxWidthTextarea{
  min-width: 100%;
max-width: 100%;

}
}
@media (min-width: 1400px) { 
.contactForm {
  max-width: 900px;
}
.formInput {
  min-width: 255px;
  max-width: 255px;
  border: none;
  position: relative;
}
.maxWidthTextarea{
  min-width: 100%;
max-width: 100%;

}
 }
@media (min-width: 1920px) { 
.contactForm {
  max-width: 998px;
}
.formInput {
  min-width: 305px;
  max-width: 305px;
  border: none;
  position: relative;
}
.maxWidthTextarea{
  min-width: 100%;
max-width: 100%;

}
 }
</style>
