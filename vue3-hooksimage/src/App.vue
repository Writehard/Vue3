<template>
<div>
  <img src="./assets/1.jpeg" alt="" width="300" height="300" id="img">
</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import useBase from './hooks'
useBase({el:"#img"}).then((res)=> {
  console.log(res.baseUrl);
})
</script>

<style scoped>
</style>