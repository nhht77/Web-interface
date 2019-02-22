const students = 
    [
        {
            Id: 1,
            name:"Veli-Matti Lilja",
            Address:"Norra Larsmovägen 38 70820 Oulu",
            Courses:[
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
            Id: 2,
            name:"Erno Virolainen",
            Address:"Kankaanpääntie 36 94600 KEMI",
            Courses:[
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
            Id: 3,
            name:"Kaarina Autio",
            Address:"Ysitie 25 33420 TAMPERE",
            Courses:[
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
            Id: 4,
            Name:"Tuulia Karppinen",
            Address:"Suometsäntie 17 00750 HELSINKI",
            Courses:[
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

module.exports.getStudents= () => students;

module.exports.addStudents = data => {
    const {Name, Address, Courses} = data
    const Id = students.length + 1 ;
    students.push({ Id ,Name, Address, Courses});
    return students;
}


// module.exports.get("/:students_id", (req, res) => {
//     let selectedStudentId = parseInt(req.params.students_id);

//     const selectedStudent = students.filter( s => {
//         if(s.Id === selectedStudentId){
//             return s;
//         } 
//     })

//     res.json(selectedStudent);
// })

// module.exports.put("/:students_id", (req, res) => {
//     let Id = parseInt(req.params.students_id);
//     const { Name, Address, Courses } = req.body;

//     const updateStudentIndex = students.map( s => s.Id).indexOf(Id);
//     students[updateStudentIndex] = { Name, Address, Courses, Id }

//     res.status(202).json(students);
// })

// module.exports.delete("/:students_id", (req, res) => {
//     let removeStudentId = parseInt(req.params.students_id);

//     const removeStudentIndex = students.map( s => s.Id).indexOf(removeStudentId);
//     students.splice(removeStudentIndex, 1);

//     res.json(students);
// })