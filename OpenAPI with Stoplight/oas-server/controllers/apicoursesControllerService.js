'use strict'

const courses =  
    [
        {
            Id: 1,
            Name:"Php",
            Description:"Learning To Code Backend"
        },
        {
            Id: 2,
            Name:"Hybrid Application",
            Description:"Learning to Code Mobile Hybrid App"
        },
        {
            Id: 3,
            Name:"ReactJS",
            Description:"Learning to Code Javascript Frontend Framework"
        }
    ]

module.exports.funcapicoursesGET = function funcapicoursesGET(req, res, next) {
  res.send(courses);
};

module.exports.funcapicoursesPOST = function funcapicoursesPOST(req, res, next) {
  res.send({data: req.body});
};