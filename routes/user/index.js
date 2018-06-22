const user = require('express').Router();

const userCtrl = require('./user.ctrl');

user.get('/', userCtrl.index);

module.exports = user;