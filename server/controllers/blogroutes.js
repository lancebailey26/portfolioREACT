const router = require('express').Router();
const Blogs = require('../models')

router.get('/blogs', async (req, res) => {
    try {
      const blogData = await Blogs.findAll();
      const blogs = blogData.map((blog) => blog.get({ plain: true }));
      console.log(blogs);
    res.json(blogs)
    } catch (err) {
      console.error('you fucked up', err)
    }
  });

  
module.exports = router;