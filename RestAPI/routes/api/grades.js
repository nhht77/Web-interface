const express = require('express');
const router  = express.Router({mergeParams: true});

const students = require('../../models/students');

function getCoursesByStudentId(id) {
    let selectedStudentId = parseInt(id);

    const selectedStudent = students.filter( s => {
        if(s.Id === selectedStudentId){
            return s;
        } 
    })

    return selectedStudent[0].Courses;
}

function getCourseById(id, Courses) {
    let selectedCourseId = parseInt(id);

    const selectedCourse = Courses.filter( s => {
        if(s.id === selectedCourseId){
            return s;
        } 
    })

    return selectedCourse;
}

router.get('/', (req, res) => {
    const Course = getCoursesByStudentId(req.params.student_id);
    res.json(Course);
})

router.get('/:id_course', (req, res) => {
    const Courses = getCoursesByStudentId(req.params.student_id);
    const selectedCourse = getCourseById(req.params.id_course, Courses);
    res.json(selectedCourse);
})



module.exports = router;