const auth = require('express').Router();

const authCtrl = require('./auth.ctrl');

auth.post('/signIn', authCtrl.signIn);
auth.post('/logIn', authCtrl.logIn);

module.exports = auth;
