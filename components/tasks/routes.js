const Controllers = require('./controller');

const router = require('express').Router();

router.post('/create', Controllers.createTask);

module.exports = router;
