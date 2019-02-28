const express = require('express');
const expressGraphQL = require('express-graphql');
const students = require('./students.js');
const courses = require('./courses.js');

const app = express();

app.use('/api/students', expressGraphQL({
    schema:students,
    graphiql:true
}));

app.use('/api/courses', expressGraphQL({
    schema:courses,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('Server is running on port 4000..');
});