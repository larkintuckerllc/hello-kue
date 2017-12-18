/* eslint-disable no-console */
const express = require('express');
const sleep = require('sleep');

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/intense', (req, res) => {
  sleep.sleep(5); // ARTIFICIAL CPU INTENSIVE
  res.send('Hello Intense!');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
