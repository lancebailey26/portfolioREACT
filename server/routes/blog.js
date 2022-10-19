const express = require('express');
 
// blogRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /blog.
const blogRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require('../db/connection');
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId;
 
 
// This section will help you get a list of all the blogs.
blogRoutes.route('/blogs').get(function (req, res) {
	let db_connect = dbo.getDb('portfolio');
	db_connect
		.collection('blogs')
		.find({})
		.toArray(function (err, result) {
			if (err) throw err;
			res.json(result);
		});
});
 
// This section will help you get a single blog by id
blogRoutes.route('/blogs/:id').get(function (req, res) {
	let db_connect = dbo.getDb();
	let myquery = { _id: ObjectId(req.params.id) };
	db_connect
		.collection('blogs')
		.findOne(myquery, function (err, result) {
			if (err) throw err;
			res.json(result);
		});
});
 
// This section will help you create a new blog.
blogRoutes.route('/blogs/add/top-secret/lancebailey').post(function (req, response) {
	let db_connect = dbo.getDb();
	let myobj = {
		title: req.body.title,
		blog: req.body.blog,
		date: new Date(),
	};
	db_connect.collection('blogs').insertOne(myobj, function (err, res) {
		if (err) throw err;
		response.json(res);
	});
});
 
// This section will help you update a blog by id.
// blogRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("blogs")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// This section will help you delete a blog
// blogRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("blogs").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
module.exports = blogRoutes;