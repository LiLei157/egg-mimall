/**
 * @description:用户地址表
 */
module.exports = app =>{
    const {STRING,INTEGER} = app.Sequelize
    const UserAddress = app.model.define('users_address',{
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        "user_id":{
            type:INTEGER(20)
        },
        "province_id":{
            type:STRING(10)
        },
        "city_id":{
            type:STRING(10)
        },
        "area_id":{
            type:STRING(10)
        },
        info:{
            type:STRING(100),
            comment:'详细地址'
        }
    })
    UserAddress.associate = function(){
        
    }
    UserAddress.sync({force:true})
    return UserAddress
}