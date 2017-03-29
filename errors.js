const koa = require('koa')
const app = module.exports = new koa();

// look ma, error propagation!
app.use(async(ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.status = err.status || 500
        ctx.type = 'html'
        ctx.body = '<p>error is ' + ctx.status + '</p>'
            // 手动处理捕获错误，应该将错误委托给app
            // 将事件'error'，注册到app上，当app监听到error事件，调用error事件，参数为err,ctx
        ctx.app.emit('error', err, ctx)
    }
})

app.use(async() => {
    throw new Error('boom boom')
})

app.on('error', (err) => {
    console.log('error');
    console.log(err)
})

if (!module.parent) app.listen(3000);
console.log('3000')