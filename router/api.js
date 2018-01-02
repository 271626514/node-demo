/**
 * Created by syzx9801@163.com on 2018/1/2.
 */
const Router = require('koa-router');

const router = new Router({
  prefix: '/api'
})
  .get('/getTime', async ctx => {
    ctx.response.type = 'json';
    ctx.response.body = {"code":"200","msg":new Date().getTime()};
  })

module.exports = {
  router
}