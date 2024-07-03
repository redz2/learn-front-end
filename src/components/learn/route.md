# 路由
* 导航区 navigate
* 展示区 page-content

## 注意点
1. 路由组件通常存放在pages或views文件夹，一般组件通常存放在components文件夹（工程化的开发标准）
2. 通过点击组件，视觉上消失的路由组件，默认是被卸载掉的，需要的时候再去挂载

## 路由器的工作模式
1. history模式
    Vue2: mode: 'history'
    Vue3: history: createWebHistory()
    优点：URL更加美观，路径中不带#
    缺点：后期项目上线，服务端需要配合处理路径问题，否则刷新会出现404
2. hash模式
    优点：兼容性更好，服务器端不需要处理路径问题
    缺点：URL带#不太美观，SEO优化方面较差

## to的两种写法
1. 字符串写法   to="/home" 
2. 对象写法1 :to="{path: '/about'}"
3. 对象写法2 :to="{name: 'about'}"
<!-- 多级路由时对象写法比较方便，慢慢看吧 -->

## 嵌套路由

## 路由传参（通过hook的方式传递参数，使用useRoute）
子组件通过useRoute接收参数，父组件中通过RouterLink来传递参数，route.ts只负责处理路由请求

<!-- 接收参数 -->
let route = useRoute()
let {query} = toRefs(route)

1. query参数
<!-- 传递参数 -->
第一种写法：通过模板字符串
<!-- 模板字符串中如何嵌入js？看着就太乱了 -->
<RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&conent=${new.content}`"></RouterLink>

第二种写法: 跳转并携带query参数（to的对象写法）
<RouterLink 
:to="{
    path: '/news/detail', 
    query: {
        id: news.id,
        title: news.title,
        content: news.content
    }
}"
>
    {{news.title}}
</RouterLink>

2. params参数
<!-- y：可传可不传 -->
<RouterLink to="/news/detail/哈哈/你好/"></RouterLink>
{
    path: '/news',
    component: News,
    children: [
        {
            path: 'detail/:x/:y?/:z',
            component: Details
        }
    ]
}

第二种写法: 跳转并携带params参数（to的对象写法）
<!-- 
    1. params不能使用path，只能使用name 
    2. params不能传数组
-->

## 路由的props配置（通过标签的方式传递参数）
一般组件：可以自己写标签
<Details />
<Details id="" name=""  />

路由组件：route.ts中如何传递标签？
{
    name: "news",
    path: "/news",
    component: News,
    <!-- 
        第一种写法：将路由收到的params参数作为props传给路由组件
        props: true
        第二种写法：函数写法，可以自己决定将什么作为props传给路由组件
        props(route){
            return {
                route.query
            }
        },
        第三种写法：对象写法，可以自己决定将什么作为props传给路由组件
    -->
}

<!-- 在组件中如何接收参数？ -->
defineProps(['id', 'content'])

## 路由的replace属性
路由跳转（在RouterLink添加replace）
push：不断在历史记录中添加
replace：直接替换历史记录中的页面


## 编程式路由导航（实际开发中比RouterLink多）
* RouterLink标签最后会变成a元素（页面点击后进行页面跳转）

需求：3秒钟后跳转到其他页面(脱离RouterLink实现路由跳转)
import {useRouter} from 'vue-router'
const router = useRouter()
onMounted(()=>{
    setTimeout(()=>{
        router.push('/news')
    },3000)
})

router.push("和to的写法是一致的")

编程式路由导航使用场景：
1. 只有符合某些条件需要跳转
2. 鼠标划过东西需要跳转（我不点）
3. 其他场景

## 路由重定向 
{
    path: '/',
    redirect: '/home'
}