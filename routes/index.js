const express = require('express');
const router = express.Router();

const user = require('./user');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user',user);

module.exports = router;
