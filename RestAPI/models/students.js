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

module.exports = students;