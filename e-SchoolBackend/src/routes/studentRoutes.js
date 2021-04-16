const { urlencoded } = require('express');
const express = require('express');
const studentRouter = express.Router();
const jwt = require('jsonwebtoken');
studentRouter.use(express.json());
var Studentdata=require('../model/Studentdata');


studentRouter.get('/',(req, res, next)=>{
    res.send('success to student');
});


// Student Login Route
studentRouter.post('/',(req, res, next)=>{
        let StudentData = req.body
        Studentdata.findOne({username: StudentData.username, password: StudentData.password},(err, student)=>{
            if(!student)
            {
                res.status(401).send("Invalid Username");
                console.log('login failed username')

            }
            else
            {
                let payload ={subject:username+password}
                let token =jwt.sign(payload,'secretKey')
                res.status(200).send({token})
                console.log('login success');

            }
        })
});

module.exports = studentRouter;
