import {createRouter,createWebHistory,Router,RouteRecordRaw, RouterOptions} from "vue-router"

const routers:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'Home',
        component:()=>import('@/components/Home.vue')
    }
]
const router:Router=createRouter(
    {
        history:createWebHistory(),
        routes:routers
    }
)
export default router;