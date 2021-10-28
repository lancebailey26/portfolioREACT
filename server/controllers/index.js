const router = require('express').Router();
const blogRoutes = require('./blogroutes')
router.use('/blog', blogRoutes);

module.exports = router;
