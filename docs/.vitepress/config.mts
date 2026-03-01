import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
// 站点配置
export default defineConfig({
    // 设置语言
    lang: "zh-CN",
    // 部署站点的基础路径,默认值为"/",如果站点部署在子路径下,则需要设置为子路径,例如"/docs/"
    // base: '/docs/',
    // 网站左上角标题
    title: "osrealm docs",
    // 浏览器标签页标题,:title表示当前标题
    titleTemplate: " :title - osrealm",
    // 网站简介,供搜索引擎抓取,提高网站排名,社交分享时显示,打开f12在head标签中可见
    description: "A VitePress site",
    //<head>标签内要渲染的其他元素,用户添加的标签会在<head>标签之前,vitepress标签之后渲染
    //配置网页标签页logo
    head: [["link", { rel: "icon", href: "/svg/bug.svg" }]],
    //删除url中.html后缀
    cleanUrls: true,
    //指定源目录,默认情况下与项目根目录相同,srcDir是相当于项目根目录解析的,如果修改了源目录,则所有路由均需要对应修改,否则会404
    srcDir: ".",
    //排除应作为源内容输出的.md文件
    srcExclude: ["**/README.md", "**/TODO.md"],
    //项目的构建输出位置,
    outDir: "public",
    //放置生成的静态资源的目录,应位于outDir内,并相对于它进行解析
    assetsDir: "static",
    // 缓存目录,默认值./.vitepress/cache
    cacheDir: "./.vitepress/cache",
    //默认检查所有链接是否有效,是否忽略404链接,默认值为false,不建议忽略404链接,确保所有链接真实有效
    ignoreDeadLinks: false,
    //将页面元素提取到单独的js中,而不是内联到html中,减少负载
    metaChunk: true,
    //是否启用深色模式,避免切换主题时闪烁,true为开启,dark为默认深色模式,light为默认浅色模式,默认为false
    appearance: true,
    //是否使用git获取每个页面最后更新的时间戳,默认为false
    lastUpdated: true,
    // 主题配置
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        //网站左上角logo
        logo: {
            light: "/svg/bug.svg",
            dark: "/svg/bug.svg",
            alt: "/svg/bug.svg",
        },
        // 导航菜单栏配置
        nav: [
            {
                text: "实用网站官网",
                items: [
                    { text: 'vitepress', link: 'https://vitepress.dev/' },
                    { text: 'github', link: 'https://github.com/' },
                ]
            },
            //导航单链接
            //link指向内部页面,填写路由
            { text: "首页", link: "/" },
            //导航多链接
            {
                text: "单层多链接菜单",
                items: [
                    //link指向外部页面,填写url
                    { text: 'vitepress', link: 'https://vitepress.dev/' },
                    { text: 'github', link: 'https://github.com/' },
                ]
            },

            //导航多层多链接
            {
                text: "多层多链接菜单",
                items: [
                    //默认层级,无需层级标题可用
                    { text: 'item a', link: '/api-examples' },
                    { text: 'item b', link: '/markdown-examples' },
                    {
                        text: "我是2层",
                        items: [
                            { text: 'item a', link: '/api-examples' },
                            { text: 'item b', link: '/markdown-examples' },
                        ]
                    },
                    {
                        text: "我是3层",
                        items: [
                            { text: 'guide', link: '/guide/' },
                            { text: 'congfig', link: '/config/' },
                        ]
                    }
                ]
            },
        ],
        //侧边栏配置,语法规则最多可以嵌套6层,友好体验最多4层
        sidebar: {
            //通用的侧边栏
            '/': [
                {
                    text: "第一层",
                    items: [
                        { text: "Markdown Examples", link: "/markdown-examples" },
                        { text: "Runtime API Examples", link: "/api-examples" },
                        {
                            text: '第二层',
                            items: [
                                { text: "Markdown Examples", link: "/markdown-examples" },
                                { text: "Runtime API Examples", link: "/api-examples" },
                                {
                                    text: '第三层',
                                    items: [
                                        { text: "Markdown Examples", link: "/markdown-examples" },
                                        { text: "Runtime API Examples", link: "/api-examples" },
                                        //   ...
                                    ]
                                }
                            ]
                        }
                    ],
                },
            ],
            //需要独立显示的侧边栏,和文件夹路径保持一致
            '/guide/': [
                {
                    text: 'Guide',
                    //如果侧边栏需要折叠,设置为true
                    collapsed: true,
                    items: [
                        //index.md无需/index,会自动匹配
                        { text: 'Index', link: '/guide/' },
                        { text: 'One', link: '/guide/one' },
                        { text: 'Two', link: '/guide/two' }
                    ]
                }
            ],
            '/config/': [
                {
                    text: 'Config',
                    items: [
                        { text: 'Index', link: '/config/' },
                        { text: 'Three', link: '/config/three' },
                        { text: 'Four', link: '/config/four' }
                    ]
                }
            ]
        },
        //页脚配置,侧边栏可见时,页脚不会显示
        footer: {
            //本项目开源协议
            message: 'Released under the MIT License. <a href="https://github.com/osrealm/vitepress-docs">vitepress-docs</a>',
            //版权信息
            copyright: 'Copyright © 2024 osrealm'

        },
        //社交链接
        socialLinks: [
            { icon: "vitepress", link: "https://vitepress.dev/" },
            { icon: "github", link: "https://github.com/" },
        ],
        //搜索配置
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: "搜索"
                    },
                    modal: {
                        displayDetails: '显示详细列表',
                        resetButtonTitle: '重置搜索',
                        backButtonTitle: '关闭搜索',
                        noResultsText: '无法找到相关结果',
                        footer: {
                            selectText: '选择',
                            selectKeyAriaLabel: '输入',
                            navigateText: '导航',
                            navigateUpKeyAriaLabel: '上箭头',
                            navigateDownKeyAriaLabel: '下箭头',
                            closeText: '关闭',
                            closeKeyAriaLabel: '关闭'
                        }
                    }
                }
            }
        }
    }
});