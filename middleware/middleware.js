/**
 * Created by syzx9801@163.com on 2018/1/2.
 */
const getCookie = async (ctx, next) => {
  let _appid = ctx.cookies.get('_appid')
  if (!_appid) {
    ctx.cookies.set('_appid', new Date().getTime());
  }
  next();
}

module.exports = {
  getCookie,
}