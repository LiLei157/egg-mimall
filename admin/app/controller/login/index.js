const Controller = require('egg').Controller

class LoginController extends Controller{
    async getCode(){
        this.ctx.body = '获取验证码'
    }
}
module.exports = LoginController