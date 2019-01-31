'use strict'

var varapistudentsController = require('./apistudentsControllerService');

module.exports.funcapistudentsGET = function funcapistudentsGET(req, res, next) {
  varapistudentsController.funcapistudentsGET(req.swagger.params, res, next);
};

module.exports.funcapistudentsPOST = function funcapistudentsPOST(req, res, next) {
  varapistudentsController.funcapistudentsPOST(req.swagger.params, res, next);
};