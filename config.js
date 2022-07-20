// const app_version = 'v1.0.0-dev'

const dotenv = require('dotenv');
const path = require('path');

 dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

 module.exports = {
  NODE_ENV : process.env.NODE_ENV || 'dev',
  APP_VERSION : process.env.VERSION || 'v1.0.0-dev',
  PORT : process.env.PORT || 3000
}