import { readFile } from 'node:fs/promises';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
