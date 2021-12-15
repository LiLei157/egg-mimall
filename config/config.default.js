/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639547504790_2412';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '120.24.245.68',
      // 端口号
      port: '3306',
      // 用户名
      user: '1213564228',
      // 密码
      password: 'root1213',
      // 数据库名
      database: 'xiaomi_mall',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  config.sequelize = {
    dialect: 'mysql',
    host: '120.24.245.68',
    port: 3306,
    database: 'xiaomi_mall',
    username:'1213564228',
    password:'root1213',
    timezone:'+08:00',
    define:{
        // 自动写入时间戳
		    timestamps:true,
        freezeTableName:true,//取消表名自动加复数
        //字段生成软删除时间戳  deleted_at
        paranoid:true,
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
    }
  }
  return {
    ...config,
    ...userConfig,
  };
};


