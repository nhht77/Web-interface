const express = require('express');
const router  = express.Router();

const students = require('../../models/students');

router.get('/', (req, res) => res.json(students));

router.post("/", (req, res) => {

    const {Name, Address, Courses} = req.body
    const Id = students.length + 1 ;

    students.push({ Id ,Name, Address, Courses});
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
    const { Name, Address, Courses } = req.body;

    const updateStudentIndex = students.map( s => s.Id).indexOf(Id);
    students[updateStudentIndex] = { Name, Address, Courses, Id }

    res.status(202).json(students);
})

router.delete("/:students_id", (req, res) => {
    let removeStudentId = parseInt(req.params.students_id);

    const removeStudentIndex = students.map( s => s.Id).indexOf(removeStudentId);
    students.splice(removeStudentIndex, 1);

    res.json(students);
})

module.exports = router;