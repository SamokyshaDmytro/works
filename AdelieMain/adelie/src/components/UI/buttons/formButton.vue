<template>
        <button class="sendButton">Send</button>
</template>
<script setup>

</script>
<style>
.sendButton {

    width: 110px;
    height: 110px;
    background-color: rgba(76, 240, 73, 1);
    color: rgb(0, 0, 0);
    font-size: 20px;
    border: none;
    border-radius: 50%;
    position: relative;
    text-align: center;
    font-family: gilroymedium;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 70px;
}
.sendButton:hover{
   animation: glowing 2s infinite;   
}
@keyframes glowing {
    0% { background-color: rgba(76, 240, 73, 0.1); box-shadow: 0 0 3px rgba(76, 240, 73, 0.1); }
    80% { background-color: rgba(76, 240, 73, 1); box-shadow: 0 0 10px rgba(76, 240, 73, 1); }
    100% { background-color: rgba(76, 240, 73, 0.1); box-shadow: 0 0 3px rgba(76, 240, 73, 0.1); }
}
.sendButton::after {
    content: url('../../../src/assets/vectors/formButtonArrow.svg');
    position: absolute;
    top: 20%;
    right: -20%;
}
.sendButton:focus {
    outline: none;
}
.sendButton:active {
    outline: none;
}
@media (min-width: 992px) { 

}
</style>