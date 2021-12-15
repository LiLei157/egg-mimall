/**
 * @description:市级表
 */
 module.exports = app =>{
    const {STRING,INTEGER} = app.Sequelize
    const Cities = app.model.define('cities',{
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        "province_id":{
            type:STRING(10)
        },
        "city_id":{
            type:STRING(10)
        },
        city:{
            type:STRING(30)
        }
    })
    Cities.associate = function (){
        // app.model.Cities.belongsTo(app.model.Province,{
        //     foreginKey:'province_id',
        //     targetKey:'province_id'
        // })    
    }
    Cities.sync({force:true})
    return Cities
}