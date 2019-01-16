const express    = require('express');
const bodyParser = require('body-parser');

const courses  = require("./routes/api/courses");
const students = require("./routes/api/students");
const grades = require("./routes/api/grades");

const app      = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/test', (req, res) => res.json({msg:"It works"}))

app.use('/api/courses', courses);
app.use('/api/students', students);
app.use('/api/students/:student_id/grades', grades);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))