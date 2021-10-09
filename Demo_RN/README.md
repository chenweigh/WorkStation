# React Native 相关笔记

## 新建项目

- `npx react-native init project`
- `yarn ios` 、`yarn android` 、 `npm run ios` 、`yarn react-native run-ios`
- `yarn start -- --reset-cache` `watchman watch-del-all && npm start --reset-cache`

### Run

#### Android

- `npx react-native run-android`

#### iOS

- `npx react-native run-ios` 或 `xed -b ios`

## Code Push

### `App Center CLI`

> `code push` 的管理工具，`npm install -g appcenter-cli`， [官网](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli) [中文解读](https://juejin.cn/post/6844904073309716494#%E5%8A%A8%E6%80%81%E9%83%A8%E7%BD%B2%E5%88%86%E9%85%8D)

#### 新建应用

- `appcenter apps create -d <appName> -o <operatingSystem> -p <platform>`
  - `appcenter apps create -d Feature-ios -o iOS -p React-Native`
  - `appcenter apps create -d Feature-android -o Android -p React-Native`

#### 应用部署

- `appcenter codepush deployment add -a <ownerName>/<appName> Staging`
- `appcenter codepush deployment add -a <ownerName>/<appName> Production`

#### 发布应用更新

```appcenter codepush release-react -a <ownerName>/<appName> -d Staging -t 1.0.0 -m --development false --description <description>```

> `-a`，指定应用
> `-d`, 指定发布更新到哪个部署上, 默认 Staging
> `-t`, 指定要更新应用得版本
> `-m`， 是否强制更新，默认 false
> `--development`, 指定是否生成未缩小得开发 js 包，默认 false
> `--description`, 更改日志
