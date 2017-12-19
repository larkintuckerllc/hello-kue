const { cpus } = require('os');
const { fork } = require('child_process');

const numWorkers = cpus().length;
for (let i = 0; i < numWorkers; i += 1) {
  fork('./worker');
}
