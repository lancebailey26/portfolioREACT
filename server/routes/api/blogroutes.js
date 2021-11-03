const router = require('express').Router();
const Blogs = require('../../models')

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

  
router.get('/blogs/:id', async (req, res) => {
  try {
    const blogData = await Blogs.findByPk(req.params.id)
    const blog = blogData.get({ plain: true });
    console.log(blog);
    res.json(blog)
  } catch (err) {
    res.status(500).json(err);
}});

  
module.exports = router;