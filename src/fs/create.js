import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(import.meta.url, 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
