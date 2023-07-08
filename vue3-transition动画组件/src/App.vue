<template>
<div class="main">
  <!-- <LayOut></LayOut> -->
  <!-- <PageOne></PageOne> -->
  <!-- <PageTwo></PageTwo> -->
  <!-- <PageThree></PageThree> -->
  <h1>App.vue (爷爷级别)</h1>
  <label>
    <input type="radio" value="red" name="demo" v-model="colorVal">
  </label>
  <label>
    <input type="radio" value="pink" name="demo" v-model="colorVal">
  </label>
  <label>
    <input type="radio" value="yellow" name="demo" v-model="colorVal">
  </label>
  <div class="box">
  
  </div>
  <hr>
<providA></providA>
</div>
</template>

<script setup>
import { reactive, ref, provide,readonly } from 'vue';
// import LayOut from './components/layout/index.vue'
// import PageOne from './components/views/PageOne.vue'
// import PageTwo from './components/views/PageTwo.vue'
// import PageThree from './components/views/PageThree.vue'
import providA from "./components/loading/providA.vue";
const colorVal = ref('red')
provide("demo", readonly(colorVal))
</script>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  background: v-bind(colorVal);
}
</style>