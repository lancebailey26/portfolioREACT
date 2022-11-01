const router = require('express').Router();
const blogRoutes = require('./blog');
router.use('/api', blogRoutes);

module.exports = router;
