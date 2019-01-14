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

module.exports = router;