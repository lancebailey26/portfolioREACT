const path = require('path');
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const cors = require("cors");
var enforce = require('express-sslify');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
      ],
    })
  );
app.use(enforce.HTTPS({ trustProtoHeader: true }));
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