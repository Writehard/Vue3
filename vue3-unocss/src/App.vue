<template>
<div class="bg-red-500">
  evanzhe
  

</div>
<span class="i-solar-4k-bold" style="font-size: 20px;"></span>
<HelloWorld></HelloWorld>
<el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<script setup lang='ts'>
import HelloWorld from "./components/HelloWorld.vue";
import { reactive, ref } from 'vue';
</script>

<style scoped>
</style>