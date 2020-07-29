const express = require('express');
const dotenv =  require('dotenv');
//import 'babel-polyfill';
const ReflectionWithJsObject = require('./src/usingJSObject/controllers/Reflection');
const ReflectionWithDB = require('./src/usingDB/controller/Reflection');

dotenv.config();
const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

app.listen(3000)
console.log('app running on port ', 3000);