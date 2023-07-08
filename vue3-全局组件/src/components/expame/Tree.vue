<template>
    <div @click.stop="clickTap(item, $event)" v-for="item in data" class="tree">
        <input type="checkbox" v-model="item.checked"> <span>{{ item.name }}</span>
        <!-- 递归 -->
        <!-- 可选链操作符 -->
        <wick v-if="item?.children?.length" :data="item?.children"></wick>
        <!-- 只能处理undefined 和 null  -->
        <!-- item.children?.length=====>undefined   item.children?.length?.xxx?.dsdsda??[] ===> [] -->
        <!-- ??只处理undefined null 不会处理0 flase -->
        <!-- v-if 会做隐式类型转换 -->
    </div>
</template>
<script setup lang='ts'>
interface Tree {
    name: string,
    checked: boolean,
    children: Tree[]
}
defineProps<{
    data?:Tree[]
}>()
// 使用宏
defineOptions({
    name:"wick"
})
const clickTap = (item:Tree, e) =>{
    console.log(e.target)
}

</script>

<style scoped>
.tree {
    margin: 0 auto;
}
</style>