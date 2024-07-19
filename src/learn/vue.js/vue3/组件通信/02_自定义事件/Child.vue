<template>
    <div class="child">
        <h3>子组件</h3>
        <!-- 
            具体过程：
            1. 子元素中点击按钮触发haha事件
            2. 给事件注入参数
            3. 调用Father中的xyz函数，并传入参数
         -->

        <!-- 子元素触发haha事件，通过事件触发调用父元素xyz -->
        <button @click="emit('ha-ha', 'button触发了haha事件，调用父元素的xyz打印了这段话')">点击触发haha事件</button>
    </div>
</template>

<script setup lang="ts">
// 1. 声明触发的事件（事件名称推荐使用my-event形式）
const emit = defineEmits(['ha-ha'])

// 2. 如何触发事件？其实有很多方式来触发
// onMounted(()=>{
//     setTimeout(()=>{
//         emit("haha")
//     },3000)
// })
</script>