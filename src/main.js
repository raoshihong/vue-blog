// 引入vue,默认引入的是vue模块下的vue.runtime.common.js包,如果要引入vue.js包,则需要配置webpack.config.js中的resolve
import Vue from "vue"
//引入自定义的vue组件
import App from "./App.vue"

//创建一个vue实例
var vm = new Vue({
    el:"#app",//挂载id=app的标签
    render:createElement=>createElement(App)
});