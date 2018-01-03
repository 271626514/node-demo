/**
 * Created by qiankun on 2017/12/30.
 */
const fs = require('fs');
const Router = require('koa-router');
const router = new Router()
  .get('/vote', async ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./src/vote.html');
  })
  .get('/', async ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./src/tpl/index.ejs');
  })
  .get('/test', async ctx => {
    ctx.response.body = 'Hello World';
  })

module.exports = {
  router
}