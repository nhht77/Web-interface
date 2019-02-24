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
                    id:2,
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
                    id:1,
                    grade:0,
                    name: "Hybrid Application",
                },
                {
                    id:2,
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

getCoursesByStudentId = (id) => {
    let selectedStudentId = parseInt(id);
    const selectedStudent = students.filter( s => {
        if(s.Id === selectedStudentId){
            return s;
        } 
    })
    return selectedStudent[0].Courses;
}

module.exports.getCoursesByStudentId = (id) => {
    let selectedStudentId = parseInt(id);

    const selectedStudent = students.filter( s => {
        if(s.Id === selectedStudentId){
            return s;
        } 
    })

    return selectedStudent[0].Courses;
}

module.exports.getCourseById = (id, Courses) => 
     selectedCourse = Courses.filter( s => {
        if(s.id === id){
            return s;
        } 
    });


module.exports.addCoursesByStudentId = (id, Course) => {
    const selectedStudent = students.filter( s => {
        if(s.Id === id){
            return s;
        } 
    })

    let newId = selectedStudent[0].Courses.length + 1;    
    Course.id = newId;

    return selectedStudent[0].Courses.push(Course);
}

module.exports.updateStudentGrade = (student_id, course_id, data) => {
    const { grade, name } = data;
    const Courses = getCoursesByStudentId(student_id);
    const updateGradeIndex = Courses.map( c => c.id).indexOf(course_id);
    Courses[updateGradeIndex] = { id, grade, name };
    return Courses;  
};

module.exports.deleteGrades = (student_id, course_id) => {
    const Courses = getCoursesByStudentId(student_id);
    const removedGradeIndex = Courses.map( c => c.id).indexOf(parseInt(course_id));
    Courses.splice(removedGradeIndex, 1);
    return Courses;
}
