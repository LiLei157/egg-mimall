/**
 * @description:省级表
 */
 module.exports = app =>{
    const {STRING,INTEGER} = app.Sequelize
    const Province = app.model.define('province',{
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        "province_id":{
            type:STRING(10)
        },
        province:{
            type:STRING(30)
        }
    })
    Province.sync({force:true})
    return Province
}