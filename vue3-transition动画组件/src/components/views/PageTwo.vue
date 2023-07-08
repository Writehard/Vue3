<template>
<div>
    <h1>列表移动过渡</h1>
    <button @click="random">random</button>
    <transition-group tag="div" class="wraps" move-class="mmm">
        <div v-for="item in list" :key="item.id" class="items">
            {{ item.number }}
        </div>
    </transition-group>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import _ from 'lodash'
const list = ref(Array.apply(null,{length:81}).map((_,index)=>{
    return {
        id:index,
        number:(index % 10) + 1
    }
}))
const random = () =>{
    list.value = _.shuffle(list.value);
}

</script>

<style scoped lang="less">
.wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 10 + 9px);
    .items {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
    }
}
.mmm {
    transition:  1s;
}
</style>
<!-- new Array(81)初始化数组，数组：[]只有一个length属性
Array.apply(null,{length:81})初始化 数组 值为undefined 有81个元素  -骚操作
-->