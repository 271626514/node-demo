/**
 * Created by syzx9801@163.com on 2017/12/29.
 */
const koa = require('koa'),
  server = require('http').Server(koa),
  io = require("socket.io")(server),
  app = new koa(),
  router = require('koa-route'),
  route = require('./route');

app.use(router.get('/', route.lottery));
app.use(router.get('/vote', route.vote));

app.listen(9918, '192.168.1.105');
server.listen(9919, '192.168.1.105');

io.of('/init').on('connection', client => {
  console.log(`连接成功`)
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