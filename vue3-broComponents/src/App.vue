<template>
<div>
  <h1>我是父组件</h1>
  <Avue></Avue>
  <Bvue></Bvue>
  <Wick  name="props 数据"  @on-click="getItem"></Wick>
</div>
</template>

<script setup>
import Avue from "./components/A.vue";
import Bvue from "./components/B.vue";
import Wick from './App.tsx'
import { reactive, ref } from 'vue';
const getItem = (item) =>{
    console.log('收到了',item);
}


</script>

<style scoped>
</style>