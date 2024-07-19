# Props

## Props声明
```
// 使用 <script setup>
// 数组形式
defineProps({
  title: String,
  likes: Number
})

// 对象形式
defineProps({
  title: String,
  likes: Number
})
```

```
// 使用 <script setup lang="ts">
defineProps<{
  title?: string
  likes?: number
}>()
```

## 单向数据流
```
const props = defineProps(['foo'])

// ❌ 警告！prop 是只读的！
props.foo = 'bar'
```

