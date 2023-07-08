<template>
<div>
    <h1>我是A组件</h1>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useAttrs, } from 'vue';
let attr = useAttrs()
console.log(attr);
</script>

<style scoped>
</style>