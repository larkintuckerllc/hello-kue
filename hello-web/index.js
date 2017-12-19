/* eslint-disable no-console */
const express = require('express');
const kue = require('kue');

const app = express();
const queue = kue.createQueue();
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/intense', (req, res) => {
  const job = queue.create('mytype', {
    title: 'mytitle',
    letter: 'a',
  })
    .removeOnComplete(true)
    .save((err) => {
      if (err) {
        res.send('error');
        return;
      }
      job.on('complete', (result) => {
        res.send(`Hello Intense ${result}`);
      });
      job.on('failed', () => {
        res.send('error');
      });
    });
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
