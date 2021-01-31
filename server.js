const express = require('express');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

//require('./src/model/Item');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);