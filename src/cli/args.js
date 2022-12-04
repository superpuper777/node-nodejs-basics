import { argv } from 'node:process';

const arr = [];
const parseArgs = () => {
  for (let i = 2; i < argv.length; i = i + 2) {
    arr.push(`${argv[i]} is ${argv[i + 1]}`);
  }
  console.log(arr.join(', '));
};

parseArgs();
