# v-model
## UI组件库大量使用
这是一个组件，并不是html标签，如何实现的？
```
<Boutton a="1"></Button>
```

## v-model底层原理
1. vue2
```
<AtGuiguInput :value="username" @input="username = $event"></AtGuiguInput>
```
2. vue3
```
 <AtGuiguInput :modelValue="username" @update:modelValue="username = $event"></AtGuiguInput>
```

## 封装组件
v-model（双向绑定）：封装组件后，可以在原先的组件上添加更多功能，样式啥的
