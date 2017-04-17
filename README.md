# examples for koajs (version=2)
 仿照koajs1的examples改写的koa2的代码， 原代码是[koa-example](https://github.com/koajs/examples)
.
├── 404.js 404处理
├── README.md 文档详解
├── basic-auth.js 最简单的验证权限的方式
├── blog.js 博客
├── body-parser.js 解析request.body数据格式
├── compose.js 多个中间件组成
├── conditional-mw-use.js 选择执行中间件
├── cookies.js cookies
├── csrf.js
├── errors.js 错误处理
├── flash-msg.js
├── helloworld.js
├── jsconfig.json vscode提示限制
├── multer.js 文件上传
├── negosiation.js 数据交互
├── package.json
├── router.js 路由处理
├── stream-file.js 文件读取
├── stream-objects.js 对象流
├── template.js 渲染魔板
└── test-file 页面
    ├── test.ejs
    ├── test.txt
    ├── upload
    │   ├── 404.html
    │   └── index.html
    └── views
        ├── index.html
        ├── layout.html
        ├── list.html
        ├── new.html
        └── show.html

### 步骤
```json
$ npm install
$ node ${filename}
```