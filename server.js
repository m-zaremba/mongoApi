/* eslint-disable no-console */
/* eslint-disable promise/catch-or-return */
const express = require('express');

const app = express();

const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
const postRoutes = require('./routes/post.js');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

app.use(morgan('dev'));
app.use(express.json());
app.use('/', postRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
