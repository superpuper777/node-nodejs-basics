import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(import.meta.url, 'worker.js');
const CPUcores = cpus().length;

const worker = new Worker(filePath, {
  workerData: 8,
});

worker.on('message', (msg) => {
  console.log('Fibonacci result', msg);
});

const createWorkers = (cores) => {
  const promises = [];
  let num = 10;
  for (let i = 0; i < cores; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(filePath, {
          workerData: num++,
        });
        worker.on('message', (data) => resolve({ status: 'resolved', data }));
        worker.on('error', () => resolve({ status: 'error', data: null }));
        worker.on('exit', (code) => {
          if (code !== 0) {
            resolve({ status: 'error', data: null });
          }
        });
      })
    );
  }
  return promises;
};

const performCalculations = async () => {
  Promise.allSettled(createWorkers(CPUcores)).then((results) =>
    results.forEach((result) => console.log(result.value))
  );
};

await performCalculations();
