'use strict'

module.exports.funcapicoursescourseidGET = function funcapicoursescourseidGET(req, res, next) {
  const courses = require('../apiAction/courses');
  res.send(courses.getCourse(req.course_id.value));
};

module.exports.funcapicoursescourseidPUT = function funcapicoursescourseidPUT(req, res, next) {
  const courses = require('../apiAction/courses');
  res.send(courses.updateCourse(req.course_id.value, req.undefined.value));
};

module.exports.funcapicoursescourseidDELETE = function funcapicoursescourseidDELETE(req, res, next) {
  const courses = require('../apiAction/courses');
  res.send(courses.deleteCourse(req.course_id.value));
};