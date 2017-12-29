/**
 * Created by syzx9801@163.com on 2017/12/29.
 */
const http = require("http"),
  io = require("socket.io")

const server = http.createServer((req, res) => {
  res.end()
}).listen(9919)

const socket = io.listen(server)

socket.of('/console').on('connection', client => {
  console.log(`连接成功`)
  let msg = {
    'code': 200,
    'msg': '这是一条服务端推送'
  }
  client.emit('data', msg)
})

socket.on("connection", client => {
  client.on('acount', acount => {
    client.emit('addCount', acount.id)
  })
})