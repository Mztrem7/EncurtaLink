const express = require('express');
const route = express.Router();
const Controller = require('./Controllers/Controller')

route.get('/', Controller.raiz)



module.exports=route