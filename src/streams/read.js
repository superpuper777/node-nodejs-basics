import { stdout } from 'node:process';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readableStream = createReadStream(fileName);
  readableStream.on('data', (chunk) => {
    stdout.write(`${chunk.toString()}\n`);
  });
  //   readableStream.pipe(stdout);
};

await read();
