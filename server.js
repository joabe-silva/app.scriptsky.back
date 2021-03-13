const express = require('express');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);