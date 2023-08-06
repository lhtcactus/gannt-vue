## 前言
该项目是一个使用vite脚手架搭建的vue3项目，使用了eslint+stylelint+prettier来对我们的代码质量做检测和修复，没有集成其他框架

## 技术栈
vue3+eslint+stylelint+prettier
## 项目结构
```
.
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   └── vite.svg
├── scritps 脚本存放处
│   └── preinstall.js 执行install前置脚本，为了限制只能使用pnpm install，保证包管理工具一致
├── src
│   ├── App.vue
│   ├── assets
│   │   └── vue.svg
│   ├── global
│   │   └── components 全局统一组件
│   │       └── Test.vue 一个全局组件样例
│   ├── main.ts
│   ├── styles 全局统一样式scss
│   │   ├── index.scss 全局统一样式
│   │   ├── reset.scss 清除默认样式
│   │   └── variable.scss scss全局变量
│   ├── views 组件文件夹
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
## 项目命令
```
# 安装依赖
pnpm install

# 开启本地服务器localhost:5173
pnpm run dev

# 发布环境
pnpm run build

# 校验代码
pnpm run lint

# 自动纠错
pnpm run fix

# 自动格式化代码
pnpm run format
```