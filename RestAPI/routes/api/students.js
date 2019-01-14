const express = require('express');
const router  = express.Router();

const students = 
    [
        {
            name:"Veli-Matti Lilja",
            Address:"Norra Larsmovägen 38 70820 Oulu",
            Class:"Php",
            Id: 1
        },
        {
            name:"Erno Virolainen",
            Address:"Kankaanpääntie 36 94600 KEMI",
            Class:"Hybrid Application",
            Id: 2
        },
        {
            name:"Kaarina Autio",
            Address:"Ysitie 25 33420 TAMPERE",
            Class:"ReactJS",
            Id: 3
        },
        {
            Name:"Tuulia Karppinen",
            Address:"Suometsäntie 17 00750 HELSINKI",
            Class:"Hybrid Application",
            Id: 4
        }
    ]

router.get('/', (req, res) => res.json(students));

router.post("/", (req, res) => {

    const {Name, Address, Class} = req.body
    const Id = students.length + 1 ;

    students.push({Name, Address, Class, Id});
    res.status(201).json(students);
});


router.get("/:students_id", (req, res) => {
    let selectedStudentId = parseInt(req.params.students_id);

    const selectedStudent = students.filter( s => {
        if(s.Id === selectedStudentId){
            return s;
        } 
    })

    res.json(selectedStudent);
})

router.put("/:students_id", (req, res) => {
    let Id = parseInt(req.params.students_id);
    const { Name, Address, Class } = req.body;

    const updateStudentIndex = students.map( s => s.Id).indexOf(Id);
    students[updateStudentIndex] = { Name, Address, Class, Id }

    res.status(202).json(students);
})

router.delete("/:students_id", (req, res) => {
    let removeStudentId = parseInt(req.params.students_id);

    const removeStudentIndex = students.map( s => s.Id).indexOf(removeStudentId);
    students.splice(removeStudentIndex, 1);

    res.json(students);
})

module.exports = router;