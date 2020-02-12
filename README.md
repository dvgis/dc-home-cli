# vue-element-formwork

> 该模板是由 Vue Cli3 ,Element-ui ,Axios 构建

## 安装

```node
yarn 或者 yarn install
```

### 启动

```node
yarn serve 或者 yarn run serve
```

## 发布

```node
yarn run publish
```

## 说明

### public

> 静态目录

**_conf.json_**: 用于项目整体配置,项目在运行时会请求该文件，并将该配置挂在到全局中

**_index.html_**:Vue 模板文件

### api

> 接口目录

用于与后台交互的接口文件，建议一模块名命名：如 login.js

### components

> 组件目录

该目录下的组件会被自动注册为全局组件，格式需要注意的是每一个组件下必须有一个 index.vue 文件

### layout

> 布局目录

### loader

> 第三方组件装载目录

### router

> 路由配置目录

### store

> Vuex 配置目录

### themes

> 全局样式目录

### views

> 功能页面目录

### main.js

> 程序主入口
