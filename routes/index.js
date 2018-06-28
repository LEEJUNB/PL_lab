const express = require('express');
const router = express.Router();

const user = require('./user');
const auth = require('./auth');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user', user);
router.use('/auth', auth);

module.exports = router;
