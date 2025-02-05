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

[简体中文](/README.zh.md) | English

Element Plus Plus is an extension component library based on Element Plus, providing a series of commonly used component encapsulations for projects.

## Component List

-   Alias: Optimizes multiple loops, defines temporary variables, and facilitates concise access to temporary variables in templates.
-   AvatarList: A group of user avatars, commonly used in project/team member lists.
-   Banner: Banners are usually used to indicate full-page status or notifications.
-   ConfirmableButton: Usually used for operations that require reconfirmation.
-   DockContainer: Mainly used to store collapsed ModelessDialogs.
-   ***ModelessDialog: A non-modal dialog box that supports maximize, minimize, collapse, expand, and drag-to-resize functionality.***
-   OverflowList: Usually used for table operation columns. When there are many operation items, this component can be used to show or hide operations.
-   Panel: A panel component, similar to the Card component, but more flexible.
-   SimpleTable: A very lightweight table component that uses only `HTML table` to implement common functions.
-   Spinner: Displays a "loading" working state.
-   TextOverflow: Creates text overflow effects by setting the text length or component width.
-   TreeTransfer: Performs selection operations on tree structures.

## Installation

```shell
# npm
$ npm install element-plus-plus --save

# yarn
$ yarn add element-plus-plus

# pnpm
$ pnpm add element-plus-plus
```

## Related Documentation

[Official Documentation](https://bitjjj.github.io/element-plus-plus/en-US/)

## Development

```shell
# Install project dependencies and initialize the build
$ pnpm install

# Develop examples
$ pnpm dev

# API Documentation
$ pnpm docs:dev

# Build the component library
$ pnpm build
```

## License

Element Plus Plus is open source software licensed as [MIT](/LICENSE).