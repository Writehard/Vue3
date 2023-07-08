<template>
    <div class="content">
        <Dialog style="display: flex;">
            <!-- 具名插槽 -->
            <!-- 简写 -->
            <template #header>
                <div>
                    添加到了上面，HAHHA 。
                </div>
            </template>
            <!-- 匿名插槽 -->
            <!-- 简写 -->
            <!-- <template #default="{data,index}">
                <div>
                    <div>{{ data.name }}--{{ $data.age }}--{{ index }}</div>
                </div>
            </template> -->
            <template v-slot="{data,index}">
                <div>
                    <div>{{ data.name }}--{{ $data.age }}--{{ index }}</div>
                </div>
            </template>
            <template v-slot:footer>
                <div>
                    添加到下面了,yeah。
                </div>
            </template>
            <!-- 动态插槽 -->
            <template #[name]>
                <div>
                    <button>点击</button>
                </div>
            </template>
        </Dialog>
    </div>
</template>
<script setup lang='ts'>
import { ref } from "vue";
import Dialog from "./components/Dialog/index.vue"
let name = ref('header');
</script>
<style scoped lang="less">

</style>
<!-- 总结 -->
<!-- 插槽是子组件中提供给父组件使用的一个占位符，用<slot :data="(item)" :index="index"></slot>表示，
父组件可以在这个占位符填充任何代码，如html、组件等。填充内容会替换子组件<slot></slot>标签 -->
<!-- 插槽的类型 -->
<!-- 匿名插槽 -->
            <!-- <template v-slot>
                <div>
                    <button>点击</button>
                    <p>你好我是wick</p>
                </div>
            </template> -->
            <!-- <main class="main">
                <slot></slot>
            </main> -->
<!-- 简写 -->
            <!--<template #default="{data,index}">
                <div>
                    <div>{{ data.name }}--{{ $data.age }}--{{ index }}</div>
                </div>
            </template> -->
<!-- 具名插槽 -->
<!-- <slot name="footer"></slot> -->
<!-- <template v-slot:footer> -->
<!-- 简写 -->
<!-- <template #header> -->
<!-- 动态插槽 - 使用变量 -->
<!-- <template #[name]></template> -->
<!-- name在 script中注册的常量 -->


