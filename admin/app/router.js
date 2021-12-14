'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getCode',controller.login.index.getCode)
  // 
//   require('./router/login/index')
};
