/* eslint-disable no-console */
const express = require('express');
const { fork } = require('child_process');

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/intense', (req, res) => {
  const worker = fork('./worker');
  worker.on('message', ({ fruit }) => {
    res.send(`Hello Intense ${fruit}!`);
    worker.kill();
  });
  worker.send({ letter: 'a' });
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
