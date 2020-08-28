'use strict'

const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// server will run on localhost:3000 by default
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${server.address().port} in ${app.settings.env} mode.`);
});

// set CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// base endpoint
app.get('/', (req, res) => {
  const data = {
    text: 'CS 4261 programming assignment 1'
  };
  res.json(data);
  return;
});

// add enpoint
app.post('/add', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 + num2;

  const data = {
    result: result
  };
  res.json(data);
  return;
});

// subtract endpoint
app.post('/subtract', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 - num2;

  const data = {
    result: result
  };
  res.json(data);
  return;
});

// multiply endpoint
app.post('/multiply', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 * num2;

  const data = {
    result: result
  };
  res.json(data);
  return;
});

// divide enpoint
app.post('/divide', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  let result = 0;

  if (num2 !== 0) {
    result = num1 / num2;
  }

  const data = {
    result: result
  };
  res.json(data);
  return;
});

app.use((req, res, next) => {
  res.status(404).send('Sorry, not found');
  return;
});