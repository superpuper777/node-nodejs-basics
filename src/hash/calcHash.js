import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
const { createHash } = await import('node:crypto');
const hash = createHash('sha256');

const calculateHash = async () => {
  const input = createReadStream(fileName);
  input.on('readable', () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
