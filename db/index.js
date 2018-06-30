const path = require('path');
const fs = require('fs');

const Sequelize = require('sequelize');

const config = require('../config/setting.json').database;

const sequelize = new Sequelize(
  config.databaseSchema,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: config.database
  }
);

const __modelPath = __dirname + `/model`;
const db = {};
fs.readdirSync(__modelPath)
  .filter(function(file) {
    return (
      file.indexOf('.') !== 0 && (file !== 'index.js' && file !== 'config.js')
    );
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__modelPath, file));
    model.sync();
    db[model.name] = model;
  });
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User.hasMany(db.Attendance);
db.Attendance.belongsTo(db.User, { foreignKey: 'user_id' });

module.exports = db;
