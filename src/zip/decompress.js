import { createUnzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';
import { exit } from 'node:process';
import { pipeline } from 'node:stream';

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = join(__dirname, 'files', 'fileToCompress.txt');
const archiveName = join(__dirname, 'files', 'archive.gz');

const unzip = createUnzip();
const source = createReadStream(archiveName);
const destination = createWriteStream(fileName);

const decompress = async () => {
  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error(err);
      exit(1);
    }
  });
};

await decompress();
