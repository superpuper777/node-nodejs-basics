import { createReadStream } from 'node:fs';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(
  import.meta.url,
  'files',
  'fileToCalculateHashFor.txt'
);

const { createHash } = await import('node:crypto');
const hash = createHash('sha256');

const calculateHash = async () => {
  const input = createReadStream(filePath);
  input.on('readable', () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
