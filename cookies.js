/*
 * 设置cookies，显示浏览人数
 */
const koa = require('koa')
const app = module.exports = new koa()

app.use(async(ctx) => {
    let n = ~~ctx.cookies.get('view') + 1
    ctx.cookies.set('view', n)
    ctx.body = n + 'views'
})

if (!module.parent) app.listen(3000)