'use strict'

const students = 
    [
        {
            id: 1,
            name:"Veli-Matti Lilja",
            address:"Norra Larsmovägen 38 70820 Oulu",
            courses:[
                {   
                    id: 1,
                    grade: 5,
                    name: "Php",
                },
                {
                    id: 2,
                    grade:3,
                    name: "Hybrid Application",
                },
                {
                    id: 3,
                    grade:4,
                    name:"ReactJS",
                }
            ],
        },
        {
            id: 2,
            name:"Erno Virolainen",
            address:"Kankaanpääntie 36 94600 KEMI",
            courses:[
                {
                    id: 1,
                    grade: 3,
                    name: "Php",
                },
                {
                    id:3,
                    grade:3,
                    name:"ReactJS",
                }
            ],
        },
        {
            id: 3,
            name:"Kaarina Autio",
            address:"Ysitie 25 33420 TAMPERE",
            courses:[
                {
                    id:2,
                    grade:0,
                    name: "Hybrid Application",
                },
                {
                    id:3,
                    grade:2,
                    name:"ReactJS",
                }
            ],
        },
        {
            id: 4,
            name:"Tuulia Karppinen",
            address:"Suometsäntie 17 00750 HELSINKI",
            courses:[
                {
                    id:1,
                    grade: 2,
                    name: "Php",
                },
                {
                    id:2,
                    grade:0,
                    name: "Hybrid Application",
                }
            ],
        }
    ];

    function getCoursesByStudentId(id) {
      let selectedStudentId = parseInt(id);
  
      const selectedStudent = students.filter( s => {
          if(s.Id === selectedStudentId){
              return s;
          } 
      })
  
      return selectedStudent[0].Courses;
  }

module.exports.funcapistudentsstudentidcoursesGET = function funcapistudentsstudentidcoursesGET(req, res, next) {
  const Course = getCoursesByStudentId(req.params.student_id);
    res.json(Course);
};

module.exports.funcapistudentsstudentidcoursesPOST = function funcapistudentsstudentidcoursesPOST(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcapistudentsstudentidcoursesPOST'
  });
};