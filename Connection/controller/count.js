const express = require("express");
const { Model } = require("sequelize");
const app = express();
const { sequelize } = require("../db/connection");
const Department = require("../models/departments");
const Location=require("../models/locations")

const Employee = require("../models/employees");

const Count = async (req, res) => {
  Employee.belongsTo(Department, { foreignKey: "department_id" });
  Department.hasMany(Employee, { foreignKey: "department_id" });
  Department.belongsTo(Location,{foreignKey:"location_id"})
  Location.hasMany(Department,{foreignKey:"location_id"})
  const output = await Employee.findAll({
    attributes: [
    [sequelize.fn("avg", sequelize.col("salary")), "Salary"],
    [sequelize.fn("count", sequelize.col("employee_id")), "Count"],],
    include: [
      {
        model: Department,
        attributes: ["department_name"],
        required: true,
        include:[
          {
            model:Location,
            attributes:["city"],
            required:true
          }
        ]
       
      },
      
    ],
    group: ["department_name","city","department.department_id","department.location_id"],

    logging: true,
  });

  res.send(output);
};
module.exports = Count;
