const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");


const Departments = sequelize.define(
  "departments",
  {
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    department_name:DataTypes.STRING,
    location_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'locations',
        key:"location_id"
      }
    }
  },
  {
    timestamps: false,
    associate: 
      function(models) {
        Departments.belongsTo(models.locations,{foreignKey:'location_id'})
      }
  }
);

module.exports=Departments;
