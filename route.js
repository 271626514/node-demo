/**
 * Created by qiankun on 2017/12/30.
 */
const fs = require('fs');

const lottery = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./src/index.html');
}

const vote = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./src/vote.html');
}

module.exports = {
  lottery,vote
}