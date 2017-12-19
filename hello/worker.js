/* eslint-disable no-console */
const kue = require('kue');

const queue = kue.createQueue();
console.log('WORKER CONNECTED');
queue.process('mytype', (job, done) => {
  console.log('WORKER JOB COMPLETE');
  switch (job.data.letter) {
    case 'a':
      done(null, 'apple');
      break;
    default:
      done(null, 'unknown');
  }
});
