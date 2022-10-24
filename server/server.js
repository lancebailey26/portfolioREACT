const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes'));
// get driver connection
const dbo = require('./db/connection');
app.use(function(request, response, next) {

	if (process.env.NODE_ENV != 'development' && !request.secure) {
	  return response.redirect("https://" + request.headers.host + request.url);
	}
next();
});
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
	// perform a database connection when server starts
	dbo.connectToServer(function (err) {
		if (err) console.error(err);
 
	});
});