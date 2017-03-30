const koa = require('koa')
const router = require('koa-router')()
const logger = require('koa-logger')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')
const path = require('path')

const app = module.exports = new koa()
app.use(logger())
app.use(bodyparser())

// 数据
var posts = [];

// 路由
router.get('/', list)
router.get('/post/new', add)
router.get('/post/:id', show)
router.post('/post', create)

// 指定后面render页面的路径，渲染模板方式swig,和渲染页面html
// 注册router方法
app.
use(views(path.join(__dirname, 'test-file/views'), {
        map: {
            html: 'swig'
        }
    }))
    .use(router.routes())
    .use(router.allowedMethods())

/**
 * Post listing.
 */
// 请求处理
async function list(ctx) {
    await ctx.render('list', {
        posts: posts
    })
}

/**
 * Show creation form.
 */
async function add(ctx) {
    await ctx.render('new')
}

/**
 * Show post :id.
 */
async function show(ctx) {
    var post = posts[ctx.params.id];
    if (!post) ctx.throw(404, 'invalid post id');
    await ctx.render('show', { post: post });
}

/**
 * Create a post.
 */
async function create(ctx) {
    let post = await ctx.request.body;
    let id = posts.push(post) - 1;
    post.created_at = new Date();
    post.id = id;
    // 重定向到首页
    ctx.redirect('/');
}

// listen

if (!module.parent) app.listen(3000)
console.log('3000 b')