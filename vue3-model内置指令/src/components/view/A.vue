<template>
<div class="A">
    <h1>我是A组件</h1>
</div>
</template>

<script setup>

import { reactive, ref } from 'vue';

</script>

<style scoped>
.model {
    width: 500px;
    border: 5px solid #ccc;
    padding: 10px;
    position: relative;
}
.close {
    position: absolute;
    right: 0;
    top: 0;
}
</style>