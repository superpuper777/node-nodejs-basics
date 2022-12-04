import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderPath = join(__dirname, 'files');
const fileList = [];

const list = async () => {
  if (!existsSync(folderPath)) {
    throw new Error('FS operation failed');
  }
  try {
    const files = await readdir(folderPath);
    for (const file of files) {
      fileList.push(file);
    }
    console.log(fileList);
  } catch (err) {
    console.error(err);
  }
};

await list();
