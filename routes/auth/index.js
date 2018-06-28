const auth = require('express').Router();

const authCtrl = require('./auth.ctrl');

auth.post('/signIn', authCtrl.signIn);

module.exports = auth;
