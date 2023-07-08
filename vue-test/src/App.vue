<template>
<div class="main">
  <PageOne></PageOne>
  <PageTwo></PageTwo>
</div>
</template>
<script setup>
import {ref} from 'vue'
import PageOne from './views/PageOne.vue';
import PageTwo from './views/PageTwo.vue';
</script>
<style>
.main { 
  display: flex;
  width: 100vh;
  height: 100vh;
}
</style>