import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { getFilePath } from '../helpers.mjs';

const folderPath = getFilePath(import.meta.url, 'files');
const targetFolderPath = getFilePath(import.meta.url, 'files_copy');

const copy = async () => {
  try {
    await mkdir(targetFolderPath);
    const files = await readdir(folderPath);
    await Promise.all(
      files.map((file) =>
        copyFile(`${folderPath}/${file}`, `${targetFolderPath}/${file}`)
      )
    );
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

copy();
