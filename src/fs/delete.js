import { rm } from 'node:fs/promises';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(import.meta.url, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(filePath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
