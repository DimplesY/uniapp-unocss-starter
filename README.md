# uniapp + typescript + unocss starter

## 项目说明
> uniapp + vue3 + typescript + unocss 基础模版

- 整合 [unocss](https://github.com/unocss/unocss) 作为css框架

- 整合 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 自动导入API

- 整合 [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend)

- 整合 [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) 做类名转换

- 使用 [eslint](https://eslint.org) 与 [prettier](https://prettier.io) 做代码风格约束, 使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config)作为基础配置，用户可根据需求自行修改

## 项目启动方式

### 一、下载项目 
```sh
git clone git@github.com:DimplesY/uniapp-windicss-starter.git
# or 使用项目作为模版
npx degit git@github.com:DimplesY/uniapp-windicss-starter.git
```

### 二、安装依赖
```sh
yarn 
# or
npm install
```
### 三、启动项目

- 如：微信小程序
```sh
yarn dev:mp-weixin
# or
npm run dev:mp-weixin
```