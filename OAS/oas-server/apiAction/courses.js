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

module.exports.getCourses = () => courses;

module.exports.addCourse= (data) => {

    const {Name, Description} = data
    const Id = courses.length + 1 ;

    courses.push({Id, Name, Description});
    return courses;
};

module.exports.getCourse = id => 
    selectedCourse = courses.filter( s => {
        if(s.Id === id){
            return s;
        } 
    })

module.exports.updateCourse = (id, data)  => {
    const Id = id;
    const {Name, Description} = data

    const updateCourseIndex = courses.map( s => s.Id).indexOf(id);
    return courses[updateCourseIndex] = { Id, Name, Description }
}

module.exports.deleteCourse = id => {
    const removeCourseIndex = courses.map( s => s.Id).indexOf(id);
    courses.splice(removeCourseIndex, 1);
    return courses
}

