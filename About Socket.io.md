# socket.io
***
### 安装依赖 
`npm i socket.io -D`

#### 服务端
    const http = require("http"),
      io = require("socket.io")
    
    const server = http.createServer((req, res) => {
      res.end()
    }).listen(9919)
    
    const socket = io.listen(server)
    
    socket.on("connection", client => {
      console.log(`连接成功`)
    })
    
#### 客户端
    <script src="http://localhost:9919/socket.io/socket.io.js"></script>
    <script>
        var socket = io.connect("http://127.0.0.1:9919");
    </script>
    
> 这里外部引用的socket.io是服务端启动服务后生成的，所以在我们创建的项目中是找不到实体文件的

##### 启动
启动我们的server.js文件，在浏览器输入`http://localhost:9919`，然后回到控制台，会发现输出了`连接成功`,表示我们的socket链接成功


### 扩展服务端推送
> 对我们的`server`进行一下改造

    socket.on("connection", client => {
      console.log(`连接成功`)    
      let msg = {
        'code': 200,
        'msg': '这是一条服务端推送'
      }
      client.emit('data', msg)
    })
    
> 客户端

    var socket = io.connect("http://127.0.0.1:9919");
    socket.on("data", function (data) {
        console.log(data)
    });
    
### 与服务端交互
> 实现一个前端操作，传给服务端，服务端接收后进行处理后返回前端，进行渲染
> 服务端

    client.on('acount', acount => {
        client.emit('addCount', acount.id)
    })
    
> 客户端

    $(function(){
        function addCount (data) {
            var index = data,
                dom = $('.count').eq(index-1).find('span'),
                value = parseInt(dom.text())
            dom.text(value+1)
        }
        var socket = io.connect("http://127.0.0.1:9919");
        socket.on("data", function (data) {
            console.log(data.code)
        });
        $('button').on('click', function(e) {
            e.preventDefault();
            var _this = $(this),
                index = _this.data('id')
            socket.emit("acount", {id:index})
        })
        socket.on('addCount', addCount)
    })
    
### 对socket进行分组处理
> 接下来我们对server进行改造，把一个server中的socket进行拆分