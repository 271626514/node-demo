/**
 * Created by syzx9801@163.com on 2018/1/2.
 */
const Router = require('koa-router');
const koaBody = require('koa-body');

const api = new Router({
  prefix: '/api'
})
  .get('/getTime', async ctx => {
    ctx.response.type = 'json';
    ctx.response.body = {"code":"200", "data":{"localTime": new Date().getTime()}};
  })
  .post('/login', koaBody(), async ctx => {
    console.log(ctx.request.body);
    let body = ctx.request.body;
    let data;
    try {
      data = {
        "code": "200",
        "data": {
          "name": body.name,
          "pwd": body.pwd
        }
      }
    } catch (e) {

    }
  //  ctx.body = `login success! Hello,${ctx.name}. And your pwd is ${ctx}!`
    ctx.body = data;
  })
  .post('/res', async ctx => {
    ctx.response.type = 'json';
    ctx.response.body = {}
  })

module.exports = {
  api
}