const koa = require('koa');
const views = require('koa-views');
const path = require('path')
const app = module.exports = new koa();

// setup views, appending .ejs
// when no extname is given to render()

app.use(views(path.join(__dirname, 'views'), {
    extension: 'ejs'
}))

// dummy data

const user = {
    name: {
        first: 'Tobi',
        last: 'Holowaychuk'
    },
    species: 'ferret',
    age: 3
};

// render

app.use(async(ctx) => {
    await ctx.render('test', { user: user });
});

if (!module.parent) app.listen(4000)
console.log('4000')