const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Location = sequelize.define(
  "locations",
 {
  location_id: {
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement: true,
  },
  street_address: DataTypes.STRING,
  postal_code: DataTypes.STRING,
  city: DataTypes.STRING,
  state_province: DataTypes.STRING,
  country_id: DataTypes.STRING
 },
  {
    timestamps: false,
    associate: 
    function(models) {
      Location.hasOne(models.departments,{foreignKey:'location_id'})
    }


  }
);

module.exports=Location;
