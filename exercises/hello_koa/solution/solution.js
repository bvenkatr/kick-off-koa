var Koa = require('koa');

var app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'hello koa';
});

app.listen(process.argv[2]);
