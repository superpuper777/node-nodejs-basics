import { fork } from 'node:child_process';
import { stdin, stdout } from 'node:process';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(import.meta.url, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(filePath, args.split(' '));
};

spawnChildProcess('--arg1 --arg2');
