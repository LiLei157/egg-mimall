"use strict"

module.exports = app =>{
    const {STRING,INTEGER} = app.Sequelize
    const User = app.model.define('users',{
        id:{
            type:INTEGER(20),
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:STRING(30),
            allowNull:false,
            unique:true,
            comment:'用户名'
        },
        password:{
            type:STRING(200),
            allowNull:false
        }
    })
    User.associate = function(){
        // 一对多，一个用户有多个地址表
        app.model.User.hasMany(app.model.UserAddress,{
            foreignKey:'user_id',
            targetKey:'id'
        })
    }


    //同步表结构
    User.sync({force:true})
    return User
}