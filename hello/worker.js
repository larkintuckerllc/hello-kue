/* eslint-disable no-console */
const kue = require('kue');
const { sleep } = require('sleep');

const queue = kue.createQueue();
console.log('WORKER CONNECTED');
queue.process('mytype', (job, done) => {
  sleep(5);
  console.log('WORKER JOB COMPLETE');
  switch (job.data.letter) {
    case 'a':
      done(null, 'apple');
      break;
    default:
      done(null, 'unknown');
  }
});
