// Display the employee last name and employee number along with their manager’s
//  last name and manager number.
//  Label the columns Employee, Emp#, Manager, and Mgr#, respectively.

const express = require("express");
const app = express();
const { sequelize } = require("../db/connection");
const Employee = require("../models/employees");

const EmpMgr=async(req,res)=>{
  Employee.hasMany(Employee,{foreignKey:'employee_id'})
  Employee.belongsTo(Employee,{foreignKey:'manager_id',as:"mgr"})
    const output = await Employee.findAll({
        attributes: [["last_name","Emp Name"],["employee_id","Emp ID"]],
        include: [
          {
            model: Employee,
            as:"mgr",
            attributes: [["employee_id","Mgr Id"],["last_name","Mgr Name"]],
            required: true,
         
          },
        ],
    
        logging: true,
      });
    
      res.send(output);   
}
module.exports=EmpMgr;