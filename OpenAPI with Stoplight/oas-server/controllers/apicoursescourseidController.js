'use strict'

var varapicoursescourseidController = require('./apicoursescourseidControllerService');

module.exports.funcapicoursescourseidGET = function funcapicoursescourseidGET(req, res, next) {
  varapicoursescourseidController.funcapicoursescourseidGET(req.swagger.params, res, next);
};

module.exports.funcapicoursescourseidPUT = function funcapicoursescourseidPUT(req, res, next) {
  varapicoursescourseidController.funcapicoursescourseidPUT(req.swagger.params, res, next);
};

module.exports.funcapicoursescourseidDELETE = function funcapicoursescourseidDELETE(req, res, next) {
  varapicoursescourseidController.funcapicoursescourseidDELETE(req.swagger.params, res, next);
};