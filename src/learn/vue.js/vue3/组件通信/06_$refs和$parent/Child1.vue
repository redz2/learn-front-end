<template>
    <h3>子组件1</h3>
    <h4>书籍：{{ book }}</h4>
    <h4>玩具：{{ toy }}</h4>
    <button @click="minusHouse($parent)"></button>
</template>

<script setup lang='ts'>
import {ref} from 'vue'

let toy = ref('奥特曼')
let book = ref(3)

// 
function minusHouse(parent:any){
    parent.value.house -= 1
}


// 把数据交给外部（define都是宏函数）
defineExpose({toy,book})
</script>

<style scoped>
</style>