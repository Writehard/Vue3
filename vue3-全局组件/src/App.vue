<template>
<div>
  <!-- 局部组件 -->
  <TreeVue :data="data"></TreeVue>
  <Card></Card>
</div>
</template>
<script setup lang='ts'>
// import CardVue from './components/expame/Card.vue';
import TreeVue from './components/expame/Tree.vue';
import { reactive } from 'vue';
interface Tree {
    name: string,
    checked: boolean,
    children: Tree[]
}
const data = reactive<Tree[]>([
    {
        name: '1',
        checked: false,
        children: [
            {
                name: "1-1",
                checked: false
            }
        ]
    },
    {
        name: '2',
        checked: false,
    },
    {
        name: '3',
        checked: false,
        children: [
            {
                name: "3-1",
                checked: false,
                children: [
                    {
                        name: '3-1-1',
                        checked: false,
                    }]
            }
        ]
    }
])
</script>
<style scoped>
</style>