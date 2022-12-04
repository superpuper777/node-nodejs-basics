import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(filePath, 'I am fresh and young', { flag: 'ax' });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
