const koa = require('koa');
const JSONStream = require('streaming-json-stringify');
// 将数据库查询结果发送浏览器端，针对数组
const app = module.exports = new koa();

app.use(async(ctx) => {
    ctx.type = 'json';
    const stream = ctx.body = JSONStream();

    stream.on('error', ctx.onerror);

    setImmediate(function() {
        stream.write({
            id: 1
        });

        setImmediate(function() {
            stream.write({
                id: 2
            });

            setImmediate(function() {
                stream.end();
            });
        });
    });
});

if (!module.parent) app.listen(3000);