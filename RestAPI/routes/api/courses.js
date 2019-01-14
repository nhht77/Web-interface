const express = require('express');
const router  = express.Router();

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

router.get('/', (req, res) => res.json(courses));

router.post("/", (req, res) => {

    const {Name, Description} = req.body
    const Id = courses.length + 1 ;

    courses.push({Name, Description, Id});
    res.status(201).json(courses);
});

router.get("/:course_id", (req, res) => {
    let selectedCourseId = parseInt(req.params.course_id);

    const selectedCourse = courses.filter( s => {
        if(s.Id === selectedCourseId){
            return s;
        } 
    })

    res.json(selectedCourse);
})

router.put("/:course_id", (req, res) => {
    let Id = parseInt(req.params.course_id);
    const {Name, Description} = req.body

    const updateCourseIndex = courses.map( s => s.Id).indexOf(Id);
    courses[updateCourseIndex] = { Id, Name, Description }

    res.status(202).json(courses);
})

router.delete("/:course_id", (req, res) => {
    let removeCourseId = parseInt(req.params.course_id);

    const removeCourseIndex = courses.map( s => s.Id).indexOf(removeCourseId);
    courses.splice(removeCourseIndex, 1);

    res.json(courses);
})

module.exports = router;