import * as fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const oldFileNamePath = join(__dirname, 'files', 'wrongFilename.txt');
const newFileNamePath = join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    if (!existsSync(oldFileNamePath) || existsSync(newFileNamePath)) {
      throw new Error('FS operation failed');
    }
    await fs.rename(oldFileNamePath, newFileNamePath);
  } catch (err) {
    console.error(err);
  }
};

await rename();
