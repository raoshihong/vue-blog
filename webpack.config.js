//webpack支持node语法
//使用node中的require导入path模块
const path = require("path");

//引入html-webpack-plugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

//引入VueLoaderPlugin插件
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 或者 

const { VueLoaderPlugin } = require('vue-loader')

//使用node中的模块语法暴露对象
module.exports = {
    //设置编译打包环境
    mode:"development",
    //设置入口
    entry:"./src/main.js",
    //设置编译输出
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bundle.js"
    },
    //配置webpack-dev-server的运行参数
    devServer:{
        open:true,
        hot:true,
        port:8080,
        contentBase:"src"
    },
    plugins:[//配置插件
        new HtmlWebpackPlugin({
            filename:"index.html",//输出的文件名称
            template:"./src/index.html"//指定使用模板
        }),
        new VueLoaderPlugin()//创建插件的实例
    ],
    module:{//配置loader加载模块规则
        rules:[
            //通过正则匹配规则,使用对应的loader来加载处理,loader的加载顺序为从右到做
            {test:/\.vue$/,use:['vue-loader']},
            //配置标准的css规则,先加载css-loader,再加载style-loader
            {test:/\.css$/,use:['style-loader','css-loader']},
            //配置less规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //配置scss规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //配置图片规则
            {test:/\.(jpg|png|bmp|jpeg|gif)$/,use:'url-loader?limit=10240&name=[name].[ext]'},
            //配置字体规则
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            //配置babel对class的解析支持
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/}
        ]
    },
    resolve:{
        alias:{//指定使用import导入vue时,使用vue.js,而不是vue.runtime.common.js
            "vue$":'vue/dist/vue.js'
        }
    }
}