<p align="center">
  <a href="https://bitjjj.github.io/element-plus-plus/" target="_blank">
    <img
      src="https://bitjjj.github.io/element-plus-plus/logo.png"
      alt="Element Plus Plus"
      width="100"
    />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/element-plus-plus">
    <img src="https://img.shields.io/npm/v/element-plus-plus" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/element-plus-plus">
    <img src="https://img.shields.io/npm/dm/element-plus-plus" alt="Download">
  </a>
  <a href="https://github.com/bitjjj/element-plus-plus/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/element-plus-plus" alt="LICENSE">
  </a>
</p>

简体中文 | [English](/README.md)

Element Plus Plus 是基于Element Plus的扩展组件库，提供了一系列在项目中常用的组件封装。

## 组件列表

- Alias，优化多重循环，定义临时变量，方便模板中以简洁的方式访问临时变量
- AvatarList，一组用户头像，常用在项目/团队成员列表
- Banner，横幅通常用于标识全页的状态或通知等
- ConfirmableButton，通常用于需要再次确认的操作
- DockContainer，主要用来收纳折叠起来的ModelessDialog
- ***ModelessDialog，非模态对话框，支持最大化，最小化，收起，展开，拖拽改变大小等功能***
- OverflowList，通常用于表格操作列，当操作项比较多时，可利用此组件进行操作的显隐
- Panel，面板组件，类似于Card组件，但更灵活多变
- SimpleTable，非常轻量的表格组件，只使用`HTML table`实现常见功能
- Spinner，展示一个 “加载中” 的工作状态
- TextOverflow，通过设置文本长度或者组件width使文本出现溢出效果
- TreeTransfer，对树形结构进行选择操作

## 安装

```shell
# npm
$ npm install element-plus-plus --save

# yarn
$ yarn add element-plus-plus

# pnpm
$ pnpm add element-plus-plus
```

## 相关文档

[官方文档](https://bitjjj.github.io/element-plus-plus/zh-CN/)


## 本地开发

```shell
# 安装项目依赖和初始化构建
$ pnpm install

# 开发示例
$ pnpm dev

# API文档
$ pnpm docs:dev

# 打包组件库
$ pnpm build
```

## 开源协议

该项目的代码和文档基于 [MIT](/LICENSE) 开源协议。