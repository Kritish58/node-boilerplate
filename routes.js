const router = require('express').Router();
const userRoutes = require('./components/users/routes');
const taskRoutes = require('./components/tasks/routes');

router.use('/api/users', userRoutes);
router.use('/api/tasks', taskRoutes);

module.exports = router;
