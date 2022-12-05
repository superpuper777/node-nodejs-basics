import { fork } from 'node:child_process';

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { stdin, stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(fileName, args.split(' '));
};

spawnChildProcess('--arg1 --arg2');
