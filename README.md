> 1.创建项目目录
    mkdir vue-blog
> 2.初始化node项目
    npm init -y
> 3.添加项目源文件
src 目录
    index.html  web入口文件
    main.js   js入口文件
> 4.安装webpack
    cnpm i webpack -g   ,有时候在window下全局安装成功,但是在执行npm run dev时可能出问题,则可以将webpack安装到本地项目中,执行  cnpm i webpack --save-dev ,  cnpm i webpack-cli --save-dev
> 5.在项目根目录添加webpack.config.js配置文件
   添加webpack配置
> 6.测试webpack打包是否成功
    webpack
> 7.安装webpack-dev-server
    cnpm i webpack-dev-server -D
> 8.配置webpack-dev-server
    在package.json中配置script脚本,执行webpack-dev-server命令,在webpack.config.js中配置webpack-dev-server的运行参数
> 9.测试webpack-dev-server是否安装配置成功  
    cnpm run dev
> 10.安装html-webpack-plugin插件,并配置
    cnpm i html-webpack-plugin -D
    安装好后，需要在webpack.config.js中配置插件plugin
> 11.安装vue
    cnpm i vue -S
> 12.安装vue相关的loader,并配置
    webpack默认无法解析编译.vue文件,需要安装对应的loader
    cnpm i vue-loader vue-template-compiler -D
    安装完后，需要在webpack.config.js中配置相应的module.rules规则  {test:/\.vue$/,use:['vue-loader']}
    还需要需要在webpack.config.js中添加VueLoaderPlugin插件
    如果是引用vue.js的则需要在webpack.config.js中配置resolve
> 13.安装vue-router
    cnpm i vue-router -S
> 14.安装css相关的loader,并配置loader规则
    标准css的loader,需要安装 style-loader ,css-loader ,通过cnpm i style-loader css-loader -D 安装, 安装完后配置loader规则  {test:/\.css$/,use:['style-loader','css-loader']}
    配置less的loader ,通过cnpm i less-loader less -D 安装 ,再配置loader规则 :{test:/\.less$/,use:['style-loader','css-loader','less-loader']}
    配置scss的loader ,通过cnpm i sass-loader node-sass -D 安装,再配置loader规则:{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
> 15.安装url和图片及字体相关的loader,并配置loader规则
    安装loader
    cnpm i url-loader file-loader -D
    //配置图片规则
    {test:/\.(jpg|png|bmp|jpeg|gif)$/,use:'url-loader?limit=10240&name=[name].[ext]'},
    //配置字体规则
    {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}
> 16.安装babel对class语法的支持
    先安装插件工具
    cnpm i babel-core@6 babel-loader@7 babel-plugin-transform-runtime -D
    再安装语法工具
    cnpm i babel-preset-env babel-preset-stage-0 -D
> 17.添加.babelrc配置文件
    配置babel的插件和语法
> 18.在webpack.config.js中添加babel的配置
    在webpack.config.js中添加babel-loader的配置规则
> 19.使用vue
    在main.js中引入vue,进行vue的开发
    在index.html中定义一个vue容器标签
    在src下新建App.vue文件

