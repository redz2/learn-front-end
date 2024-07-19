<template>
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4 v-show="toy">哥哥给的玩具：{{ toy }}</h4>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import emitter from './utils/emitter';

let computer = ref('联想')
let toy = ref('')

// 绑定一个事件，等待被触发
emitter.on("sendToy", (value:any)=>{
    console.log(value)
    toy.value = value
})

onUnmounted(()=>{
    // 组件卸载时，解绑事件
    emitter.off("sendToy")
})
</script>

<!-- 等待其他人来触发事件，函数实际上是Child2执行的 -->

