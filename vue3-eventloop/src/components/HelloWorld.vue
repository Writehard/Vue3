<template>
<div>
  <h1>我是helloword页面</h1>
</div>
</template>

<script setup lang='ts'>
import { reactive, ref, getCurrentInstance } from 'vue';
let instance = getCurrentInstance()
console.log(instance);

</script>

<style scoped>
</style>