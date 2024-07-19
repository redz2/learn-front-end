<template>
    <h3>子组件2</h3>
    <h4>书籍：{{ book }}</h4>
    <h4>电脑：{{ computer }}</h4>
</template>

<script setup lang='ts'>
import {ref} from 'vue'

let computer = ref('联想')
let book = ref(6)
</script>

<style scoped>
</style>