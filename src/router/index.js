import VueRouter from 'vue-router'
//引入路由组件
import Nearly from '../pages/Nearly'
import Dayly from '../pages/Dayly'
import Single from '../pages/Single'
import Addblog from '../pages/Addblog'
// 创建并暴露路由器
export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/near'
        },
        {
        name:'nearly',
        path:'/near',
        component:Nearly
        },
        {
            name:'all',
            path:'/all',
            component:Dayly
        },
        //使用多级路由，path不用加 /
        {
            name:'single',
            path:'/singles',
            component:Single,
            // props配置函数写法
            props($route){
                return {userId:$route.params.userId,title:$route.params.title,body:$route.params.body}
            }
        },
        {
            name:'addblog',
            path:'/add',
            component:Addblog
        }
    ]
})