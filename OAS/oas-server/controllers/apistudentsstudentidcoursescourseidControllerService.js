'use strict'

module.exports.funcapistudentsstudentidcoursescourseidGET = function funcapistudentsstudentidcoursescourseidGET(req, res, next) {
  const grades  = require('../apiAction/grades');
  const Courses = grades.getCoursesByStudentId(req.student_id.value);
  res.send(grades.getCourseById(req.course_id.value, Courses));
};

module.exports.funcapistudentsstudentidcoursescourseidPUT = function funcapistudentsstudentidcoursescourseidPUT(req, res, next) {
  const grades = require('../apiAction/grades');
  // res.send(grades.updateStudentGrade(req.student_id.value, req.course_id.value, req.undefined.value));
  res.send(req)
};

module.exports.funcapistudentsstudentidcoursescourseidDELETE = function funcapistudentsstudentidcoursescourseidDELETE(req, res, next) {
  const grades = require('../apiAction/grades');
  res.send(grades.deleteGrades(req.student_id.value, req.course_id.value));
};
