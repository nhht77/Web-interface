'use strict'

module.exports.funcapistudentsGET = function funcapistudentsGET(req, res, next) {
  const students = require('../apiAction/students');
  res.send(students.getStudents());
};

module.exports.funcapistudentsPOST = function funcapistudentsPOST(req, res, next) {
  const students = require('../apiAction/students');
  res.send(students.addStudents(req.undefined.value));
};