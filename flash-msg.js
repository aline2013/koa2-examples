/*
 *  没搞明白
 */
const koa = require('koa')
const session = require('koa-session')
const rawBody = require('raw-body')
const app = module.exports = new koa()

// required for signed cookie sessions
app.keys = ['key1', 'key2'];
app.use(session(app))

app.use(async(ctx, next) => {
    if (ctx.method !== 'GET' || ctx.path !== '/messages') return await next();

    // get any messages saved in the session
    const messages = ctx.session.messages || [];
    ctx.body = messages;

    // delete the messages as they've been deliverd
    delete ctx.session.messages;
});

app.use(async(ctx, next) => {
    if (ctx.method !== 'POST' || ctx.path !== '/messages') return await next();

    // the request string is the flash message
    const message = await rawBody(ctx.req, {
        encoding: 'utf8'
    });

    // push the message to the session
    ctx.session.messages = ctx.session.messages || [];
    ctx.session.messages.push(message);

    // tell the client everything went okay
    ctx.status = 204;
});

app.use(async(ctx) => {
    console.log(ctx.method)
})
if (!module.parent) app.listen(3000)
console.log('3000 f')