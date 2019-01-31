'use strict'

var varapicoursesController = require('./apicoursesControllerService');

module.exports.funcapicoursesGET = function funcapicoursesGET(req, res, next) {
  varapicoursesController.funcapicoursesGET(req.swagger.params, res, next);
};

module.exports.funcapicoursesPOST = function funcapicoursesPOST(req, res, next) {
  varapicoursesController.funcapicoursesPOST(req.swagger.params, res, next);
};