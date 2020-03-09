import Vue from "vue"

//引入vue-router
import VueRouter from "vue-router"

//引入自定义的组件
import UserDetail from "./components/UserDetail.vue"
import UserList from "./components/UserList.vue"

//明确指定使用vue-router
Vue.use(VueRouter);

//创建路由对象

const vueRouter = new VueRouter({
    //指定路由属性
    routes:[
        {path:'/user_detail',component:UserDetail},
        {path:'/user_list',component:UserList},
    ]
});

//将路由暴露出去
export default vueRouter;