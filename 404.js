const koa = require('koa')

const app = module.exports = new koa()

app.use(async(ctx, next) => {
    // if has not next middleware,continue
    await next()
    try {
        const status = ctx.status || 404
        if (status === 404) ctx.throw(404)
    } catch (err) {
        if (err.status !== 404) return
        ctx.status = err.status
        switch (ctx.accepts('html', 'json')) {
            case 'html':
                ctx.type = 'html'
                ctx.body = 'Page is not found1'
                break
            case 'json':
                ctx.type = 'json'
                ctx.body = {
                    message: 'Page is not found2'
                }
                break
            default:
                ctx.type = 'html'
                ctx.body = 'Page is not found3'
        }
    }
})

// // has next middleware
// app.use(async(ctx) => {
//     ctx.body = '<h1>Hello world</h1>'
// })

app.listen('3000')
console.log('3000')