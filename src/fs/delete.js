import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(filePath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
