const router = require('express').Router();
const blogRoutes = require('./blogroutes')
router.use('/api', blogRoutes);

module.exports = router;
