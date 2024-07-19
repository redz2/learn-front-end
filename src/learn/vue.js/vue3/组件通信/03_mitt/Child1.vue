<template>
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>

    <!-- 触发事件 -->
    <button @click="emitter.emit('sendToy', toy)">
        把玩具给弟弟
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emitter from './utils/emitter';

let toy = ref('奥特曼')
</script>

<!-- 这个组件比较闲，看到Child2绑定了一个事件，就去触发一下，并且传入一个参数 -->

