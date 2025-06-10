# react 业务
friedns 数据
App
挂载点
页面的显示
- 原生JS
  DOM 编程
  底层API 不够高效
  聚焦于业务
  前端切图崽 (html,css + 一点js) -> 前端开发工程师(微博、美团)
  框架(vue/react) -> node全栈开发(node + 数据库) -> react native Android/ios App -> AIGC AI 应用开发 -> 全栈开发工程师
  Web应用(www.baidu.com)  移动应用(Android,IOS)
  Node(server) AI 统领一切 JS
    
  ## 项目的创建
  - npm 是上面 node package manager
   node 包管理器 安装react package App开发能力
   - npm init vite
     按vite 模板初始化项目 init
     vite vue/react 项目模板和工程化
- 选一些配置
  - react
  - js
  项目模板，基于它开始开发
  - cd 项目名
  - npm i 安装依赖
  node_modules 依赖包
  - npm run dev 启动项目
  - npm run build 打包项目

  # 5 w
  - what Web App
  - how npm init vite 初始化vite的项目模板
  - 安装依赖
  - 启动应用 http 5173  react 技术栈 Web App
  远离JS API 编程，面向业务
## 响应式业务
## TODOS 任务列表
   - 数据 ['脱单'，'学习'，'购物']
    数据在页面上渲染 react 提供点啥 支持这个业务

## react 初体验
- react 组件是完成开发任务的最小单元
- 组件组合html,css,js
- 组件是一个函数
- 返回html
- 函数体里面return之前可以申明数据和业务逻辑
- {}  js 表达式 不用写DOM API
  
## 响应式数据
- 数据会发生改变的，数据状态 state
- [todos,setTodos] = useState(初始值) 使用一个数据状态，返回一个数组，第一个元素是数据项，第二个元素是修改数据项的方法