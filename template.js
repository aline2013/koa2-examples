const koa = require('koa')
    // 渲染
const views = require('koa-views')
const path = require('path')
const app = module.exports = new koa()


// 设置渲染文件的父文件夹，以及渲染方式是 'ejs',的文件是 .ejs后缀
app.use(views(path.join(__dirname, 'test-file'), {
    extension: 'ejs'
}))

// 创建数据
const user = {
    name: {
        first: 'Tobi',
        last: 'Holowaychuk'
    },
    species: 'ferret',
    age: 3
};

// render
app.use(async(ctx) => {
    await ctx.render('test', { user: user });
});

if (!module.parent) app.listen(4000)
console.log('4000')