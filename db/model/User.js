const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stud_Id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });
};