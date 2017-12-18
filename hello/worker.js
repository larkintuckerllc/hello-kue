/* eslint-disable no-console */
const kue = require('kue');

const queue = kue.createQueue();
console.log('WORKER CONNECTED');
queue.process('myqueue', (job, done) => {
  console.log('WORKER JOB COMPLETE');
  done(null, 'apple');
});
