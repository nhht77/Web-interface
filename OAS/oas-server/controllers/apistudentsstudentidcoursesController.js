'use strict'

var varapistudentsstudentidcoursesController = require('./apistudentsstudentidcoursesControllerService');

module.exports.funcapistudentsstudentidcoursesGET = function funcapistudentsstudentidcoursesGET(req, res, next) {
  varapistudentsstudentidcoursesController.funcapistudentsstudentidcoursesGET(req.swagger.params, res, next);
};

module.exports.funcapistudentsstudentidcoursesPOST = function funcapistudentsstudentidcoursesPOST(req, res, next) {
  varapistudentsstudentidcoursesController.funcapistudentsstudentidcoursesPOST(req.swagger.params, res, next);
};