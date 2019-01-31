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

module.exports.funcapicoursescourseidGET = function funcapicoursescourseidGET(req, res, next) {

  let selectedCourseId = parseInt(req.params.course_id);

    const selectedCourse = courses.filter( s => {
        if(s.Id === selectedCourseId){
            return s;
        } 
    })

    res.json(selectedCourse);
};

module.exports.funcapicoursescourseidPUT = function funcapicoursescourseidPUT(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcapicoursescourseidPUT'
  });

  // let Id = parseInt(req.params.course_id);
    // const {Name, Description} = req.body
// 
    // const updateCourseIndex = courses.map( s => s.Id).indexOf(Id);
    // courses[updateCourseIndex] = { Id, Name, Description }
// 
    // res.status(202).json(courses);
};

module.exports.funcapicoursescourseidDELETE = function funcapicoursescourseidDELETE(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcapicoursescourseidDELETE'
  });

  // let removeCourseId = parseInt(req.params.course_id);
// 
    // const removeCourseIndex = courses.map( s => s.Id).indexOf(removeCourseId);
    // courses.splice(removeCourseIndex, 1);
// 
    // res.json(courses);
};