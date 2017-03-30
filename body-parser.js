// 用postman post方法测试
const koa = require('koa')
    // 处理http请求body内容
const bodypraser = require('koa-bodyparser')

const app = module.exports = new koa()

// 设置限定为 json数据，大小不超过1kb
app.use(bodypraser({ 'jsonLimit': "1kb" }))

app.use(async(ctx, next) => {
    if (ctx.method !== 'POST') await next()
    const body = ctx.request.body
    if (!body.name) ctx.throw(400, '.name is required')
    ctx.body = { name: body.name.toUpperCase() };
})

if (!module.parent) app.listen(3000)
console.log('3000')