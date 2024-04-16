# SNAP-FE

前端目前采用的是 React + Taro 框架，UI部分调用taro-UI库

### 部署流程

#### Step 1

安装`Taro`环境依赖，下载安装`Node.js`

[Node.js官网](https://nodejs.org/en/)

建议下载`20.11.0`版本，避免版本不匹配导致的麻烦

在终端输入`node -v`得到如下输出，即为安装成功

```powershell
PS D:\SNAP-dev\SNAP> node -v
v20.11.0
```

> PS：如果已经安装过node.js，可以下载一个nvm进行版本切换，具体使用教程自行查阅啦~

#### Step 2

安装Taro，在终端输入命令` npm i -g @tarojs/cli` 安装 Taro CLI。在终端输入命令 taro，如果出现类似内容就说明安装成功了：

```
PS D:\SNAP-dev\SNAP> taro
👽 Taro v3.6.26
```

#### Step 3

安装vscode，推荐安装 ESLint 插件

#### Step 4

```
git clone git@github.com:SNAP-DEVELOP/SNAP-FE.git
```

clone到本地，cd到`SNAP-FE`目录

输入`npm install`安装依赖（没有报`npm ERR! `应该就是成功了）

#### Step 5

配置taro-UI
输入`npm install taro-ui`进行安装

> 我在这部分配置的时候遇到了问题，我还进行了`npm i --D @tarojs/plugin-sass`的配置，给taro配置sass，但这部分的安装我没有成功，跑了一半就报错了，不知道这一步有没有起作用

taro-ui可以进行全局的自定义主题，我们后面参考这个文档，修改主题配色等，适配我们的产品->[自定义主题配置](https://taro-ui.jd.com/#/docs/customizetheme)

##### taro-ui的使用

1. 要在程序入口的文件添加`import "taro-ui/dist/style/index.scss";`（我已经完成啦，后面的程序都不用考虑这一步啦）
2. 在每个页面最顶上import这个页面使用的taro-ui库，如：`import { AtButton } from "taro-ui";`具体可以参考一下`src\pages\index\index.jsx`里简单的使用~

#### Step 6

运行，在终端输入`npm run dev:weapp`

```powershell
PS D:\SNAP-dev\SNAP> npm run dev:weapp

> SNAP@1.0.0 dev:weapp
> npm run build:weapp -- --watch


> SNAP@1.0.0 build:weapp
> taro build --type weapp --watch

👽 Taro v3.6.26

提示  appid     touristappid
生成  工具配置  D:\SNAP-dev\SNAP\dist/project.config.json
启动  开发者工具-项目目录  D:\SNAP-dev\SNAP\dist
Prebundle dependencies:
     @tarojs/plugin-framework-react/dist/runtime
     @tarojs/plugin-platform-weapp/dist/runtime
     @tarojs/runtime
     @tarojs/taro
     react
     react-dom
     react/jsx-runtime


✔ Webpack
  Compiled successfully in 1.68s

→ Watching... [2024/4/15 20:02:16]


✔ Webpack
  Compiled successfully in 27.59s

→ Watching... [2024/4/15 20:02:45]

```

下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，然后选择项目根目录进行预览。
