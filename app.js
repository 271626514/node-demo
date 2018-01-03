/**
 * Created by syzx9801@163.com on 2018/1/2.
 */
const path = require('path');
const koa = require('koa');
const render = require('koa-ejs');
const app = new koa();
const serve = require('koa-static');
const route = require('./router/route');
const middleware = require('./middleware/middleware');
const api = require('./router/api');

render(app, {
  root: path.join(__dirname, 'src/tpl'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false,
  debug: true
});


app.use(middleware.getCookie);
app.use(route.router.routes());
app.use(api.router.routes());
app.use(serve(path.join(__dirname) + '/src'));

app.listen(9918);

