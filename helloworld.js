const koa = require('koa')

const app = module.exports = new koa()

app.use(async(ctx) => {
    ctx.body = 'hello world'
})

app.listen('3000')
console.log('listening port: 3000')