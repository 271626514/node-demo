/**
 * Created by syzx9801@163.com on 2017/12/29.
 */
const path = require('path'),
  koa = require('koa'),
  server = require('http').Server(koa),
  io = require("socket.io")(server),
  app = new koa(),
  route = require('./route'),
  middleware = require('./middleware'),
  serve = require('koa-static'),
  compose = require('koa-compose'),
  koaStatic = serve(path.join(__dirname) + '/src');

app.use(koaStatic);
app.use(middleware.getCookie);
app.use(route.index);
app.use(route.vote);
app.use(route.test);

app.listen(9918, '127.0.0.1');
server.listen(9919, '127.0.0.1');

io.of('/init').on('connection', client => {
  // console.log(`连接成功`)
  let msg = {
    'code': 200,
    'msg': '这是一条服务端推送'
  }
  client.emit('data', msg)
})

io.of('/count').on("connection", client => {
  client.on('acount', acount => {
    console.log(acount)
    client.emit('addCount', acount.id)
  })
})