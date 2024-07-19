<template>
    <h3>父组件</h3>
    <h4>房产：{{ house }}</h4>
    <!-- 给子组件添加标识 -->
    <Child1 ref="c1"></Child1>
    <Child2 ref="c2"></Child2>
    <button @click="changeToy">按钮</button>
    <button @click="changeComputer">按钮</button>
    <button @click="getAllChild($refs)">让所有孩子的书多3本</button>
</template>

<script setup lang='ts'>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import {ref} from 'vue'
let house = ref(4)

// 父亲通过ref修改了子组件的数据
// 和普通html标签上添加ref有啥区别？
let c1 = ref()
let c2 = ref()

// 如何一次性获取所有子组件实例对象
function changeToy(){
    c1.value.toy = "小猪佩奇"
}
function changeComputer(){
    c2.value.computer = "dell"
}
function getAllChild(refs:{[key:string]:any}){
    for(let key in refs){
        refs[key].book += 3
    }
}

defineExpose({house})
</script>

<style scoped>
</style>