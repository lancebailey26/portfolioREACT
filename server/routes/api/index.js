const router = require('express').Router();
const blogRoutes = require('./blogroutes')
router.use('/blogs', blogRoutes);

module.exports = router;
