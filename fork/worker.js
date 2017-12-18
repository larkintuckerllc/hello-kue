const { sleep } = require('sleep');

process.on('message', ({ letter }) => {
  sleep(5); // ARTIFICIAL CPU INTENSIVE
  let fruit = null;
  switch (letter) {
    case 'a':
      fruit = 'apple';
      break;
    default:
      fruit = 'unknown';
  }
  process.send({ fruit });
});
