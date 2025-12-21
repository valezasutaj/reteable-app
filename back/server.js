const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/rateables.routes');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
