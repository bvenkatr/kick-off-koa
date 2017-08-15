var Koa = require('koa');

var app = new Koa();

// to use signed cookie, we need to set app.keys
app.keys = ['secret', 'keys'];

app.use(async () => {
  var n = ~~this.cookies.get('view', { signed: true }) + 1;
  this.cookies.set('view', n, { signed: true });
  this.body = n + ' views';
});

app.listen(process.argv[2]);
