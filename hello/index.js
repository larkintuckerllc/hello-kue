/* eslint-disable no-console */
const kue = require('kue');

const queue = kue.createQueue();
console.log('INDEX CONNECTED');
const job = queue.create('mytype', {
  name: 'a',
})
  .removeOnComplete(true)
  .save((err) => {
    if (err) {
      console.log('INDEX JOB SAVE FAILED');
      process.exit(0);
      return;
    }
    job.on('complete', (result) => {
      console.log('INDEX JOB COMPLETE');
      console.log(result);
      process.exit(0);
    });
    job.on('failed', (errorMessage) => {
      console.log('INDEX JOB FAILED');
      console.log(errorMessage);
      process.exit(0);
    });
  });
