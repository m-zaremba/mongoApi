const express = require('express');

const app = express();
const morgan = require('morgan');
const postRoutes = require('./routes/post.js');


app.use(morgan('dev'));

app.use('/', postRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
