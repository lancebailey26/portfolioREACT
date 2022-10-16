const router = require('express').Router();
const path = require('path');
// const apiRoutes = require('./api');
const blogRoutes = require('./blog')
// router.use('/api', apiRoutes);
router.use('/api', blogRoutes)
// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;