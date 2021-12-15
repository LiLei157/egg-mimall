/*
 * @description:市级表
 */
 module.exports = app =>{
    const {STRING,INTEGER} = app.Sequelize
    const Area = app.model.define('area',{
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        "city_id":{
            type:STRING(10)
        },
        "area_id":{
            type:STRING(10)
        },
        area:{
            type:STRING(30)
        }
    })
    Area.associate = function (){
        Area.belongsTo(app.model.Cities,{
            foreginKey:'city_id',
            targetKey:'city_id'
        })    
    }
    Area.sync({force:true})
    return Area
}