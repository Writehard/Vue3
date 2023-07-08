<template>
<div style="display: flex;">
    <div :class="[active == index? 'active' : '']" v-for="(item,index) in data" class="tabs">
        <div @click="switchCom(item, index)">{{ item.name }}</div>
    </div>
    <component :is="comId"></component>
</div>
</template>
<script setup lang='ts'>
import { reactive, ref } from "vue";
import AVue from "./components/examp/A.vue"
import BVue from "./components/examp/B.vue"
import CVue from "./components/examp/C.vue"
const comId = ref(AVue);
const active = ref(0)
const data = reactive([
    {
    name:'A组件',
    com:AVue
    },
    {
        name:'B组件',
        com:BVue
    },
    {
        name:'C组件',
        com:CVue
    }
])
const switchCom = (item, index) => {
    comId.value = item.com
    console.log(comId);
    
    active.value =index
}
</script>
<style scoped lang="less">
.tabs {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px 10px;
    cursor: pointer;
}
.active {
    background: skyblue;
}
</style>