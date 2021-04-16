const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
// Student Route
const studentRouter = require('./src/routes/studentRoutes');
// Faculty Route
const facultyRouter = require('./src/routes/facultyRoutes');
// Admin Route
const adminRouter = require('./src/routes/adminRoutes');

// Middlewares
app.use(cors());
app.use(bodyparser.json());
app.use('/student', studentRouter);
app.use('/faculty', facultyRouter);
app.use('/admin', adminRouter);
app.use(express.static('./public'));


app.get('/',(req, res, next)=>{
    res.json({
        "statusCode": 200,
        "statusMessage": "Success"
    });
});






app.listen(3000, function(){
    console.log("Listening to port 3000");
});