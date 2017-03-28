const koa = require('koa')
    // 最简单的验证权限的方法
const auth = require('koa-basic-auth')

const app = module.exports = new koa()

app.use(async(ctx, next) => {
    try {
        await next()
    } catch (err) {
        if (err.status === 401) {
            ctx.status = err.status;
            // 设置http请求头。用basic认证
            ctx.set('WWW-Authenticate', 'Basic');
            ctx.body = 'cant haz that';
            // ctx.type = 'html'
            // ctx.body = 'code:' + ctx.status + 'not pass'
        } else {
            throw err
        }
    }
})

// 将req.headers.authorization解析为简单的对象，如下
app.use(auth({ name: 'lla', pass: '123' }))


app.use(async(ctx) => {
    ctx.body = 'secret';
});


if (!module.parent) app.listen(3000)
console.log('3000')