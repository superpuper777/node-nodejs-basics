import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(import.meta.url, 'files', 'fileToWrite.txt');

const write = async () => {
  const writableStream = await createWriteStream(filePath, { flags: 'a' });
  stdin.pipe(writableStream);
};

await write();
