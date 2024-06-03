//server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Database/MongodbConfiguration');
const routes = require('./Routes/Routes');
require('dotenv').config();
const cors=require('cors')
const app = express();
app.use(())
app.use(bodyParser.json());
connectDB();
const PORT = process.env.PORT || 4000;

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}/`);
});