const path = require('path');
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(
    cors({
      origin: [
        "https://localhost:3000",
        "https://localhost:3001",
      ],
    })
  );
app.enable('trust proxy');
app.use(function(request, response, next) {

      if (process.env.NODE_ENV != 'development' && !request.secure) {
        return response.redirect("https://" + request.headers.host + request.url);
      }
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});