<template>
<div>
    evanzhe-btn
    <h1>{{ obj.name }}</h1>
</div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
let getObj = defineProps<{
    obj:string
}>()
let obj = reactive(JSON.parse(getObj.obj))
console.log(obj);

</script>

<style scoped>
</style>