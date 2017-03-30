// 选择地执行中间件
const koa = require('koa')
const logger = require('koa-logger')

const app = module.exports = new koa()

const selectAsset = (mw) => {
    return async(ctx, next) => {
        if (/(\.js|\.css|\.ico)$/.test(ctx.path)) {
            await next()
        } else {
            console.log('lala')
            await mw.call(mw, ctx, next)
        }
    }
}

app.use(selectAsset(logger()))

app.use(async(ctx) => {
    ctx.body = 'hello world'
})

if (!module.parent) app.listen('3000')
console.log('3000 begin')