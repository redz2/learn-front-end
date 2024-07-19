<template>
    <!-- 这里的$event是标准事件对象 -->
    <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
</template>

<script setup lang='ts'>
// 定义一个属性
defineProps(['modelValue'])
// 定义一个事件（emit就是用来发射参数的）
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
</style>