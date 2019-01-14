const express = require('express');
const router  = express.Router();

const students = {
    
    studentsData : 
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
}

router.get('/test', (req, res) => res.json({msg:'Routes Works'}));

router.get('/', (req, res) => res.json(students));

router.post("/", (req, res) => {

    const {Name, Address, Class} = req.body
    const Id = students.studentsData.length + 1 ;

    students.studentsData.push({Name, Address, Class, Id});
    res.status(201).json(students);
});




module.exports = router;