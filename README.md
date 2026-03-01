```
vitepress-docs
├─ docs
│  ├─ .vitepress
│  │  ├─ .vite
│  │  │  └─ deps
│  │  │     ├─ chunk-S6B23X5Y.js
│  │  │     ├─ chunk-S6B23X5Y.js.map
│  │  │     ├─ package.json
│  │  │     ├─ vitepress___@vueuse_core.js
│  │  │     ├─ vitepress___@vueuse_core.js.map
│  │  │     ├─ vitepress___@vue_devtools-api.js
│  │  │     ├─ vitepress___@vue_devtools-api.js.map
│  │  │     ├─ vue.js
│  │  │     ├─ vue.js.map
│  │  │     └─ _metadata.json
│  │  ├─ cache
│  │  │  └─ deps
│  │  │     ├─ chunk-LRXXLRMX.js
│  │  │     ├─ chunk-LRXXLRMX.js.map
│  │  │     ├─ chunk-S6B23X5Y.js
│  │  │     ├─ chunk-S6B23X5Y.js.map
│  │  │     ├─ package.json
│  │  │     ├─ vitepress___@vueuse_core.js
│  │  │     ├─ vitepress___@vueuse_core.js.map
│  │  │     ├─ vitepress___@vueuse_integrations_useFocusTrap.js
│  │  │     ├─ vitepress___@vueuse_integrations_useFocusTrap.js.map
│  │  │     ├─ vitepress___@vue_devtools-api.js
│  │  │     ├─ vitepress___@vue_devtools-api.js.map
│  │  │     ├─ vitepress___mark__js_src_vanilla__js.js
│  │  │     ├─ vitepress___mark__js_src_vanilla__js.js.map
│  │  │     ├─ vitepress___minisearch.js
│  │  │     ├─ vitepress___minisearch.js.map
│  │  │     ├─ vue.js
│  │  │     ├─ vue.js.map
│  │  │     └─ _metadata.json
│  │  └─ config.mts     // 配置文件,上面哪些文件都不用管
│  ├─ api-examples.md   //演示使用,可以删除
│  ├─ config            //演示使用,可以删除
│  │  ├─ four.md
│  │  ├─ index.md
│  │  └─ three.md
│  ├─ guide             //演示使用,可以删除
│  │  ├─ index.md
│  │  ├─ one.md
│  │  └─ two.md
│  ├─ index.md          //网站首页内容,可以按需修改
│  ├─ markdown-examples.md  //演示使用,可以删除
│  └─ public
│     └─ svg
│        └─ sun.svg         //网站logo,可以替换为自己的logo
├─ LICENSE
├─ package.json
└─ pnpm-lock.yaml

```

# 使用说明

pnpm run docs:dev //启动本地预览
pnpm run docs:build // 打包

# 部署到github.io方法

进入你的 GitHub 仓库，点击顶部的 Settings
在左侧菜单找到并点击 Pages
在 Source 部分，选择 GitHub Actions

在仓库的 Settings -> Actions -> General 中
找到 Workflow permissions，确保选择了 Read and write permissions
勾选 Allow GitHub Actions to create and approve pull requests
保存设置
