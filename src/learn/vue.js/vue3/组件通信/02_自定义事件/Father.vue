<template>
    <div class="father">
        <h3>父组件</h3>
        <!-- 
            给子组件绑定事件 
            1. 如何触发haha事件？点击子组件的按钮，emit触发haha事件，并且子组件给父组件传了个参数
            2. 和click事件类似，haha事件被触发后，就调用xyz函数
            3. 调用xyz函数时，传入子组件的传的参数，就实现了子传父的效果
        -->
        <h4>Child绑定haha事件(点击按钮才能触发emit)</h4>
        <Child @ha-ha="xyz"></Child>
        <hr>
        <h4>Child绑定点击事件(页面上随便点哪)</h4>
        <!-- 
            1. 点击触发事件
            2. 调用函数
        -->
        <Child @click="abc"></Child>
    </div>
</template>

<script setup lang="ts">
import Child from '@/learn/vue.js/vue3/组件通信/02_自定义事件/Child.vue';

// 子组件把数据传递过来
function xyz(value:string){
    console.log(value)
}

function abc(){
    console.log("click 点击事件")
}
</script>


