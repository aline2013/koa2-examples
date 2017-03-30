/*
 * form表单文件上传
 */
const koa = require('koa')
const logger = require('koa-logger')
const server = require('koa-static')
const router = require('koa-router')()
const path = require('path')
const multer = require('koa-multer')

const app = module.exports = new koa()

app.use(logger())

app.use(async(ctx, next) => {
    await next()
    if (ctx.body || !ctx.idempotent) return
    ctx.redirect('/404.html')
})

const upload = multer({
    dest: './test-file/uploaded/'
})

router.post('/profile', upload.single('file'), async(ctx, next) => {
    console.log('------')
    console.log(ctx.req.file)
    ctx.body = ctx.req.file
})
app.use(router.routes())

app.use(server(path.join(__dirname, 'test-file/upload/')))

if (!module.parent) app.listen(3000)
console.log('3000')