import { createUnzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';
import { exit } from 'node:process';
import { pipeline } from 'node:stream';
import { getFilePath } from '../helpers.mjs';

const filePath = getFilePath(import.meta.url, 'files', 'fileToCompress.txt');
const archivePath = getFilePath(import.meta.url, 'files', 'archive.gz');

const unzip = createUnzip();
const source = createReadStream(archivePath);
const destination = createWriteStream(filePath);

const decompress = async () => {
  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error(err);
      exit(1);
    }
  });
};

await decompress();
