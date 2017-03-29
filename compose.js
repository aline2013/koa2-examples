const koa = require('koa')
const compose = require('koa-compose')

const app = module.exports = new koa()

async function responseTime(ctx, next) {
    const start = new Date()
    await next()
    const ms = new Date() - start
    ctx.set('X-Response-Time', '${ms}ms')
}

async function logger(ctx, next) {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}`)
}

async function respond(ctx, next) {
    await next()
    if (ctx.url !== '/') return
    ctx.body = 'hello world'
}

var all = compose([
    responseTime,
    logger,
    respond
])

app.use(all)

if (!module.parent) app.listen(3000)
console.log('3000')