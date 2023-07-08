<template>
<div>
    <h1>provideA.vue {父亲级别}</h1>
    <div class="box"></div>
    <hr>
    <providB></providB>
</div>
</template>

<script setup>
import { reactive, ref, inject } from 'vue';
import providB from "./providB.vue";
const demo = inject('demo');
</script>

<style scoped>
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(demo);
}
</style>