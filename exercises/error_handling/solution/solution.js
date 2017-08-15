var Koa = require('koa');

var app = new Koa();

app.use(errorhandler());

app.use(async (ctx, next) => {
  if (ctx.path === '/error') throw new error('ooops');
  ctx.body = 'ok';
});

function errorhandler() {
  return async (ctx, next) => {
    // we catch all downstream errors here
    try {
      await next;
    } catch (err) {
      // set response status
      ctx.status = 500;
      // set response body
      ctx.body = 'internal server error';
      // can emit on app for log
      // ctx.app.emit('error', err, ctx);
    }
  };
}

app.listen(process.argv[2]);
