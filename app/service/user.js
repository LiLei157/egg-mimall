'use strict';

const Service = require('egg').Service
class UserService extends Service{
    async index(){
        console.log(this.app.mysql)
        const user = await this.app.mysql.query('select * from test')
        return user
    }
}
module.exports = UserService