const config =  require('./config.js');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const express = require("express");
const app = express();
const os = require('os');
if(os.hostname()) {
var hostname = 'host: ' + os.hostname();
}

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get("/", function (req, res) {
 return res.send(hostname + '<br/>' + 'version: ' + config.APP_VERSION + '<br/>' + 'Application Port: ' + config.PORT);
});

// listen to port 3000 by default
app.listen( config.PORT, () => {
  console.log("Server is running on " + config.PORT);
});
module.exports = app