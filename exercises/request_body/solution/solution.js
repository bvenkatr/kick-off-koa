var koa = require('koa');
var parse = require('co-body');

var app = koa();

app.use(async (ctx, next) => {
  // only accept POST request
  if (ctx.method !== 'POST') return await next;

  // max body size limit to `1kb`
  var body = await parse(ctx, { limit: '1kb' });

  // if body.name not exist, respond `400`
  if (!body.name) ctx.throw(400, '.name required');

  ctx.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);
