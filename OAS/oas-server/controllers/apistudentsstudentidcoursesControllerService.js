'use strict'

module.exports.funcapistudentsstudentidcoursesGET = function funcapistudentsstudentidcoursesGET(req, res, next) {
  const grades = require('../apiAction/grades');
  res.send(grades.getCoursesByStudentId(req.student_id.value));
};

module.exports.funcapistudentsstudentidcoursesPOST = function funcapistudentsstudentidcoursesPOST(req, res, next) {
  const grades = require('../apiAction/grades');
  res.send(grades.addCoursesByStudentId(req.student_id.value, req.undefined.value));
};