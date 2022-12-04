import { cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderPath = join(__dirname, 'files');
const targetFolderPath = join(__dirname, 'files_copy');

console.log(__dirname, folderPath);

const copy = async () => {
  try {
    if (existsSync(targetFolderPath)) {
      throw new Error('FS operation failed');
    }
    await cp(
      folderPath,
      targetFolderPath,
      { recursive: true },
      { force: false },
      { errorOnExist: true }
    );
  } catch (err) {
    console.error(err);
  }
};

copy();
