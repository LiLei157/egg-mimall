'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const result = await this.ctx.service.user.index()
    const { ctx } = this;
    console.log(result)
    ctx.body = result
  }
}

module.exports = UserController;