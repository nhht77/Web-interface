'use strict'

var varapistudentsstudentsidController = require('./apistudentsstudentsidControllerService');

module.exports.funcapistudentsstudentsidPUT = function funcapistudentsstudentsidPUT(req, res, next) {
  varapistudentsstudentsidController.funcapistudentsstudentsidPUT(req.swagger.params, res, next);
};

module.exports.funcapistudentsstudentsidGET = function funcapistudentsstudentsidGET(req, res, next) {
  varapistudentsstudentsidController.funcapistudentsstudentsidGET(req.swagger.params, res, next);
};

module.exports.funcapistudentsstudentsidDELETE = function funcapistudentsstudentsidDELETE(req, res, next) {
  varapistudentsstudentsidController.funcapistudentsstudentsidDELETE(req.swagger.params, res, next);
};