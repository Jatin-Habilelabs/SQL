const express = require("express");
const { Model,Op } = require("sequelize");
const app = express();
const { sequelize } = require("../db/connection");

const Employee=require('../models/employees')

const hireAfterDaniel=async(req,res)=>{
const output=await Employee.findAll({
    attributes:[
        [sequelize.fn("avg",sequelize.col("salary")),"Average"],
        [sequelize.fn('max',sequelize.col('salary')),"Maximum"],
        [sequelize.fn('min',sequelize.col('salary')),"Minimum"],
        [sequelize.fn('sum',sequelize.col('salary')),"Sum"],
    ],

logging: true,
});

res.send(output);
}
module.exports=hireAfterDaniel;