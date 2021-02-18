const router = require('express').Router();
const userRoutes = require('./components/users/routes');

router.use('/api/users', userRoutes);

module.exports = router;
