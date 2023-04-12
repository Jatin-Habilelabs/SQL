const express = require("express");
const app = express();
const Empworked=require('../controller/employeeWorked')
const joinEmpDepLoc=require('../controller/joinEmpDepLoc')
const EmpMgr=require('../controller/selfJoinEmpMgr')
const Salary=require('../controller/salary');
const Count = require("../controller/count");

app.get("/employeeWorked",Empworked)
app.get('/join',joinEmpDepLoc)
app.get('/selfjoin',EmpMgr)//----
app.get('/salary',Salary)
app.get('/count',Count)
module.exports = app;
