const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
}).catch((e) => console.log('Unable to connect to mongodb' + e));

module.exports = {
  mongoose
};