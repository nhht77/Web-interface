'use strict'

module.exports.funcapicoursesGET = function funcapicoursesGET(req, res, next) {
  const courses = require('../apiAction/courses');
  res.send(courses.getCourses());

};

module.exports.funcapicoursesPOST = function funcapicoursesPOST(req, res, next) {
  const courses = require('../apiAction/courses');
  res.send(courses.addCourse(req.undefined.value));
};