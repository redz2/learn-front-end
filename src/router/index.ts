// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
// 引入组件
import Child from '@/components/Child.vue'

// 第二步：创建路由器
const router = createRouter({
    // 路由器的工作模式
    history: createWebHistory(), 
    // history: createWebHashHistory(), 
    // 一个一个的路由规则
    routes: [
        {
            path: '/child',
            component: Child
        }
    ]
})

// 暴露出去router
export default router

