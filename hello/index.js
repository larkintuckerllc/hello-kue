/* eslint-disable no-console */
const kue = require('kue');

const queue = kue.createQueue();
console.log('INDEX CONNECTED');
const job = queue.create('myqueue', {
  name: 'a',
})
  .save((err) => {
    if (err) {
      console.log('INDEX JOB SAVE FAILED');
      return;
    }
    job.on('complete', (result) => {
      console.log('INDEX JOB COMPLETE');
      console.log(result);
    });
    job.on('failed', (errorMessage) => {
      console.log('INDEX JOB FAILED');
      console.log(errorMessage);
    });
  });
