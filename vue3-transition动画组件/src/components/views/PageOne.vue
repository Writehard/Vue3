<template>
<div class="content">
    <div class="wraps">
        <button @click="add">add</button><button @click="pop">pop</button>
        <transition-group tag="section"
        leave-active-class="animate__animated animate__hinge"
        enter-active-class="animate__animated animate__hinge"
        >
            <div v-for="item in list" :key="item" class="item">{{ item }}</div>
        </transition-group>
        
    </div>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const list = reactive([1,2,3,4,5,6,7,8,9]);
const add = () =>{
    list.push(list.length + 1);
}
const pop = () => {
    list.pop()
}

</script>

<style scoped lang="less">
.warps {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid black;
    .item {
    margin: 0 10px;
    font-size: 30px;
}
}

</style>
<!-- tag 属性 添加一层标签包裹 -->