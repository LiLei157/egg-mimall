'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {INTEGER,DATE,STRING} = Sequelize
    await queryInterface.createTable('users',{
        id:{
            //用户id，自增
            type: INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        },
        //用户名
        username:{
            type: STRING,
            allowNull:false,
            comment:'用户名',	// 备注
            unique:true //唯一
        },
        password:{
            type:STRING,
            allowNull:false,
            comment:'密码'
        },
        // 用户状态，启用或禁用
        status:{
            type:INTEGER,// 0:启用 1：禁用
            default:0
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users')
  }
};
