const kue = require('kue');
const { sleep } = require('sleep');

const queue = kue.createQueue();
queue.process('mytype', (job, done) => {
  sleep(5);
  switch (job.data.letter) {
    case 'a':
      done(null, 'apple');
      break;
    default:
      done(null, 'unknown');
  }
});
