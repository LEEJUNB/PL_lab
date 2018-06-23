const path = require('path');
const fs = require('fs');

const Sequelize = require('sequelize');

const config = require('../setting.json').database;

const sequelize = new Sequelize(config.databaseSchema, config.user, config.password, {
  host: config.host,
  dialect: config.database
});

console.log(__dirname);
const __modelPath = __dirname+`/model`;
const db = {};
fs.readdirSync(__modelPath)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js' && file !== 'config.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__modelPath, file));
    db[model.name] = model;
  });
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

module.exports = db;