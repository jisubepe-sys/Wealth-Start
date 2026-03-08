const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
app.use(bodyParser.json());

app.use('/api', apiRoutes);

mongoose.connect('mongodb://localhost/wealth-start', { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
