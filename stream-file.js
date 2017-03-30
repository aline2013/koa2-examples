const koa = require('koa');
const fs = require('fs');
const path = require('path');

const app = module.exports = new koa();
const extname = path.extname

// try GET http://localhost:3000/test-file/test.txt
app.use(async(ctx) => {
    const fpath = path.join(__dirname, ctx.path)
    const fstat = await stat(fpath)
    console.log(fstat)

    if (fstat.isFile()) {
        ctx.type = extname(fpath)
        ctx.body = fs.createReadStream(fpath)
    }
})

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

if (!module.parent) app.listen('3000')
console.log('3000 s')