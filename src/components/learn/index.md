# Vu3核心语法
1. 选项式API与组合式API区别

2. setup的语法糖

3. toRefs和toRef的使用
let person = reactive{
    name: "zhouyi",
    age: 31
}
<!-- toRefs解构reactive类型的数据，并且修改name的值，person中的name值也会修改 -->
let {name,age} = toRefs(person)
<!-- toRef，不常用 -->
let name = toRef(person, "name")

4. computed：计算属性(尽可能让template比较简单)
<!-- 单向绑定，数据渲染到页面上 -->
<input type="text" :value="firstname">
<!-- 单向绑定，数据渲染到页面上 -->
<input type="text" v-model="firstName">
<input type="text" v-model="lastName">
let fullName = computed(()=>{
    <!-- 必须有返回值，依赖的数据发生变化，计算属性会重新计算 -->
    <!-- 方法没有缓存，计算属性有缓存 -->
    <!-- 计算属性是只读，无法直接修改fullName！！！ -->
    return firstName + lastName
})

let fullName = computed(()=>{
    get(){},
<!-- 如何设置fullName的值？使用接收到的值，去修改firstName和lastName -->
    set(val){
        let {fn,ln} = val
        firstName = fn
        lastName = ln
    }
})

5. watch：监视数据的变化（ref/reactive/一个getter函数/一个包含上述内容的数组）
举例：比如分数大于80时触发什么动作
watch(你要监视谁，执行回调函数)

* 情况一：监视ref基本数据类型（用的比较多！！！）
let sum = ref(0)
const stopWatch = watch(sum,(newValue,oldValue)=>{
    console.log("sum变化了",newValue,oldValue)
    <!-- 如何停止监视 -->
    if sum.value >= 10 {
        stopWatch
    }
})

* 情况二：监视ref对象类型数据
监视的是对象类型的地址值
若想监视对象内部属性的变化，需要开启深度监视
watch(person,(newValue,oldValue)=>{
    <!-- 
        如果只修改属性，newValue和oldValue都是新值，因为还是那个对象
        一般开发时只关心newValue，不会去关心oldValue，(value) => {} 
    -->
    console.log("person变了",newValue,oldValue)
},{
    deep: true,
    <!-- 一开始就会执行一次，新值就是当前值，旧值就是undefined -->
    immediate: true,
})

* 情况三：监视reactive对象类型数据（默认是开启深度监视的，并且没法关闭）「隐式创建深层监视」
新旧值肯定是一样的，对象一直是之前的对象

* 情况四：监视ref或reactive数据的某个属性 （用的比较多！！！）
    * 若该属性不是对象类型，需要写成函数形式
    * 若该属性是对象类型，建议写成函数形式

<!-- 不能这么写 -->
watch(person.name,()=>{
    <!-- 不能这么写，会报错！！！ -->
})
<!-- 需要加工成getter函数 -->
watch(()=> person.name,()=>{
    <!-- 监视响应式对象的某个属性，如果是基础类型，需要写成函数形式 -->
    <!-- 监视响应式对象的某个属性，如果是对象类型，建议写成函数形式 -->
})

* 情况五：同时监控多个数据

6. watchEffect（用的比较多！！！）
* watch需要指名道姓监视某个值
* watchEffect比较智能，会自己分析；并且会立即执行一次，相当于配置了immediate: true;
watchEffect(()=>{
    <!-- watchEffect会分析用到了哪些变量 -->
})

7. ref属性
* html标签: 获取的是DOM节点
* 组件标签: 获取的是组件实例对象
<div ref="x"></div>

import {ref,defineExpose} from 'vue'
let x = ref()
defineExpose({a,b,c})


# 父子组件
1. defineProps

# 组件生命周期
生命周期——生命周期函数——生命周期钩子

Vue2
1. 创建(beforeCreate,created)
2. 挂载(beforeMount,mounted)
3. 更新(beforeUpate,updated)
4. 销毁(beforeDestroy,destroyed)

Vue3
1. 创建(setup)
2. 挂载(onBeforeMount,onMounted)
3. 更新(onBeforeUpate,onUpdated)
4. 卸载(onBeforeUnmounted,onUnmounted)

自定义hooks
命名为 useXXX.js/useXXX.ts

npm i axios
<!-- 这么写不优雅，axios使用拦截器来处理错误 -->
async function getDog(){
    try {
        <!-- 异步发送请求 -->
        let result = await axios.get("http://dog.ceo/api/breed/pembroke/images/random")
        console.log(result.result)
    } catch(error){
        <!-- 处理异常 -->
        alert.error
    }
}

function getDog(){
    axios.get("http://dog.ceo/api/breed/pembroke/images/random").then(
        response => {},
        error => {}
    )
}


