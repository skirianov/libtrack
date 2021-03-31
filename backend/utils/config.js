require('dotenv').config();

let { PORT } = process.env;
const MONGODB_URI = process.env.MONGODB_URI;
if (PORT == null || PORT == "") {
  PORT = 3001;
};

module.exports = {
  PORT,
  MONGODB_URI,
};
