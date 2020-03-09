<template>
    <div>
        <!-- 使用router-link -->
        <router-link to="/user_list">用户列表</router-link>
         <router-link to="/user_detail">用户详情</router-link>
         <!-- 匹配到的路由的视图展示在这里 -->
         <router-view></router-view>
    </div>
</template>
<script>

//引入自定义路由
import router from "./router.js"

//暴露一个vue对象
export default {
    //注册路由
    router:router
}

</script>
<style scoped>

</style>