/**
 * Created by qiankun on 2017/12/30.
 */
const fs = require('fs');
const Router = require('koa-router');

const router = new Router()
  .get('/', async ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./src/tpl/index.ejs');
  })
  .get('/vote', async ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./src/tpl/vote.ejs');
  })
  .get('/test', async ctx => {
    ctx.response.body = 'Hello World';
  })
  .get('/form', async ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./src/tpl/form.ejs');
  })

module.exports = {
  router
}