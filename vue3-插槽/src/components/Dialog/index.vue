<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="(item,index) in data">
            <slot :data="(item)" :index="index"></slot>
            </div>
            <!-- <slot></slot> -->
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script setup lang='ts'>
import { reactive } from 'vue';

type names = {
    name:string,
    age:number
}
const data = reactive<names[]>([
    {
        name:"wick is killer1",
        age:201
    },
    {
        name:"wick is killer2",
        age:202
    },{
        name:"wick is killer3",
        age:203
    },{
        name:"wick is killer4",
        age:204
    },

])
</script>
<style scoped lang="less">
.header {
    height: 200px;
    background: red;
    color: #fff;
}
.main {
    height: 200px;
    background: blue;
    color: #fff;
}
.footer {
    height: 200px;
    background: green;
    color: #fff;
}
</style>