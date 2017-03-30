/*
 * 没搞明白
 * csrf是网络攻击方式，可以用token方法对应
 */
const koa = require('koa')
const csrf = require('koa-csrf')
const bodyparser = require('koa-bodyparser')
const router = require('koa-router')

const app = module.exports = new Koa()
aoo.use(router())
app.use(bodyparser())
app.use(session());
app.use(csrf())

/**
 * csrf need session
 */

app.keys = ['session key', 'csrf example'];


/**
 * maybe a bodyparser
 */

app.use(async(ctx, next) => {
    if (ctx.is('application/json')) {
        ctx.body = ctx.request.body;
    }
    await next();
});

/**
 * csrf middleware
 */

/**
 * route
 */

router.get('/token', token);
router.post('/post', post);

async function token(ctx) {
    ctx.body = ctx.csrf;
}

async function post(ctx) {
    ctx.body = { ok: true };
}

if (!module.parent) app.listen(3000);