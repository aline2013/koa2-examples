const koa = require('koa')
const router = require('koa-router')()

// 路由处理
const app = module.exports = new koa()

router.get('/hi', async(ctx) => {
    ctx.body = 'welcome to learn koa2'
})

app.use(router.routes())
if (!module.parent) app.listen('3000')
console.log('3000 r')