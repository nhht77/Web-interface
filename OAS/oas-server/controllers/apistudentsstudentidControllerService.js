'use strict'

module.exports.funcapistudentsstudentidGET = function funcapistudentsstudentidGET(req, res, next) {
  const students = require('../apiAction/students');
  res.send(students.getStudent(req.student_id.value));
};

module.exports.funcapistudentsstudentidPUT = function funcapistudentsstudentidPUT(req, res, next) {
  const students = require('../apiAction/students');
  res.send(students.updateStudent(req.student_id.value, req.undefined.value));
};


module.exports.funcapistudentsstudentidDELETE = function funcapistudentsstudentidDELETE(req, res, next) {
  const students = require('../apiAction/students');
  res.send(students.deleteStudent(req.student_id.value));
};
