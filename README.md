<p align="center">
  <a href="https://opentiny.design/tiny-vue" target="_blank" rel="noopener noreferrer">
    <img alt="OpenTiny Logo" src="logo.svg" height="100" style="max-width:100%;">
  </a>
</p>

<p align="center">An enterprise-class UI component library, support both Vue.js 2 and Vue.js 3, as well as PC and mobile.</p>

# TinyVue Nuxt

> [TinyVue](https://opentiny.design/tiny-vue/zh-CN/smb-theme/overview) module for [Nuxt](https://nuxt.com)

## Features

- Automatically import components and styles on demand.
- Automatically import directives and styles on demand.
- Automatically import icons from [@opentiny/vue-icon](https://github.com/opentiny/tiny-vue/tree/dev/packages/vue-icon).

## Installation

Install @opentiny/vue and @opentiny/nuxt dependencies.

```bash
pnpm i @opentiny/vue @opentiny/nuxt -D
```

Configure the "@opentiny/nuxt" module in nuxt.config.ts file.

```ts
export default defineNuxtConfig({
  modules: ['@opentiny/nuxt'],
  build: {
    transpile: [/@opentiny/]
  }
})
```

Now you can use Tinyvue components in your nuxt-app.

## Usage

```vue
<template>
  <tiny-layout>
    <p>基本按钮</p>
    <tiny-row>
      <tiny-button type="primary" native-type="submit"> 主要按钮 </tiny-button>
      <tiny-button> 次要按钮 </tiny-button>
      <tiny-button type="success"> 成功按钮 </tiny-button>
      <tiny-button type="info"> 信息按钮 </tiny-button>
      <tiny-button type="warning"> 警告按钮 </tiny-button>
      <tiny-button type="danger"> 危险按钮 </tiny-button>
    </tiny-row>
  </tiny-layout>
</template>
```

Refer to the [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) use.

## Development

- Run `pnpm i` to install the dependencies.
- Run `pnpm dev:prepare` to generate type stubs.
- Run `pnpm dev` to start playground in development mode.
- Run `pnpm dev:build` to build playground.
- Run `pnpm build` to build this project.

# 贡献指南

十分感谢您愿意贡献本项目，阅读本指南有助于您更好的参与贡献。

## 前置准备

### Clone仓库

- 点击TinyVue代码仓库 (https://github.com/opentiny/tiny-vue-nuxt) 右上角的Fork按钮，将上游仓库Fork到个人仓库
- Clone个人仓库到本地

### 依赖安装

- TINY-VUE根目录运行如下代码，安装依赖

```bash
pnpm i
```

- 运行如下代码，启动本地代码编译开发

```bash
pnpm dev
```

### 关键代码说明

- module.ts文件

在您的应用程序中自动注册本地模块，这是在构建应用程序时放置您开发的任何本地模块的好地方，而无需将这些本地模块单独添加到 nuxt.config.ts 中。

在本项目代码中，这个文件的主要作用是定义一个 Nuxt 模块，允许用户在使用 Vite 构建工具时，自动导入以 Tiny 开头的 Vue 组件。

- nuxt.config.ts文件

nuxt.config.ts 文件是一个 Nuxt.js 项目的配置文件