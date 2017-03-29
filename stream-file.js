const koa = require('koa');
const fs = require('fs');

const app = module.exports = new koa();
const path = require('path');
const extname = path.extname;

// try GET /app.js

app.use(async(ctx) => {
    const fpath = path.join(__dirname, ctx.path)
    const fstat = await stat(fpath)
    await logger()

    if (fstat.isFile()) {
        ctx.type = extname(fpath)
        ctx.body = fs.createReadStream(fpath)
    }
});

if (!module.parent) app.listen(3000);

/**
 * thunkify stat
 */

function stat(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, function(err, stats) {
            if (err) {
                reject(err)
            }
            resolve(stats)
        })
    });
}

function logger() {
    console.log('zzz')
}