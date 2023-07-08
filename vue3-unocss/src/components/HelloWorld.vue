<template>
  <table border="1">
    <tr>
      <th>name</th>
      <th>age</th>
      <th>addr</th>
      <th>操作</th>
    </tr>
    <tr v-for="item in list" :key="item.id">
      <td>{{ item.name }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.addr }}</td>
      <td>
        <btn type="success">编辑</btn>
        <btn type="error">删除</btn>
      </td>
    </tr>
  </table>
</template>

<script setup lang='ts'>
import { reactive, ref, h } from 'vue';
let list = reactive([
  { id: 1, name: 'evanzhe', age: 18, addr: 'ln' },
  { id: 2, name: 'zhe', age: 18, addr: 'ln' },
  { id: 3, name: 'evanzhe', age: 18, addr: 'ln' },
  { id: 4, name: 'zhe', age: 18, addr: 'ln' },
  { id: 5, name: 'evanzhe', age: 18, addr: 'ln' },
  { id: 6, name: 'zhe', age: 18, addr: 'ln' }
])
interface Props {
  type:'success' | 'error'
}
//函数式组件编写一下
//创建的节点 节点的属性 节点的内容
//定义组件状态
const btn = (props:Props, ctx:any) => {
  console.log(ctx);
  return h('button', {
    style:{
      color:props.type==='success'?'green':'red'
    },
    class:'demo',
    onClick: () => {
     if(props.type == 'success'){
      console.log('编辑');
     }else {
      console.log('删除');
     }
    }
  }, 'click')
}
</script>

<style scoped></style>