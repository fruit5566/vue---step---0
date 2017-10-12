#### vue-simple简化版 
简单的.vue组件 + 简配的webpack


#### 加载器
- vue-loader : 把.vue文件组件转换成纯js模块
- file-loader: 处理图片
- babel-loader: 把es6转换成es5

#### 其他包
- vue: vue核心库.
- babel-core: babel-loader的依赖, 需显示安装.
- css-loader: vue-loader的依赖，处理.vue文件里的样式, 需显示安装.
- vue-template-compiler: vue-loader的依赖, 需显示安装.

#### 构建工具
- webpack: 打包工具
- webpack-dev-server 额外提供一个简单的 web 服务器，热加载. 用于开发环境.


#### 命令
- npm i : 安装依赖包
- npm run start : 调用package.json里的命令 'webpack-dev-server  --open' 
- npm run build:  command in package.json ---'webpack'打包

#### 文件结构
- index.js : js入口文件，编译成 bundle.js
- index.html : html模板  引用编译后的 bundle.js 
- index.vue : vue单文件组件.同一个组件的html,css,javascript写在一个文件里,所以需要vue-loader解析.
- webpack.config.js:  webpack默认配置文件

#### PS
 - "webpack-dev-server --open" 生成的bundle在web服务器内存中, 不会显式写入文件.
 - 对比"webpack"命令, 会显式生成bundle.js
 
  


