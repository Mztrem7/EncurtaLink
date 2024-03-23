const express = require('express')
const app = express();
const route = require('./routes');

app.use(route)

app.listen(3344, ()=> console.log('listening on PORT 3344'))