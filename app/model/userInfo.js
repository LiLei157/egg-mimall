"use strict"

// 用户信息表
module.exports = app =>{
    const {STRING,INTEGER,BIGINT,DECIMAL,ENUM} = app.Sequelize
    const UserInfo = app.model.define('users_info',{
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        realName:{
            type:STRING(20),
            comment:'真实姓名',
            allowNull:true
        },
        phone:{
            type:STRING(11),
            allowNull:false,
            comment:'手机号'
        },
        cardType:{
            type:INTEGER,   // 0:身份证
            allowNull:false,
            comment:'身份类型'
        },
        cardNum:{
            type:STRING(18),
            allowNull:false,
            comment:'身份证号'
        },
        email:{
            type:STRING(50),
            allowNull:true,
            comment:'邮箱'
        },
        gender:{
            type:ENUM,
            allowNull:true,
            values:['男','女','保密'],
            comment:'性别'
        },
        birth:{
            type:STRING,
            comment:'生日'
        },
        "user_id":{
            type:INTEGER(20)
        },
        balance:{
            type:DECIMAL(30,2)
        }
    })
    // 创建表关联: 一个用户对应一个用户信息,与users表为一对一关系，通过userId关联
    UserInfo.associate = ()=>{
        app.model.UserInfo.belongsTo(app.model.User,{
            targetKey:'id',
            foreignKey:'user_id'
        })
    }
    UserInfo.sync({force:true})
    return UserInfo
}