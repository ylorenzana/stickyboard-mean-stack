require('./config/config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

const { mongoose } = require('./db/mongoose.js');
const { authenticate } = require('./middleware/authenticate');
const usersRoute = require('./routes/users');
const stickiesRoute = require('./routes/stickies');

const app = express();
const port = process.env.PORT || 1337;
const corsOptions = {
  allowedHeaders: ['Content-Type', 'x-auth']
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRoute);
app.use('/stickies', stickiesRoute);

app.get('/', (req, res) => {
  res.send();
})

app.listen(port, () => {
  console.log('Server running on port: ' + port);
});

module.exports = { app };