import { stdout } from 'node:process';
import { createReadStream } from 'node:fs';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
  const readableStream = createReadStream(filePath);
  readableStream.pipe(stdout);
};

await read();
