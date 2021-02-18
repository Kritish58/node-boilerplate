const express = require('express');
const Controllers = require('./controllers');
const router = express.Router();

router.post('/signup', Controllers.signup);

module.exports = router;
