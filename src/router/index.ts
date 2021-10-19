import {createRouter,createWebHistory,Router,RouteRecordRaw} from "vue-router"

const routers:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'Home',
        component:()=>import('@/components/Home.vue')
    },{
        path:'/docs',
        name:'Docs',
        component:()=>import('@/components/Docs.vue')
    }
]
const router:Router=createRouter(
    {
        history:createWebHistory(),
        routes:routers
    }
)
export default router;